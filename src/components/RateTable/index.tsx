import React from 'react';
import { formatDate } from 'src/lib/format';
import { Rate } from 'src/types/api';

import s from './style.module.less';
import CopyIcon from '../Copy Icon';

interface Props {
  rates: Array<Rate>,
  from: string,
  to: string,
  amount: number,
  fromSymbol: string,
  toSymbol: string,
}

function RateTable(props: Props): React.ReactElement {
  const {
    rates,
    from,
    to,
    amount,
    fromSymbol,
    toSymbol,
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
            const conversion = (rate * amount).toFixed(2);

            return (
              <tr key={date.toString()}>
                <td className={s.cell}>
                  {formatDate(new Date(date))}
                </td>
                <td className={s.cell}>
                  {rate.toFixed(6)}
                  <CopyIcon text={rate.toString()} />
                </td>
                <td className={s.cell}>
                  {(invRate).toFixed(6)}
                  <CopyIcon text={invRate.toString()} />
                </td>
                <td className={s.cell}>
                  {conversion}
                  {' '}
                  {toSymbol}
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
