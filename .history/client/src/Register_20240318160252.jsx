import React from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    // 全局居中
    <div className="bg-blue-50 h-screen flex items-center">
      {/* margin auto == center 左右居中*/}
      <form className="w-64 mx-auto">
        <input
          type="text"
          value={username}
          placeholder="input username..."
          className="block w-full rounded-sm p-2 mb-2"
          onChange={(ev) => setUsername(ev.value)}></input>

        <input
          type="password"
          value={password}
          placeholder="input password..."
          className="block w-full rounded-sm p-2 mb-2"></input>
        <button className="bg-blue-500 text-white block w-full rounded-sm">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
