const locale = 'sv-SE';

export function formatDate(d: Date): string {
  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const date = d.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${date}`;
}

export function formatExchangeRate(n: number, precision?: number): string {
  return new Intl.NumberFormat(locale, {
    style: 'decimal',
    maximumFractionDigits: precision ?? 20,
    minimumFractionDigits: precision ?? 0,
  }).format(n);
}

export function formatCurrency(n: number, code: string): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: code,
  }).format(n);
}
