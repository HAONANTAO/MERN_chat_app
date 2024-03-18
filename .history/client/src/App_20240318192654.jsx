import Register from "./Register";
import axios from "axios";
import { UserContext, UserContextProvider } from "./UserContext";
import Routes from "./Routes";
import { useContext } from "react";
function App() {
  // 给默认的地址
  axios.defaults.baseURL = "http://localhost:5555";

  return (
    <>
      <div className="bg-red-500">test</div>
      <UserContextProvider>
        <Routes></Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
