import React from 'react'
import "./Header.css";
import { useAuth0 } from "@auth0/auth0-react";
import { IoIosLogIn } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';
//import { Button } from '@mui/material';

const Header = () => {
  const { loginWithRedirect , logout , isAuthenticated ,user } = useAuth0();
  return (
    <ul className='s1'>
      <li><Link to="/" className='title'><img src="/logon1.png" alt="" /></Link></li>
      {
          isAuthenticated &&(
            <li className='userdetail'>
            <p>Welcome! {user.name}</p> </li>
          )}
       
        {
          isAuthenticated ? (
            <li><button style={{marginLeft: -140, minWidth: 100}} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              <IoIosLogOut />Log Out
            </button></li>
          ):(
            <li><button style={{minWidth: 80}} onClick={() => loginWithRedirect()}><IoIosLogIn />Log In</button></li>
          )
        }
        
      </ul>
    
  )
}

export default Header
