import React, { createContext, useState } from "react";

export const AuthContext = createContext();
export const Context = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tokendata, setTokenData] = useState("");
  const login = (token) => {
    setIsAuthenticated(true);
    setTokenData(token);
  };
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout,tokendata }}>
      {children}
    </AuthContext.Provider>
  );
};
