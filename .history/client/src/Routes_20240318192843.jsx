import React, { useContext } from "react";
import { UserContext } from "./UserContext";
const Routes = () => {
  const { username } = useContext(UserContext);
  console.log(username);
  if (username) {
    return "Logged in ";
  }
  return <Register></Register>;
};

export default Routes;
