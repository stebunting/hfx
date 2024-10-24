import React from 'react';
import { formatCurrency, formatDate, formatExchangeRate } from 'src/lib/format';
import { Rate } from 'src/typings/api';

import s from './style.module.less';
import CopyIcon from '../Copy Icon';

interface Props {
  rates: Array<Rate>,
  from: string,
  to: string,
  amount: number,
  fromSymbol: string,
}

function RateTable(props: Props): React.ReactElement {
  const {
    rates,
    from,
    to,
    amount,
    fromSymbol,
  } = props;

  return (
    <div className={s.rateTableContainer}>
      <table className={s.rateTable}>
        <thead>
          <tr>
            <th className={s.headerCell}>Date</th>
            <th className={s.headerCell}>
              {from === '' || to === '' ? 'Rate' : `${from}/${to}`}
            </th>
            <th className={s.headerCell}>
              {from === '' || to === '' ? 'Inv. Rate' : `${to}/${from}`}
            </th>
            <th className={s.headerCell}>
              {from === '' || to === '' ? 'Conversion' : `${amount} ${fromSymbol}`}
            </th>
          </tr>
        </thead>
        <tbody>
          {rates.map((r) => {
            const { date, rate } = r;
            const invRate = 1 / rate;
            const conversion = formatCurrency(rate * amount, to);

            return (
              <tr key={date.toString()}>
                <td className={s.cell}>
                  {formatDate(new Date(date))}
                </td>
                <td className={s.cell}>
                  {formatExchangeRate(rate, 6)}
                  <CopyIcon text={formatExchangeRate(rate)} />
                </td>
                <td className={s.cell}>
                  {formatExchangeRate(invRate, 6)}
                  <CopyIcon text={formatExchangeRate(invRate)} />
                </td>
                <td className={s.cell}>
                  {conversion}
                  <CopyIcon text={conversion} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default RateTable;
