
const LOAD_CURRENCIES = 'currencies/loadCurrencies'

export const loadCurrencies = currencies => {
  return {
    type: LOAD_CURRENCIES,
    currencies
  }
}




export const fetchCurrencies = () => async (dispatch) => {
  const response = await fetch('/api/currencies');
  if (response.ok) {
    const currencies = await response.json();
    dispatch(loadCurrencies(currencies));
    return currencies;
  }
}

// const initialState = { entries: [], isLoading: true };

const currencyReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_CURRENCIES:
      const loadedCurrencies = {}
      action.currencies.forEach(currency => loadedCurrencies[currency.id] = currency);
      return { ...state, ...loadedCurrencies };
    default:
      return state;
  }
}

export default currencyReducer
