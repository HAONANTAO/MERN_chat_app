import React from "react";

const Register = () => {
  return (
    <div className="bg-blue-50 h-screen">
      {/* margin auto == center */}
      <form className="w-64 mx-auto">
        <input
          type="text"
          placeholder="input username..."
          className="block w-full rounded-sm p-2"></input>
        <input
          type="password"
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
