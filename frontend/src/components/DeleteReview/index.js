import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Redirect, Route, Switch, NavLink, useParams } from 'react-router-dom';
import { deleteReview } from '../../store/reviews';
import "./DeleteReview.css"



const DeleteReview = ({ reviewId }) => {
  const { id } = useParams();
  console.log(id, reviewId, "utyututy")

  const dispatch = useDispatch();
  const history = useHistory();



  const sessionUser = useSelector(state => state.session.user)



  // const review =


  // setUserId(sessionUser.id)


  const handleSubmit = async (e) => {
    e.preventDefault();
    const deletedReview = dispatch(deleteReview(reviewId))
    if (deletedReview) history.push(`/products/${id}`)

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Are you sure you want to delete "review"? </h1>
        <button type="submit">Yes</button>
      </div>
    </form>





  )

}

export default DeleteReview;
