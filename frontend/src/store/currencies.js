
const LOAD_CURRENCIES = 'currencies/loadcurrencies'

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

const initialState = { entries: [], isLoading: true };

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CURRENCIES:
      return { ...state, entries: [...action.currencies] };
    default:
      return state;
  }
}

export default currencyReducer
