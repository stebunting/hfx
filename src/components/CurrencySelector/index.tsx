import React from 'react';
import { Currency } from 'src/typings/api';

import s from './style.module.less';

interface Props {
  label: string,
  name: string,
  value: string,
  currencies: Array<Currency>,
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
}

function DateInput(props: Props): React.ReactElement {
  const {
    label,
    name,
    value,
    currencies,
    handleChange
  } = props;

  return (
    <div className={s.currencyInput}>
      <label
        className={s.label}
        htmlFor={name}
      >
        {label}
        <select
          className={s.currencySelector}
          id={name}
          name={name}
          value={value}
          disabled={currencies.length === 0}
          onChange={handleChange}
        >
          <option value="" hidden>
            No currencies available
          </option>
          {currencies.map((currency) => (
            <option
              key={currency.code}
              value={currency.code}
            >
              {currency.code}
              {' | '}
              {currency.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default DateInput;
