import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Redirect, Route, Switch, NavLink, useParams } from 'react-router-dom';
import { createProduct } from '../../store/products';
import { fetchCurrencies } from '../../store/currencies';
import "./NewProductForm.css"

const NewProductForm = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector(state => state.session.user)
  const currencies = useSelector(state => state.currencyState)


  // console.log(sessionUser);



  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [currencyId, setCurrencyId] = useState(1);
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch])


  // setUserId(sessionUser.id)


  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { userId: sessionUser.id, name, imgUrl, price, currencyId, User: sessionUser }
    setErrors([]);
    const createdProduct = await dispatch(createProduct(payload))
    // .catch(async (res) => {
    //   const data = await res.json();
    //   if (data && data.errors) setErrors(data.errors);
    // });

    if (createdProduct) {
      history.push(`/products/${createdProduct}`)
    }

    // return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (<form onSubmit={handleSubmit}>
    <ul>
      {errors.map((error, idx) => <li key={idx}>{error}</li>)}
    </ul>

    <label>
      Product Name
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
    </label>
    <label>
      Image Url
      <input
        type="text"
        value={imgUrl}
        onChange={e => setImgUrl(e.target.value)}
        required
      />
    </label>
    <label>
      Price
      <input
        type="number"
        value={price}
        onChange={e => setPrice(e.target.value)}
        required
      />
    </label>
    <label>
      Currency
      <select onChange={e => setCurrencyId(e.target.value)}>
        {
          currencies && Object.values(currencies).map(({ id, unit }) => (
            <option value={id} key={id}>{unit}</option>
          ))
        }
      </select>

    </label>
    <button type="submit">New</button>
  </form>
  )
}

export default NewProductForm;
