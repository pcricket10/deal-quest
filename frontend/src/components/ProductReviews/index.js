
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route, Switch, NavLink, useParams } from 'react-router-dom';
import { fetchOneProduct } from '../../store/products';
import { fetchOneProductReviews, fetchOneReview } from '../../store/reviews'
import NewReview from '../NewReview/index'
import EditReview from '../EditReview/index'
import DeleteReview from '../DeleteReview/index'
import "./ProductReviews.css"

const ProductReviews = ({ product }) => {
  const sessionUser = useSelector(state => state.session.user);
  const { id } = useParams()
  console.log(id, "IDDD")
  const review = useSelector(state => state.reviewState[+id])
  const dispatch = useDispatch();
  console.log(product, "PRTODUCTTTE");
  const [isLoaded, setIsLoaded] = useState(false)
  const [edit, setEdit] = useState(null);
  const [remove, setRemove] = useState(null);
  const [displayEditForm, setDisplayEditForm] = useState(null)
  let canReview;
  let canEdit
  let theForm

  // if (sessionUser && product.Reviews && sessionUser.id === product.Reviews.userId) {
  //   canEdit = (
  //     <div className='edit-and-delete'>
  //       {/* <NavLink to={`/products/${product.id}/edit`}><button>edit</button></NavLink>
  //       <NavLink to={`/products/${product.id}/delete`}><button>delete</button></NavLink> */}
  //       <button onClick={() => { setEdit(!edit); setRemove(null) }}>edit</button>
  //       <button onClick={() => { setRemove(!remove); setEdit(null) }}>delete</button>
  //     </div>
  //     // <button>YEAHHHHBOOIIIIIIII</button>

  //   )
  if (sessionUser) {
    canReview = (<NewReview productId={product.id} />)
  }

  //   // console.log(sessionUser.id, '==========', product.Reviews.id)

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
  // }

  // useEffect(() => {
  //   dispatch(fetchOneReview(id));
  // }, [id])


  // if (!product.Reviews) return null;
  console.log(review, "PROD REV", product.Reviews);
  // if (!review) return null;

  return product.Reviews && (
    <div>
      <h1>Product Reviews</h1>
      {canReview}
      <div id="reviews">
        {



          product.Reviews && Object.values(product.Reviews).map(({ id, productId, title, content, User }) => {
            // console.log(id, "i", userId, "ui", productId, "pi", title, "t", content, "c", User, "u")
            let canEditDelete
            // console.log(sessionUser.id, "ID", userId, "USERID")
            if (sessionUser && sessionUser.id === User.id) {
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
                <h2 className="review-title">{title}</h2>
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
