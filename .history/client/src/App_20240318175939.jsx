import Register from "./Register";

function App() {
  axios.default.baseURL = "h";
  return (
    <>
      <div className="bg-red-500">test</div>
      <Register></Register>
    </>
  );
}

export default App;
