import React, { createContext } from "react";
// 用于创建一个上下文对象。上下文对象可以在组件树中传递数据

const UserContext = createContext({});

function UserContextProvider({ children }) {
  return <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>;
}
export { UserContext };
