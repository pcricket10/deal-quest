import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route, Switch, NavLink, useParams } from 'react-router-dom';
import { fetchOneProduct } from '../../store/products';
import { fetchReviews } from '../../store/reviews'
import DeletePage from '../DeletePage';

import "./ProductReviews.css"

const ProductReviews = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.reviewState)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    dispatch(fetchReviews())
      .then(() => setIsLoaded(true))
  }, [dispatch])

  if (!isLoaded) return null;
  return (
    <div>
      <h1>Product Reviews</h1>
      <div id="reviews">
        {
          reviews && Object.values(reviews).map(({ id, userId, productId, content, User }) => (
            <div key={id}>
              <p>{User?.username}</p>
              <p>{content}</p>
              <p>=========================================================</p>
            </div>

          ))
        }
      </div>

    </div>
  )
}

export default ProductReviews;
