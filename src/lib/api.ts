import { Currency, Rate } from 'src/typings/api';
import { formatDate } from './format';

export async function getCurrencies(): Promise<Array<Currency>> {
  const url = `${process.env.API_PATH}/getcurrencies`;

  const response = await fetch(url);
  const data = await response.json();
  if (data.status === 'OK') {
    return data.details;
  }
  return [];
}

export async function getRate(
  date: Date,
  from: string,
  to: string,
): Promise<Rate | null> {
  const params = new URLSearchParams();
  params.set('from_code', from);
  params.set('to_code', to);
  params.set('date', formatDate(date));

  const url = `${process.env.API_PATH}/getrate?${params.toString()}`;

  const response = await fetch(url);
  const data = await response.json();
  if (data.status === 'OK') {
    const {
      date: d,
      fromCode,
      toCode,
      rate
    } = data.details;

    return {
      date: new Date(d),
      fromCode,
      toCode,
      rate,
    };
  }
  return null;
}

export function wake(): void {
  fetch(`${process.env.API_PATH}/wake`);
}
