//frontend/src/components/ProductDetails/index.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route, Switch, NavLink, useParams } from 'react-router-dom';
import { fetchOneProduct } from '../../store/products';
import "./ProductDetails.css"

const ProductDetails = () => {

  const { id } = useParams();
  console.log(id, "34334343234")

  let product = useSelector(state => state.productState.entries).find(obj => obj.id === Number(id));

  // let obj = product.find(obj => obj.id === 4);
  // product = product.find(obj => obj.id === id)
  console.log("====================")
  console.log(product);
  console.log("====================")
  const [editProductForm, setEditProductForm] = useState(false);
  const [editid, setEditid] = useState(null)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOneProduct(id));
    console.log(id, 'asdfs')
  }, [id])

  useEffect(() => {
    console.log(product, "DFDSFSERSRE")
  }, [product])
  if (!product) return null


  let content = null;

  return (
    <>
      <h1>hello there</h1>
      <h2>{product.name}</h2>
      <img src={product.imgUrl}></img>
      <p>{product.price} {product.Currency.unit}</p>
      <p>{product.User.username}</p>
    </>


  )
}

export default ProductDetails;
