// frontend/src/store

const LOAD_PRODUCTS = 'product/loadProducts'
const ADD_PRODUCT = 'product/addProduct'

export const loadProducts = products => {
  return {
    type: LOAD_PRODUCTS,
    products
  }
}

export const addProduct = product => {
  return {
    type: ADD_PRODUCT,
    product
  }
}

export const fetchProducts = () => async (dispatch) => {
  const response = await fetch('/api/products');
  const products = await response.json();
  console.log(products, "DFDFDFFDSDF")
  dispatch(loadProducts(products));

}
const initialState = { entries: [], isLoading: true };

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...state, entries: [...action.products] };
    case ADD_PRODUCT:
      return { ...state, entries: [...state.entries, action.product] };
    default:
      return state;
  }
}

export default productReducer;
