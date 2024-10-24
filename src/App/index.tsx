import React, { useState, useEffect } from 'react';
import RateTable from 'src/components/RateTable';
import Form, { FormData } from 'src/components/Form';
import { getCurrencies, getRate } from 'src/lib/api';
import { Currency, Rate } from 'src/typings/api';

import './style.less';
import s from './style.module.less';

function App(): React.ReactElement {
  const [fixed, setFixed] = useState({
    from: '',
    to: '',
    symbolFrom: '',
  });

  const endDate = new Date();
  const startDate = new Date();
  endDate.setDate(endDate.getDate() - 1);
  startDate.setDate(endDate.getDate() - 30);

  const [form, setForm] = useState({
    startDate,
    endDate,
    currencyFrom: 'SEK',
    currencyTo: 'GBP',
    amount: 0,
  } as FormData);

  const [rates, setRates] = useState([] as Array<Rate>);

  const [currencies, setCurrencies] = useState([] as Array<Currency>);
  useEffect(() => {
    if (currencies.length === 0) getCurrencies().then((c) => setCurrencies(c));
  }, [currencies.length]);

  const getSymbol = (code: string) => {
    const c = currencies.find((currency) => currency.code === code);
    return (c && c.symbol)
      ? c.symbol.split(',').reduce((a, b) => (
        a + String.fromCharCode(parseInt(b, 16))
      ), '')
      : '';
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    if (name === 'amount') {
      const v = value === '' ? 0 : parseFloat(value);
      if (!Number.isNaN(v)) {
        setForm({ ...form, amount: v });
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const swapCurrencies = () => {
    setForm({
      ...form,
      currencyFrom: form.currencyTo,
      currencyTo: form.currencyFrom,
    });
  };

  const handleDateChange = (id: 'startDate' | 'endDate', date: Date | null) => {
    setForm({ ...form, [id]: date });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.startDate === null || form.endDate === null) {
      return;
    }

    setRates([]);
    setFixed({
      from: form.currencyFrom,
      to: form.currencyTo,
      symbolFrom: getSymbol(form.currencyFrom),
    });
    for (let d = new Date(form.startDate); d <= form.endDate; d.setDate(d.getDate() + 1)) {
      getRate(d, form.currencyFrom, form.currencyTo)
        .then((rate) => {
          if (rate != null) {
            setRates((prevRates) => (
              [...prevRates, rate].sort((a, b) => (
                a.date.valueOf() - b.date.valueOf()
              ))));
          }
        }).catch(() => {
          // HANDLE ERROR
        });
    }
  };

  return (
    <div className={s.container}>
      <Form
        values={form}
        symbol={getSymbol(form.currencyFrom)}
        currencies={currencies}
        handleDateChange={handleDateChange}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCurrencySwap={swapCurrencies}
      />
      <RateTable
        rates={rates}
        from={fixed.from}
        to={fixed.to}
        amount={form.amount}
        fromSymbol={fixed.symbolFrom}
      />
    </div>
  );
}

export default App;
