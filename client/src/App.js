import React, { useEffect, useState } from "react";
import "./App.css";
import userManager from "./auth/userManager";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/auth/loginCallback">
          <Callback />
        </Route>
      </Switch>
    </div>
  );
}

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    userManager.getUser().then((user) => setUser(user));
  });

  const login = () => {
    userManager.signinRedirect();
  };

  const logout = () => {
    userManager.signoutRedirect();
  };

  return (
    <div>
      {user === null ? (
        <button onClick={login}>login</button>
      ) : (
        <button onClick={logout}>logout</button>
      )}
    </div>
  );
}

const Callback = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userManager
      .signinRedirectCallback()
      .then((user) => {
        console.log(user);
        setSuccess(true);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  return success ? <Redirect to={"/"} /> : <p>Processing</p>;
};

export default App;
