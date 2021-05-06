export interface Currency {
  code: string,
  name: string,
  symbol: string,
}

export interface GetCurrencies {
  status: 'OK' | 'Error',
  details: Array<Currency>,
}

export interface Rate {
  date: Date,
  fromCode: string,
  toCode: string,
  rate: number,
}
