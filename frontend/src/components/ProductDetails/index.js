//frontend/src/components/ProductDetails/index.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route, Switch, NavLink, useParams } from 'react-router-dom';
import { fetchOneProduct } from '../../store/products';
import "./ProductDetails.css"

const ProductDetails = () => {
  console.log("==============================================================")
  console.log(useParams())
  console.log("==============================================================")
  const { productId } = useParams();

  const product = useSelector(state => state.productState.entries[productId])

  const [editProductForm, setEditProductForm] = useState(false);
  const [editProductId, setEditProductId] = useState(null)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOneProduct(productId));
    console.log(productId, 'asdfs')
  }, [productId])

  useEffect(() => {
    console.log(product, "DFDSFSERSRE")
  }, [product])

  let content = null;

  return (
    <h4> hiiii</h4>


  )
}

export default ProductDetails;
