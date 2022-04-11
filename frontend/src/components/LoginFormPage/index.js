//frontend/src/components/LoginFormPage/index.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './LoginForm.css';


const LoginFormPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  const demoUser = e => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential: "Demo-lition", password: "password" }))

  }

  return (
    <><form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <label>
        Username or email
        <input
          type="text"
          value={credential}
          onChange={e => setCredential(e.target.value)}
          required />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required />
      </label>
      <button type="submit">Log In</button>

    </form>


      <form onSubmit={demoUser}>
        <input type="hidden" value={credential} onChange={e => setCredential(e.target.value)}></input>
        <input type="hidden" value={password} onChange={e => setPassword(e.target.value)}></input>
        <button type="submit">Demo User </button>
      </form></>
  );
}

export default LoginFormPage
