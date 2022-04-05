import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route, Switch, NavLink, useParams } from 'react-router-dom';
import { fetchOneProduct } from '../../store/products';
import "./ProductEditForm.css"

const ProductEditForm = () => {
  return (<h1>hello from producteditform!</h1>)
}

export default ProductEditForm;
