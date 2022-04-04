//frontend/src/components/HomePage/index.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route, Switch, NavLink } from 'react-router-dom';
import { fetchProducts } from '../../store/product';

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productState.entries)

  useEffect(() => {
    dispatch(fetchProducts());
    console.log(products, "!!!!!")
  }, [dispatch, products])
  return (
    <div>
      <h1>Deal Quest:</h1>
      <h3>Your one-stop shop for Weapons, items, and power-ups!</h3>
      <div>
        {/* {
          products.map(({ id, userId, name, imgUrl, price, currencyId }) => {
            <li key={id}><NavLink to={`/product/${id}`}>{name}</NavLink></li>
          })
        } */}
      </div>

    </div>
  )
}

export default HomePage;
