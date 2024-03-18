import axios from "axios";
import Routes from "./Routes";
import { UserContextProvider } from "./UserContext";
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
