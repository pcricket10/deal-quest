//frontend/src/components/HomePage/index.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route, Switch, NavLink } from 'react-router-dom';
import { fetchProducts } from '../../store/products';
import "./HomePage.css"

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productState)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    dispatch(fetchProducts())
      .then(() => setIsLoaded(true))
  }, [dispatch])

  if (!isLoaded) return null;
  return (
    <div>
      <h1>Deal Quest:</h1>
      <h3>Your one-stop shop for Weapons, items, and power-ups!</h3>
      <div id="products">
        {
          products && Object.values(products).map(({ id, userId, name, imgUrl, price, Currency, User }) => (
            <NavLink to={`/products/${id}`} key={id}>
              <div className="product">
                <div className='product-user-img'>
                  <img className="thumbnail" src={imgUrl} alt={`${name} image`} />
                  <div className='product-user'>
                    <h2 className='product-name'>{name}</h2>
                    <p className='username'>{User?.username}</p>
                  </div>
                </div>
                <div className='price'>
                  <p >Price: {price} {Currency?.unit}</p>
                </div>
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
