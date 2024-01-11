import React, { createContext, useReducer, useEffect } from "react";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";

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

  const [cookies] = useCookies(["jwt"]);

  useEffect(() => {
    if (cookies.jwt) {
      const token = jwtDecode(cookies.jwt);

      if (token.exp * 1000 > Date.now()) {
        dispatch({ type: "LOGIN", payload: token.email });
      } else {
        dispatch({ type: "LOGOUT" });
      }
    }

    if (!cookies.jwt) {
      dispatch({ type: "LOGIN", payload: null });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
