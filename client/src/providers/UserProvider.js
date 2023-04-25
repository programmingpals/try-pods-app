import React, { createContext } from "react";

export const userContext = createContext();

export default function UserProvider(props) {
  const user = 1;

  const value = {
    user,
  };

  return (
    <userContext.Provider value={value}>{props.children}</userContext.Provider>
  );
}
