import React,{ useState, useEffect } from 'react';
import auth from "../service/authService";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './reg.css';


export const Login = () => {
  
  const [username, setEmailId] = useState("");
	const [password, setpassword] = useState("");
  const [emailError, setemailError] = useState("");
  const [faculty, setFaculty] = useState([]);


  const handleValidation = (event) => {
    let formIsValid = true;

    if (!username.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }


    return formIsValid;
  };

	const [errorMessage, setErrorMessage] = React.useState("");
	const handleClick = () => {
	  setErrorMessage("Example error message!")
	}
 

	const Regi = (e) =>{
    e.preventDefault();
    handleValidation();

	localStorage.setItem("washername",username);
    localStorage.setItem("washerpassword",password);
    
	}

  return (
    <div id = 'bd'>
        <div className="container-reg">
    <div className="title">Sign In</div>
    <div className="content">
      <form action="#">
        <div className="user-details">
          <div className="input-box">
            <span className="details">USERNAME</span>
            <input type="email" placeholder="Enter your first name" value={username} onChange={(e) => setEmailId(e.target.value)} required/>
          </div>
          <div className="input-box">
            <span className="details">PASSWORD</span>
            <input type="password" placeholder="Enter your last name" value={password} onChange={(e) => setpassword(e.target.value)} required/>
          </div>
          </div>
        <div className="button">
          <input type="submit" value="LOGIN" onClick={(e) => {Regi(e);}} />
        </div>
      </form>
    </div>
  </div>
    </div>

  )
};