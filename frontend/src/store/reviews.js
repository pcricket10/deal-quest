// frontend/src/store
import { csrfFetch } from "./csrf"

const LOAD_REVIEWS = 'reviews/loadreviews'
const ADD_REVIEW = 'reviews/addReview'
const DELETE_REVIEW = 'reviews/deleteReview'

export const loadreviews = reviews => {
  return {
    type: LOAD_REVIEWS,
    reviews //payload
  }
}
export const addReview = review => {
  return {
    type: ADD_REVIEW,
    review
  }
}
export const fetchReviews = () => async (dispatch) => {
  const response = await fetch('/api/reviews');
  if (response.ok) {
    const reviews = await response.json();
    dispatch(loadreviews(reviews));
    return reviews;
  }
}

export const fetchOneReview = id => async (dispatch) => {
  const response = await fetch(`/api/reviews/${id}`)
  if (response.ok) {
    const review = await response.json();
    dispatch(addReview(review))
  }
}

export const createReview = newReview => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newReview)
  });
  const { review } = await response.json();
  dispatch(addReview(review));
  return review;

}

export const editReview = editedReview => async (dispatch) => {
  console.log(editedReview.id, "editedReview.id")
  const response = await csrfFetch(`/api/reviews/${editedReview.id}/edit`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedReview)
  });
  const review = await response.json();
  dispatch(addReview(review));
  console.log(review, "review")
  return editedReview.id;
}

export const deleteReview = id => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${id}/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
  const review = await response.json()
  dispatch(deleteReview(review))
  return null;
}

const reviewReducer = (state = {}, action) => {
  const newState = {}

  switch (action.type) {

    case LOAD_REVIEWS:
      const loadedReviews = {}
      action.reviews.forEach(review => loadedReviews[review.id] = review);
      console.log(loadedReviews, "LOADEDreviews!")
      return { ...state, ...loadedReviews };
    case ADD_REVIEW:
      // const newState = {...state}
      // newState[action.product.id] = action.product
      // const addedProduct = action.product
      // console.log(addedProduct, "ADDEDreviews!")
      // return { ...state, addedProduct }
      newState = { ...state };
      // console.log(action.product, "ACTION PRODUCT");

      newState[action.review.id] = action.review
      // console.log(newState, "NEW STATE!!!!")
      return newState;

    case DELETE_REVIEW:
      newState = null;
      return newState;



    default:
      return state;
  }
}

export default reviewReducer;
