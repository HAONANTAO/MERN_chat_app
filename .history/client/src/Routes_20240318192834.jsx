import React,{} from "react";

const Routes = () => {
  const { username } = useContext(UserContext);
  console.log(username);
  if (username) {
    return "Logged in ";
  }
  return <Register></Register>;
};

export default Routes;
