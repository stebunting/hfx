import React from 'react';

import s from './style.module.less';

interface Props {
  symbol: string,
  name: string,
  disabled: boolean,
  value: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

function AmountInput(props: Props): React.ReactElement {
  const {
    symbol,
    name,
    disabled,
    value,
    handleChange,
  } = props;

  return (
    <div
      className={s.amountInputContainer}
    >
      <label
        className={s.label}
        htmlFor={name}
      >
        Amount
        {symbol !== '' && ` /${symbol}`}
        <input
          className={s.amountInput}
          type="text"
          name={name}
          id={name}
          disabled={disabled}
          value={value}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default AmountInput;
