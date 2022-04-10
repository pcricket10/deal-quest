import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Redirect, Route, Switch, NavLink, useParams } from 'react-router-dom';
import { editProduct, fetchOneProduct, deleteProduct } from '../../store/products';
import { fetchCurrencies } from '../../store/currencies';
import "./DeleteProduct.css"

const DeleteProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user)


  // useEffect(() => {
  //   dispatch(deleteProduct(id));
  // }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const deletedProduct = dispatch(deleteProduct(id));

    if (deletedProduct) history.push("/")
  }

  return (

    <form onSubmit={handleSubmit}>
      <div>
        <p>Are you sure you want to delete ? </p>

        <button type="submit">Yes</button>
      </div>
    </form>

  )

}
export default DeleteProduct;
