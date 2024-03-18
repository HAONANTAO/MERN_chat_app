import Register from "./Register";
import axios from "axios";
import { UserContext, UserContextProvider } from "./UserContext";
import { useContext } from "react";
function App() {
  // 给默认的地址
  axios.defaults.baseURL = "http://localhost:5555";
  const { username } = useContext(UserContext);
  console.log(object)
  return (
    <>
      <div className="bg-red-500">test</div>
      <UserContextProvider>
        <Register></Register>
      </UserContextProvider>
    </>
  );
}

export default App;
