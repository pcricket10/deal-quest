// frontend/src/store
import { csrfFetch } from "./csrf"

const LOAD_PRODUCTS = 'products/loadProducts'
const ADD_PRODUCT = 'products/addProduct'
const DELETE_PRODUCT = 'products/deleteProduct'

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
  const Product = await response.json();
  dispatch(addProduct(Product));
  return Product.id;

}

export const editProduct = editedProduct => async (dispatch) => {
  const response = await csrfFetch(`/api/products/${editedProduct.id}/edit`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedProduct)
  });
  const product = await response.json();
  dispatch(addProduct(product));
  return editedProduct.id;
}

export const deleteProduct = id => async (dispatch) => {
  const response = await csrfFetch(`/api/products/${id}/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
  const product = await response.json()
  dispatch(deleteProduct(product))
  // return null;
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
      // const addedProduct = action.product
      // return { ...state, addedProduct }
      const newState = { ...state };

      newState[action.product.id] = action.product
      return newState;


    case DELETE_PRODUCT:
      newState = { ...state };
      let newProductState = { ...state.productState }
      delete newProductState[action.id]
      newState.productState = newProductState
      return newState;



    default:
      return state;
  }
}

export default productReducer;
