import React from "react";
import { Detail } from "./Detail";
import { Login } from "./Login";

export const PrivateRoute = ({ auth, setAuth }) => {
  return auth == true ? <Detail /> : <Login setAuth={setAuth} />;
};
