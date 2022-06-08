//frontend/src/components/ProductDetails/index.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchOneProduct } from '../../store/products';
import DeleteProduct from '../DeleteProduct';
import EditProductForm from '../EditProductForm';
import ProductReviews from '../ProductReviews';
import "./ProductDetails.css";

const ProductDetails = () => {
  const sessionUser = useSelector(state => state.session.user);
  const { id } = useParams();
  let product = useSelector(state => state.productState[+id]);
  const dispatch = useDispatch();
  // let obj = product.find(obj => obj.id === 4);
  // product = product.find(obj => obj.id === id)

  const [edit, setEdit] = useState(null);
  const [remove, setRemove] = useState(null);



  let editAndDelete;
  let theForm;
  if (sessionUser && product && sessionUser.id === product.userId) {
    editAndDelete = (
      <div className='edit-and-delete'>
        {/* <NavLink to={`/products/${product.id}/edit`}><button>edit</button></NavLink>
        <NavLink to={`/products/${product.id}/delete`}><button>delete</button></NavLink> */}
        <button onClick={() => { setEdit(!edit); setRemove(null) }}>edit</button>
        <button onClick={() => { setRemove(!remove); setEdit(null) }}>delete</button>
      </div>

    )
  }








  // if (edit) {

  //   theForm = (
  //     <div className='edit-form'>
  //       <EditProductForm />
  //     </div>
  //   )
  // }
  // else if (remove) {

  //   theForm = (<div className='delete-form'>
  //     <DeleteProduct />
  //   </div>)
  // }


  useEffect(() => {
    dispatch(fetchOneProduct(id));
  }, [id])


  if (!product) return null


  return product && (
    <>
      <h1 className='title'>{product?.name}</h1>
      <img className='product-img' src={product?.imgUrl}></img>
      <p>{product?.price} {product?.Currency.unit}</p>
      <p>{product?.User?.username}</p>
      {editAndDelete}
      <div id="product-reviews">
        {theForm}
        <ProductReviews product={product} />
      </div>

    </>


  )
}

export default ProductDetails;
