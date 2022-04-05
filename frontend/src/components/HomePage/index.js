//frontend/src/components/HomePage/index.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route, Switch, NavLink } from 'react-router-dom';
import { fetchProducts } from '../../store/products';
import "./HomePage.css"

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productState.entries)


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])
  return (
    <div>
      <h1>Deal Quest:</h1>
      <h3>Your one-stop shop for Weapons, items, and power-ups!</h3>
      <div id="products">
        {
          products && products.map(({ id, userId, name, imgUrl, price, Currency, User }) => (
            <NavLink to={`/products/${id}`}>
              <div key={id} className="product">
                <img className="thumbnail" src={imgUrl} alt={`${name} image`} />{name}
                <p>{User.username}</p>
                <p>Price: {price} {Currency.unit}</p>
              </div>
            </NavLink>
          ))
        }
      </div>

    </div>
  )
}
// { id, userId, name, imgUrl, price, currencyId }
export default HomePage;
