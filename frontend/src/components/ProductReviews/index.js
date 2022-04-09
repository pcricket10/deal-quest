import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route, Switch, NavLink, useParams } from 'react-router-dom';
import { fetchOneProduct } from '../../store/products';
import { fetchOneProductReviews } from '../../store/reviews'
import NewReview from '../NewReview/index'
import EditReview from '../EditReview/index'
import DeleteReview from '../DeleteReview/index'
import "./ProductReviews.css"

const ProductReviews = ({ product }) => {

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false)
  const [edit, setEdit] = useState(null);
  const [remove, setRemove] = useState(null);
  const [displayEditForm, setDisplayEditForm] = useState(null)
  const sessionUser = useSelector(state => state.session.user);
  let canReview;
  if (sessionUser) {
    canReview = (<NewReview productId={product.id} />)
  }

  // console.log(sessionUser.id, '==========', product.Reviews.id)



  // if (sessionUser && product.Reviews && sessionUser.id === product.Reviews.userId) {
  //   canEdit = (
  //     <div className='edit-and-delete'>
  //       {/* <NavLink to={`/products/${product.id}/edit`}><button>edit</button></NavLink>
  //       <NavLink to={`/products/${product.id}/delete`}><button>delete</button></NavLink> */}
  //       <button onClick={() => { console.log("clicky"); setEdit(!edit); setRemove(null) }}>edit</button>
  //       <button onClick={() => { setRemove(!remove); setEdit(null) }}>delete</button>
  //     </div>
  //     // <button>YEAHHHHBOOIIIIIIII</button>

  //   )

  // }
  // if (edit) {

  //   theForm = (
  //     <div className='edit-form'>
  //       <EditReview productId={product.id} />
  //     </div>
  //   )
  // }
  // else if (remove) {

  //   theForm = (<div className='delete-form'>
  //     <DeleteReview productId={product.id} />
  //   </div>)
  //}

  if (!product.Reviews) return null;


  return (
    <div>
      <h1>Product Reviews</h1>
      {canReview}
      <div id="reviews">
        {



          product.Reviews && Object.values(product.Reviews).map(({ id, userId, productId, title, content, User }) => {
            let canEditDelete
            // console.log(sessionUser.id, "ID", userId, "USERID")
            if (sessionUser && sessionUser.id === userId) {
              // console.log(id, "IDDD")

              let theForm
              if (edit) {

                theForm = (
                  <div className='edit-form'>
                    <EditReview reviewId={id} />
                  </div>
                )
              }
              else if (remove) {

                theForm = (<div className='delete-form'>
                  <DeleteReview reviewId={id} />
                </div>)
                // setRemove(false)

              }



              canEditDelete = (

                <div className='edit-and-delete'>
                  {/* <NavLink to={`/products/${product.id}/edit`}><button>edit</button></NavLink>
                  <NavLink to={`/products/${product.id}/delete`}><button>delete</button></NavLink> */}
                  <button onClick={(e) => { setEdit(!edit); setRemove(null); }}>edit</button>
                  <button onClick={(e) => { setRemove(!remove); setEdit(null); }}>delete</button>
                  {theForm}
                </div>
              )

              // theForm = null;
            }
            // else canEditDelete = null

            return product.Reviews && (
              <div key={id} className="review">
                <p className="review-title">{title}</p>
                <h2>{User?.username}</h2>
                <p>{content}</p>
                {canEditDelete}
              </div>



            )
          })
        }
      </div>

    </div>
  )
}

export default ProductReviews;
