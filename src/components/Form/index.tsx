import React from 'react';
import DateInput from 'src/components/DateInput';
import CurrencySelector from 'src/components/CurrencySelector';
import { Currency } from 'src/types/api';

import s from './style.module.less';
import AmountInput from '../AmountInput';

export interface FormData {
  startDate: Date | null,
  endDate: Date | null,
  currencyFrom: string,
  currencyTo: string,
  amount: number,
}

interface Props {
  values: FormData,
  symbol: string,
  currencies: Array<Currency>,
  handleDateChange: (id: 'startDate' | 'endDate', date: Date | null) => void,
  handleChange: (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void,
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
  handleCurrencySwap: () => void,
}

function Form(props: Props): React.ReactElement {
  const {
    values,
    symbol,
    currencies,
    handleDateChange,
    handleChange,
    handleSubmit,
    handleCurrencySwap,
  } = props;

  const disabled = currencies.length === 0;

  return (
    <div className={s.form}>
      <form onSubmit={handleSubmit}>
        <DateInput
          label="Start Date"
          name="startDate"
          disabled={disabled}
          value={values.startDate}
          handleChange={(date) => handleDateChange('startDate', date)}
        />
        <DateInput
          label="End Date"
          name="endDate"
          disabled={disabled}
          value={values.endDate}
          handleChange={(date) => handleDateChange('endDate', date)}
        />
        <CurrencySelector
          label="Currency 1"
          name="currencyFrom"
          value={values.currencyFrom}
          currencies={currencies}
          handleChange={handleChange}
        />
        <CurrencySelector
          label="Currency 2"
          name="currencyTo"
          value={values.currencyTo}
          currencies={currencies}
          handleChange={handleChange}
        />
        <AmountInput
          symbol={symbol}
          name="amount"
          disabled={disabled}
          value={values.amount.toString()}
          handleChange={handleChange}
        />
        <button
          className={s.button}
          type="submit"
          disabled={disabled}
        >
          Submit
        </button>
        <button
          className={s.button}
          type="button"
          disabled={disabled}
          onClick={handleCurrencySwap}
        >
          Reverse
        </button>
      </form>
    </div>
  );
}

export default Form;
