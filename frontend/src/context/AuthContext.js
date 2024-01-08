import React, { createContext, useReducer, useEffect } from "react";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";

// @ts-ignore
export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);

  useEffect(() => {
    console.log("elooo");
    console.log(cookies);
    if (cookies?.jwt) {
      const token = jwtDecode(cookies.jwt);
      console.log(token);
      dispatch({ type: "LOGIN", payload: token.email });
    }

    if (!cookies.jwt) {
      dispatch({ type: "LOGIN", payload: null });
    }
  }, []);

  console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
