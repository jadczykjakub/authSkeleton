import React from "react";
import useAuthContext from "../hooks/useAuthContext.js";

export default function Home() {
  const {user} = useAuthContext();

  const handleButton = async () => {
    const response = await fetch("http://localhost:8000/api/test", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: 'include',
    })

    const json = await response.json();

    console.log(json);
  };

  return <div>Home {user}  <div><button onClick={handleButton}>get content</button></div> </div>;
}
