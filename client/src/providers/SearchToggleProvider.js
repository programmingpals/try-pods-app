import React, { createContext, useState } from "react";
import AnimateHeight from "react-animate-height";

export const searchContext = createContext();

export default function SearchToggleProvider(props) {
  const [height, setHeight] = useState(0);

  const value = { height, setHeight };
  return (
    <searchContext.Provider value={value}>
      {props.children}
    </searchContext.Provider>
  );
}
