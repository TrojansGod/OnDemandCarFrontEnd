
import './reg.css'
import React,{ useState, useEffect } from 'react';
import Reg from "../service/Regservice";
import upd from "../service/Regservice";
import { Link, useParams } from "react-router-dom";

const Regs = () => {
   
    const [emailId, setEmailId] = useState("");
	const [firstName, setfname] = useState("");
	const [lastName, setlname] = useState("");
  const [location, setlocation] = useState("");
  const [password, setpassword] = useState("");
  const [car, setcar] = useState("");
  const [role, setrole] = useState("user");
  const [image, setimage] = useState("https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360");

 const Regi = (e) =>{
		e.preventDefault();
	const val = { 
        emailId,
		    firstName,
        lastName,
        location,
        password,
        car,
        role,
        image
	};

  Reg
	.Reg(val)
	.then((response) => {
		console.log("USER added successfully", response.data);
		document.write("USER ADDED ---SIGN IN NOW---");
		console.log(".");
		console.log(".");
		console.log(".");
		console.log(".");
		console.log(".");
		console.log(".");
		console.log(".");
		console.log(".");
		console.log(".");
		console.log(".");
		console.log(".");
		console.log(".");
		console.log(".");
		console.log(".");
		console.log(".");
		console.log(".");
		console.log(".");
		console.log(".");
		console.log(".");
		console.log(".");
		console.log(".");
		console.log(".");
		window.location.href="/";
	  })
	 
 }

  return (
    <div id = 'bd'>
        <div className="container-reg">
    <div className="title">Registration</div>
    <div className="content">
      <form action="#">
        <div className="user-details">
          <div className="input-box">
            <span className="details">First Name</span>
            <input type="text" placeholder="Enter your first name" value={firstName} onChange={(e) => setfname(e.target.value)} required/>
          </div>
          <div className="input-box">
            <span className="details">Last Name</span>
            <input type="text" placeholder="Enter your last name" value={lastName} onChange={(e) => setlname(e.target.value)} required/>
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="email" placeholder="Enter your email" value={emailId} onChange={(e) => setEmailId(e.target.value)} required/>
          </div>
          <div className="input-box">
            <span className="details">Location</span>
            <input type="text" placeholder="Enter your city" value={location} onChange={(e) => setlocation(e.target.value)} required/>
          </div>
          <div className="input-box">
            <span className="details">Image Link</span>
            <input type="text" placeholder="Enter your city" value={image} onChange={(e) => setimage(e.target.value)} required/>
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setpassword(e.target.value)} required/>
          </div>
          <div className="input-box">
            <span className="details">Vehicle MODEL</span>
            <input type="text" placeholder="Confirm your password" value={car} onChange={(e) => setcar(e.target.value)} required/>
          </div>
        </div>
        
        
        <div className="button">
          <input type="submit" value="Register" onClick={(e) => {Regi(e);}} />
        </div>
      </form>
    </div>
  </div>
    </div>

  )
}

export default Regs;