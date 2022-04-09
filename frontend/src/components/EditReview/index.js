import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Redirect, Route, Switch, NavLink, useParams } from 'react-router-dom';
import reviewReducer, { editReview } from '../../store/reviews';
import "./EditReview.css"

const EditReview = ({ productId }) => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();
  // console.log(productId, "EROEWROIWUEOIRFW")


  const sessionUser = useSelector(state => state.session.user)
  const product = useSelector(state => state.productState[+id])
  // console.log("product!!!!!!!", product)
  const review = product.Reviews[0];
  // console.log(review, "REVIEW PRODUCT!!")

  // console.log(sessionUser);

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [errors, setErrors] = useState([]);
  // const review =


  // setUserId(sessionUser.id)


  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...review, userId: sessionUser.id, productId: product.id, title, content, User: sessionUser }
    console.log(payload, "PAYLOAD")
    setErrors([]);
    const editedReviewId = await dispatch(editReview(payload))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });

    if (editedReviewId) {
      history.push(`/products/${product.id}`)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>

      <label>
        Title
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Content
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          required
        />
      </label>


      <button type="submit">Edit Review</button>
    </form>
  )
}

export default EditReview;
