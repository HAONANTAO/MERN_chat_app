import React from "react";

const Register = () => {
  return (
    <div className="bg-blue-500 h-screen">
      {/*  */}
      <form className="w-64 mx-auto">
        <input
          type="text"
          placeholder="input username..."
          className="block w-full"></input>
        <input
          type="password"
          placeholder="input password..."
          className="block w-full"></input>
      </form>
    </div>
  );
};

export default Register;
