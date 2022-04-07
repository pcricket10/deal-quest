import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route, Switch, NavLink, useParams } from 'react-router-dom';
import { fetchOneProduct } from '../../store/products';
import DeletePage from '../DeletePage';

import "./ProductReviews.css"

const ProductReviews = () => {
  return (
    <div>
      <h1>this is where reviews will go</h1>
      <p>one review</p>
      <p>another review</p>
      <p>yet another review</p>
    </div>
  )
}

export default ProductReviews;
