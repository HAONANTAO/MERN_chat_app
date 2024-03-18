import React, { createContext, useState } from "react";
// 用于创建一个上下文对象。上下文对象可以在组件树中传递数据

const UserContext = createContext({});

function UserContextProvider({ children }) {
  const [username,setUsername]=useState(null);
  const[password,setPassword]=useState("");
  const[id,setId]=useState(null)
  return <UserContext.Provider value={username,setUsername}> {children}</UserContext.Provider>;
}
export { UserContext };
