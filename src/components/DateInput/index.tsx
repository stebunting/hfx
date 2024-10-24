import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import s from './style.module.less';

interface Props {
  label: string,
  name: string,
  disabled: boolean,
  value: Date | null,
  handleChange: (date: Date | null) => void,
}

function DateInput(props: Props): React.ReactElement {
  const {
    label,
    name,
    disabled,
    value,
    handleChange
  } = props;

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() - 1);

  return (
    <div className={s.dateInput}>
      <label
        className={s.label}
        htmlFor={name}
      >
        {label}
        <DatePicker
          className={s.datePicker}
          name={name}
          id={name}
          selected={value}
          dateFormat="yyyy-MM-dd"
          disabled={disabled}
          maxDate={maxDate}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default DateInput;
