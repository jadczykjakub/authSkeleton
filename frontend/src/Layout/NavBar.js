import React from 'react';
import useAuthContext from "../hooks/useAuthContext.js";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
    const handleLogout = () => {
        removeCookie("jwt");
        navigate(0);
    }
    return <div> {user && <div>You are logged  <button type='button' onClick={handleLogout}>Logout</button>   </div>}</div>
}

export default NavBar;