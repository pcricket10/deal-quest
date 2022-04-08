import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Redirect, Route, Switch, NavLink, useParams } from 'react-router-dom';
import { editProduct, fetchOneProduct, deleteProduct } from '../../store/products';
import { fetchCurrencies } from '../../store/currencies';
import "./DeletePage.css"

const DeletePage = () => {
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
        <h2> welcome to delete page!!</h2>
        <h1>Are you sure you want to delete "product"? </h1>

        <button type="submit">Yes</button>
      </div>
    </form>

  )

}
export default DeletePage;
