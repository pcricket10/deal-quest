// frontend/src/App.js
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import DeleteProduct from "./components/DeleteProduct";
import DeleteReview from "./components/DeleteReview";
import EditProductForm from "./components/EditProductForm";
import EditReview from "./components/EditReview";
import HomePage from "./components/HomePage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import NewProductForm from "./components/NewProductForm";
import NewReview from "./components/NewReview";
import ProductDetails from "./components/ProductDetails";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";

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
            <DeleteProduct />
          </Route>
          <Route exact path="/reviews/:id/new">
            <NewReview />
          </Route>
          <Route exact path="/reviews/:id/edit">
            <EditReview />
          </Route>
          <Route exact path="/reviews/:id/delete">
            <DeleteReview />
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
