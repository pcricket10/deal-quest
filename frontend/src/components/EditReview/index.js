import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { editReview } from '../../store/reviews';
import "./EditReview.css";


const EditReview = () => {
  const { id } = useParams();
  const product = useSelector(state => state.productState[+id])
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector(state => state.session.user)
  const review = product.Reviews[0];



  const [title, setTitle] = useState(review.title)
  const [content, setContent] = useState(review.content)
  const [errors, setErrors] = useState([]);
  // const review =


  // setUserId(sessionUser.id)





  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...review, userId: sessionUser.id, productId: product.id, title, content, User: sessionUser }
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
