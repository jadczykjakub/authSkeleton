import { useState } from "react";
import useAuthContext from "./useAuthContext.js";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);

  const login = async (email, password) => {
    const response = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      // tutaj cookies?
      console.log("okej");
      // dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
