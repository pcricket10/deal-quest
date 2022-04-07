// frontend/src/store
import { csrfFetch } from "./csrf"

const LOAD_PRODUCTS = 'products/loadProducts'
const ADD_PRODUCT = 'products/addProduct'

export const loadProducts = products => {
  return {
    type: LOAD_PRODUCTS,
    products //payload
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
  if (response.ok) {
    const products = await response.json();
    dispatch(loadProducts(products));
    return products;
  }
}

export const fetchOneProduct = id => async (dispatch) => {
  const response = await fetch(`/api/products/${id}`)
  if (response.ok) {
    const product = await response.json();
    dispatch(addProduct(product))
  }
}

export const createProduct = newProduct => async (dispatch) => {
  const response = await csrfFetch(`/api/products/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newProduct)
  });
  const product = await response.json();
  dispatch(addProduct(product));
  return product;

}

export const editProduct = editedProduct => async (dispatch) => {
  console.log(editedProduct.id, "#$#$#$@#$@#$")
  const response = await csrfFetch(`/api/products/${editedProduct.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedProduct)
  });
  const product = await response.json();
  dispatch(addProduct(product));
  return product;
}

const productReducer = (state = {}, action) => {
  const newState = {}

  switch (action.type) {

    case LOAD_PRODUCTS:
      const loadedProducts = {}
      action.products.forEach(product => loadedProducts[product.id] = product);
      return { ...state, ...loadedProducts };
    case ADD_PRODUCT:
      // const newState = {...state}
      // newState[action.product.id] = action.product
      return { ...state, [action.product.id]: action.product }
    default:
      return state;
  }
}

export default productReducer;
