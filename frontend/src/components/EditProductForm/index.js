import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Redirect, Route, Switch, NavLink, useParams } from 'react-router-dom';
import { editProduct, fetchOneProduct } from '../../store/products';
import { fetchCurrencies } from '../../store/currencies';
import "./EditProductForm.css"

const EditProductForm = () => {
  const { id } = useParams();
  let product = useSelector(state => state.productState[+id])
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector(state => state.session.user)
  const currencies = useSelector(state => state.currencyState)
  // console.log(currencies, "EREREWERWERWERWERWRW")



  // console.log(sessionUser, "@@@@@@@@@@@@@@@@@@@@3");

  const [name, setName] = useState(product.name);
  const [imgUrl, setImgUrl] = useState(product.imgUrl);
  const [price, setPrice] = useState(product.price);
  const [currencyId, setCurrencyId] = useState(product.currencyId);
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchOneProduct(id));
  }, [id])



  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...product, userId: sessionUser.id, name, imgUrl, price, currencyId, User: sessionUser }
    console.log(payload, "PAYLOAD")

    setErrors([]);
    const editedProductId = await dispatch(editProduct(payload))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    if (editedProductId) {
      console.log(editedProductId, "[][][][][][][]")

      history.push(`/products/${editedProductId}`)
    }
    // return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (<form onSubmit={handleSubmit}>
    <ul>
      {errors.map((error, idx) => <li key={idx}>{error}</li>)}
    </ul>
    <h1>welcome ot product edit!!</h1>
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
        <option value=""></option>
        {

          currencies && Object.values(currencies).map(({ id, unit }) => (
            <option value={id} key={id}>{unit}</option>
          ))
        }
      </select>

    </label>
    <button type="submit">Edit</button>
  </form>
  )
}

export default EditProductForm;
