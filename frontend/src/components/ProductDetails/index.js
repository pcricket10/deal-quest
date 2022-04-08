//frontend/src/components/ProductDetails/index.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route, Switch, NavLink, useParams } from 'react-router-dom';
import { fetchOneProduct } from '../../store/products';
import DeletePage from '../DeletePage';
import EditProductForm from '../EditProductForm';
import ProductReviews from '../ProductReviews'
import "./ProductDetails.css"
const ProductDetails = () => {
  const sessionUser = useSelector(state => state.session.user);

  const { id } = useParams();

  let product = useSelector(state => state.productState[+id]);


  // let obj = product.find(obj => obj.id === 4);
  // product = product.find(obj => obj.id === id)
  const [edit, setEdit] = useState(null);
  const [remove, setRemove] = useState(null);
  const dispatch = useDispatch();


  // let form;
  let editAndDelete;
  // let form;
  let theForm;
  if (product && sessionUser.id === product.userId) {
    editAndDelete = (
      <div className='edit-and-delete'>
        {/* <NavLink to={`/products/${product.id}/edit`}><button>edit</button></NavLink>
        <NavLink to={`/products/${product.id}/delete`}><button>delete</button></NavLink> */}
        <button onClick={() => { setEdit(!edit); setRemove(null) }}>edit</button>
        <button onClick={() => { setRemove(!remove); setEdit(null) }}>delete</button>
      </div>

    )

  }

  if (edit) {

    theForm = (
      <div className='edit-form'>
        <EditProductForm />
      </div>
    )
  }
  else if (remove) {

    theForm = (<div className='delete-form'>
      <DeletePage />
    </div>)
  }



  // if (edit) {
  //   setRemove(null);
  //   theForm = (
  //     <div className='edit-form'>
  //       <EditProductForm />
  //     </div>
  //   )
  // }
  // else if (remove) {
  //   setEdit(null)
  //   theForm = (<div className='delete-form'>
  //     <DeletePage />
  //   </div>)
  // }
  // theForm = (<h1>hahaha</h1>)

  useEffect(() => {
    dispatch(fetchOneProduct(id));
  }, [id])




  if (!product) return null


  let content = null;

  return product && (
    <>
      <h1>hello there</h1>
      <h2>{product?.name}</h2>
      <img src={product?.imgUrl}></img>
      <p>{product?.price} {product?.Currency.unit}</p>
      <p>{product?.User?.username}</p>
      {editAndDelete}
      {theForm}

      <ProductReviews />

    </>


  )
}

export default ProductDetails;
