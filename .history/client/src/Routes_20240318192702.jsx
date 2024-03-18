import React from "react";

const Routes = () => {
  const { username } = useContext(UserContext);
  console.log(username);
  return <Register></Register>;
};

export default Routes;
