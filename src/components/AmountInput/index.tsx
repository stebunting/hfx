import React from 'react';

import s from './style.module.less';

interface Props {
  label: string,
  name: string,
  value: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

function AmountInput(props: Props): React.ReactElement {
  const {
    label,
    name,
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
        {label}
        <input
          className={s.amountInput}
          type="text"
          name={name}
          id={name}
          value={value}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default AmountInput;
