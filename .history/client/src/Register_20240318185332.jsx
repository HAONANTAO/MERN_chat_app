import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const register = async (event) => {
    event.preventDefault(); // 阻止表单默认提交行为

    try {
      await axios.post("/register", { username, password });
      console.log("good");
    } catch (error) {
      console.log("bad", error);
    }
  };
  return (
    // 全局居中
    <div className="flex items-center h-screen bg-blue-50">
      {/* margin auto == center 左右居中*/}
      <form className="w-64 mx-auto" onSubmit={register}>
        <input
          type="text"
          value={username}
          placeholder="input username..."
          className="block w-full p-2 mb-2 rounded-sm"
          onChange={(ev) => setUsername(ev.target.value)}></input>

        <input
          type="password"
          value={password}
          placeholder="input password..."
          className="block w-full p-2 mb-2 rounded-sm"
          onChange={(ev) => setPassword(ev.target.value)}></input>
        <button className="block w-full text-white bg-blue-500 rounded-sm">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
