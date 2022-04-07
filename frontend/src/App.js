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
import EditProductForm from "./components/EditProductForm";
import NewProductForm from "./components/NewProductForm"
import DeletePage from "./components/DeletePage"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true))
  }, [dispatch])
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/products/:id/edit">
            <EditProductForm />
          </Route>
          <Route exact path="/products/new">
            <NewProductForm />
          </Route>
          <Route exact path="/products/:id">
            <ProductDetails />
          </Route>
          <Route exact path="/products/:id/delete">
            <DeletePage />
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
