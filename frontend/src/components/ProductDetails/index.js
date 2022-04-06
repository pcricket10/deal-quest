//frontend/src/components/ProductDetails/index.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route, Switch, NavLink, useParams } from 'react-router-dom';
import { fetchOneProduct } from '../../store/products';
import "./ProductDetails.css"

const ProductDetails = () => {

  const { id } = useParams();

  let product = useSelector(state => state.productState.entries).find(obj => obj.id === Number(id));

  // let obj = product.find(obj => obj.id === 4);
  // product = product.find(obj => obj.id === id)
  const [editProductForm, setEditProductForm] = useState(false);
  const [editid, setEditid] = useState(null)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOneProduct(id));
  }, [id])


  if (!product) return null


  let content = null;

  return (
    <>
      <h1>hello there</h1>
      <h2>{product.name}</h2>
      <img src={product.imgUrl}></img>
      <p>{product.price} {product.Currency.unit}</p>
      <p>{product.User.username}</p>
      <NavLink to={`/products/${product.id}/edit`}><button>edit</button></NavLink>
    </>


  )
}

export default ProductDetails;
