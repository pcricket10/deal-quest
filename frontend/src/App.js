// frontend/src/App.js
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import ProductDetails from "./components/ProductDetails";
import ProductEditForm from "./components/ProductEditForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, seteIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => seteIsLoaded(true))
  }, [dispatch])
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/products/:id/edit">
            <ProductEditForm />
          </Route>
          <Route path="/products/new">
            <h1>NEW</h1>
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>

        </Switch>
      )}

    </>
  );
}

export default App;
