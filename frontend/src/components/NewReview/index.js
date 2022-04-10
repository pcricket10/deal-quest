import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Redirect, Route, Switch, NavLink, useParams } from 'react-router-dom';
import { createReview } from '../../store/reviews';
import "./NewReview.css"

const NewReview = ({ productId }) => {

  const dispatch = useDispatch();
  const history = useHistory();


  const sessionUser = useSelector(state => state.session.user)
  const product = useSelector(state => state.productState)
  // console.log(product, "REVIEW PRODUCT!!")

  // console.log(sessionUser);

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [errors, setErrors] = useState([]);



  // setUserId(sessionUser.id)


  const handleSubmit = async (e) => {
    // e.preventDefault();
    const payload = { userId: sessionUser.id, productId, title, content, User: sessionUser }
    setErrors([]);
    const createdReview = await dispatch(createReview(payload))
    // .catch(async (res) => {
    //   const data = await res.json();
    //   if (data && data.errors) setErrors(data.errors);
    // });

    if (createdReview) {
      console.log(product, "[][][]srtwervsrsaerbserbsers[][][][]")
        ;
      history.push(`/products/${productId}`)
    }
    // return setErrors(['Confirm Password field must be the same as the Password field']);
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


      <button type="submit">Leave Review</button>
    </form>
  )
}

export default NewReview;
