import Register from "./Register";
import axios from "axios";
function App() {
  // 给默认的地址
  axios.defaults.baseURL = "http://localhost:5555";

  return (
    <>
      <div className="bg-red-500">test</div>
      <Register></Register>
    </>
  );
}

export default App;
