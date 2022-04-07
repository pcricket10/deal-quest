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

  return (
    <div>
      <h2> welcome to delete page!!</h2>
      <h1>Are you sure you want to delete "product"? </h1>
      <button>Yes</button>
      <button>NO</button>
    </div>
  )
}

export default DeletePage;
