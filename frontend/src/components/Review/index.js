import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchOneProduct } from '../../store/products';
import DeleteProduct from '../DeleteProduct';
import EditProductForm from '../EditProductForm';
import ProductReviews from '../ProductReviews';
import EditReview from '../EditReview';
import DeleteReview from '../DeleteReview';
import "./Review.css";

const Review = ({ review }) => {
  const { id } = useParams()
  console.log(id, "!@#WO#QI$")
  // const review = useSelector(state => state.reviewState[+id])
  // console.log(review, "!!!");
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false)
  const [edit, setEdit] = useState(null);
  const [remove, setRemove] = useState(null);
  const [displayEditForm, setDisplayEditForm] = useState(null)


  let canEditDelete
  if (sessionUser && sessionUser.id === review.User.id) {

    let theForm
    if (edit) {

      theForm = (
        <div className='edit-form'>
          <EditReview reviewId={review.id} />
        </div>
      )
    }
    else if (remove) {

      theForm = (<div className='delete-form'>
        <DeleteReview reviewId={review.id} />
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

  }
  // theForm = null;
  // }
  // else canEditDelete = null

  return (
    <div key={id} className="review">
      <h2 className="review-title">{review.title}</h2>
      <h2>{review.User?.username}</h2>
      <p>{review.content}</p>
      {canEditDelete}
    </div>



  )








}

export default Review;
