import React from "react";
import useAuthContext from "../hooks/useAuthContext.js";

export default function Home() {
  const { user } = useAuthContext();

  console.log(user);
  return <div>Home {user.email}</div>;
}
