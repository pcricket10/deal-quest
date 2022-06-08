
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DeleteReview from '../DeleteReview/index';
import EditReview from '../EditReview/index';
import NewReview from '../NewReview/index';
import Review from '../Review/index'
import "./ProductReviews.css";

const ProductReviews = ({ product }) => {
  const sessionUser = useSelector(state => state.session.user);
  const { id } = useParams()
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false)
  const [edit, setEdit] = useState(null);
  const [remove, setRemove] = useState(null);
  const [displayEditForm, setDisplayEditForm] = useState(null)
  let canReview;
  let canEdit
  let theForm
  const reviews = product.Reviews;
  console.log(reviews, "@##$!!!!")
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
  // if (sessionUser) {
  //   canReview = (<NewReview productId={product.id} />)
  // }


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
  // if (!review) return null;

  if (sessionUser) {
    canReview = (<NewReview productId={product.id} />)
  }
  return (
    <>
      {canReview}
      {reviews?.map((review) =>
      (<>

        <Review review={review} />
      </>)
      )}
    </>



    // <div>
    //   <h1>Product Reviews</h1>
    //   {canReview}
    //   <div id="reviews">
    //     {



    //       product.Reviews && Object.values(product.Reviews).map(({ id, productId, title, content, User }) => {
    //         let canEditDelete
    //         if (sessionUser && sessionUser.id === User.id) {

    //           let theForm
    //           if (edit) {

    //             theForm = (
    //               <div className='edit-form'>
    //                 <EditReview reviewId={id} />
    //               </div>
    //             )
    //           }
    //           else if (remove) {

    //             theForm = (<div className='delete-form'>
    //               <DeleteReview reviewId={id} />
    //             </div>)
    //             // setRemove(false)

    //           }



    //           canEditDelete = (

    //             <div className='edit-and-delete'>
    //               {/* <NavLink to={`/products/${product.id}/edit`}><button>edit</button></NavLink>
    //               <NavLink to={`/products/${product.id}/delete`}><button>delete</button></NavLink> */}
    //               <button onClick={(e) => { setEdit(!edit); setRemove(null); }}>edit</button>
    //               <button onClick={(e) => { setRemove(!remove); setEdit(null); }}>delete</button>
    //               {theForm}
    //             </div>
    //           )

    //           // theForm = null;
    //         }
    //         // else canEditDelete = null

    //         return product.Reviews && (
    //           <div key={id} className="review">
    //             <h2 className="review-title">{title}</h2>
    //             <h2>{User?.username}</h2>
    //             <p>{content}</p>
    //             {canEditDelete}
    //           </div>



    //         )
    //       })
    //     }
    //   </div>

    // </div>
  )
}

export default ProductReviews;
