import "./Header.css";
import React from "react";
import { Component } from 'react';
import Popup from 'reactjs-popup';
import  "../pages/Login";
let p=localStorage.getItem("token");

console.log(p);
function Header() 
{

    return (
       
<div class="na">
  <div className="Left">
  
  <a className="co" href="http://localhost:3000"><b>HOME</b></a>
  </div>
 
  <div className="Right1">
  <a className="co1" href="http://localhost:3000/login"><b><strong>LOGIN</strong></b></a>
</div>
  

<div className="Right1">
  <a className="co1" href="http://localhost:3000/List"><b><strong>REGISTER</strong></b></a>
</div>
</div>
    );
  }
  
   
  export default Header;
  