import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";

import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./components/firebase";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            email: user.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <div className="flex flex-col ">
              <header className="sticky top-0 z-50">
                <Route exact path="/">
                  <Header />
                </Route>
              </header>
              <div className="mx-auto">
                <Route exact path="/">
                  <Home />
                </Route>
              </div>
            </div>
          </Switch>
        )}
      </Router>
    </>
  );
}

export default App;
