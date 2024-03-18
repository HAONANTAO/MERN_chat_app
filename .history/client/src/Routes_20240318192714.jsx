import React from "react";

const Routes = () => {
  const { username } = useContext(UserContext);
  console.log(username);
  if(username){return}
  return <Register></Register>;
};

export default Routes;
