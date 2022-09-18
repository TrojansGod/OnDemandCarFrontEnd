import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import updateuser from "../service/authService";
import getcurrent from "../service/authService";

let p = localStorage.getItem("username");

export const CustomerUpdate = () => {
    const [emailId,SetEmailId] = useState("")
    const [firstName,SetFirstName] = useState("");
    const [lastName,SetLastName] = useState("");
    const [location,SetLocation] = useState("");
    const [car,SetCar] = useState("");
    const [password,SetPassword] = useState("");
    const [role,SetRole] = useState(localStorage.getItem("6"));
    const [image,SetImage] = useState("");
    const update = (e) =>{
        e.preventDefault();
        const customer = {
            emailId,
            firstName,
            lastName,
            location,
            password,
            car,
            role,
            image
        };
        updateuser
        .updateuser(customer)
        .then((response) => {
          console.log("customer data registered", response.data);
          window.location.href="/profile"
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }

    useEffect(() => {
        if (p) {
            getcurrent
            .getcurrent(p)
            .then((customer) => {
              SetEmailId(customer.data.emailId)
              SetFirstName(customer.data.firstName);
              SetLastName(customer.data.lastName)
              SetLocation(customer.data.location)
              SetCar(customer.data.car)
              SetPassword(customer.data.password)
              SetRole(customer.data.role)
              SetImage(customer.data.image)
              }
            )
            .catch((error) => {
              console.log("Something went wrong", error);
            });
        }
      }, []);

      return (
        <div id = 'bd'>
            <div className="container-reg">
        <div className="title">UPDATE </div>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">First Name</span>
                <input type="text" placeholder="Enter your first name" value={firstName} onChange={(e) => SetFirstName(e.target.value)} required/>
              </div>
              <div className="input-box">
                <span className="details">Last Name</span>
                <input type="text" placeholder="Enter your last name" value={lastName} onChange={(e) => SetLastName(e.target.value)} required/>
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="text" placeholder="Enter your email" value={emailId} onChange={(e) => SetEmailId(e.target.value)} required/>
              </div>
              <div className="input-box">
                <span className="details">Location</span>
                <input type="text" placeholder="Enter your city" value={location} onChange={(e) => SetLocation(e.target.value)} required/>
              </div>
              <div className="input-box">
                <span className="details">Image Link</span>
                <input type="text" placeholder="Enter your city" value={image} onChange={(e) => SetImage(e.target.value)} required/>
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input type="password" placeholder="Enter your password" value={password} onChange={(e) => SetPassword(e.target.value)} required/>
              </div>
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input type="password" placeholder="Confirm your password" value={car} onChange={(e) => SetCar(e.target.value)} required/>
              </div>
            </div>
            
            
            <div className="button">
              <input type="submit" value="Register" onClick={(e) => {update(e);}} />
            </div>
          </form>
        </div>
      </div>
        </div>
    
      )
}
