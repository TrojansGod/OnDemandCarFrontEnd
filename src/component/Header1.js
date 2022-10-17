import "./Header.css";
import React from "react";
import { Component } from 'react';
import Popup from 'reactjs-popup';
import  "../pages/Login";
let p=localStorage.getItem("token");

console.log(p);
let z="LOGIN";
let adressz="http://localhost:3000/login";
let x="REGISTER"
let addressx="http://localhost:3000/reg"
let choice=false;
let y="LOGIN";
let adressy="http://localhost:3000/login";
function Header1() 
{
  if(localStorage.getItem("NAME")!=undefined)
  {
    z="Hello, "+localStorage.getItem("NAME");
   
    x="SignOut";
    addressx="http://localhost:3000/out";
    choice=true;
    if(localStorage.getItem("6")=="admin")
  {
      y="Admin Explorer";
      adressy="/adash";
      adressz="http://localhost:3000/adash"
  }
  else{
    y="User Explorer";
    adressy="/udash";
    adressz="http://localhost:3000/udash"

  }
  }

  

    return (
       
<div class="na">
  <div className="Left">
  
  <a className="co" href="http://localhost:3000"><b>HOME</b></a>
  </div>
 
  <div className="Right1">
  <a className="co1" href={adressz}><b><strong>{z}</strong></b></a>
</div>
  

<div className="Right1">
  <a className="co1" href={addressx}><b><strong>{x}</strong></b></a>
</div>

{choice
?<div className="Right1">
  <a className="co1" href={adressy}><b><strong>{y}</strong></b></a>
</div>
:<></>
}
</div>
    );
  }
  
   
  export default Header1;
  