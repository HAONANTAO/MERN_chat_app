import Register from "./Register";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
function App() {
  // 给默认的地址
  axios.defaults.baseURL = "http://localhost:5555";

  return (
    <>
      <UserContextProvider>
        <div className="bg-red-500">test</div>
        <Register></Register>
      </UserContextProvider>
    </>
  );
}

export default App;
