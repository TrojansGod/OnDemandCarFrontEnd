import React from 'react';
import { useEffect, useState } from "react";
import { Link, useHistory,useNavigate } from "react-router-dom";
import getcurrentuser from "../service/authService";
import logout from "../service/authService";
import "./AdminDashboard.css";
import SearchTable from './SearchTable';
import WasherTable from '../component/WasherTable';
import { RegisterWasher } from '../component/RegisterWasher';
import AllOrders from '../component/AllOrders';



let p = localStorage.getItem("username");
let q=localStorage.getItem("7");
console.log(q);
export const AdminDashboard = () => {
    const [showChild, setShowChild] = useState(false);
    const [showChild1, setShowChild1] = useState(false);
    const [showChild2, setShowChild2] = useState(false);
    const [showChild3, setShowChild3] = useState(false);
    
    const navigate = useNavigate();
    const [LoginCustomer, setCustomer] = useState([]);
    if(localStorage.getItem("6")=="user")   
{
    window.location.href="/udash";
}

    const logOut = () => {
        logout.logout();
        navigate("/out");
    };

    const init = () => {
        getcurrentuser
            .getcurrentuser(p)
            .then((response) => {
                console.log("Getting current Customer data", response.data);
                setCustomer(response.data);
            })
            .catch((error) => {
                console.log("Something went wrong", error);
            });
    };
    useEffect(() => {
        init();
    }, []);


    return (
        <div className='CustomerDashboard' >
            <div className='row text-bg-dark' >
                <div className='col-md-3' style={{background:`url("https://w0.peakpx.com/wallpaper/343/178/HD-wallpaper-lexus-is350-f-sport-car-dark-vehicle-frontal-view-portrait-display-monochrome-low-saturation.jpg")`,backgroundSize:"100% 100%"}}>
                    <div className='container'>
                       <h6> <a style={{ padding: "0px 25px" ,position:"absolute",left:"-15px",backgroundColor:"transparent"}} href='http://localhost:3000/'>HOME</a></h6>
                        <center><img src={q} class="rounded-circle" alt="profile_pic" style={{ height: "200px", width: "200px", margin: "70px" }} /></center>
                    </div>
                    <strong>
                        <div className='row container'>
                            <h6>First Name: {LoginCustomer.firstName}</h6>
                        </div>
                        <br />
                        <div className='row container'>
                            <h6>Last Name: {LoginCustomer.lastName}</h6>
                        </div>
                        <br />
                        <div className='row container'>
                            <h6>Location: {LoginCustomer.location}</h6>
                        </div>
                        <br />
                        <div className='row container'>
                            <h6>Car: {LoginCustomer.car}</h6>
                        </div>
                        <br />
                        <div className='row container'>
                            <h6>Email Id: {LoginCustomer.emailId}</h6>
                        </div>
                    </strong>
                    <br />
                    <div className='row container'>
                        <button className="btn btn-danger ml-3" onClick={() => {logOut()}}>
                            Logout
                        </button>
                        <h1></h1>
                    </div>
                    <div className='row container'>
                        <Link className="btn btn-danger" to="/customerupdate">
                            Update
                        </Link>
                    </div>
                </div>
                <div className='col-md-9'  id="AdminDashboardArea" style={{height:"729px",paddingTop:"20px",background:`url("https://gallery.yopriceville.com/var/albums/Cars/Mercedes_Car_Dark_Wallpaper.jpg?m=1442800257")`,backgroundSize:"100% 100%"}} >
                    <div className='row'>
                    <div className='col-sm-2'>
                        <button style={{backgroundColor:'#71706E ',border:"0px"}} onClick={() => {setShowChild(!showChild); setShowChild1(false);setShowChild2(false);setShowChild3(false)}} className="btn btn-primary"title='ALL CUSTOMERS BELOW'>All Customers</button>
                        <br/>
                        
                    </div>
                    <div className='col-sm-2'>
                        <button style={{backgroundColor:'#71706E ',border:"0px"}} onClick={() => {setShowChild1(!showChild1); setShowChild(false); setShowChild2(false);setShowChild3(false)}} className="btn btn-primary" title='SEE ALL WASHERS'>Show all Washers</button>
                        <br/>
                       
                    </div>
                    <div className='col-sm-2'>
                        <button style={{backgroundColor:'#71706E ',border:"0px"}} onClick={() => {setShowChild2(!showChild2); setShowChild(false);setShowChild1(false);setShowChild3(false)}} className="btn btn-primary" title='SEE ALL WASHERS'>Register Washer</button>
                        <br/>
                       
                    </div>
                    <div className='col-sm-2'>
                        <button  style={{backgroundColor:'#71706E ',border:"0px"}} onClick={e=>window.location.href="/adminreg"} className="btn btn-primary" title='ADMIN REGISTRATION'>Admin registraion</button>
                        <br/>
                       
                    </div> 
                    <div className='col-sm-2'>
                        <button style={{backgroundColor:'#71706E ',border:"0px"}} onClick={() => {setShowChild3(!showChild3); setShowChild1(false);setShowChild2(false);setShowChild(false);}} className="btn btn-primary"title='ALL ORDERS'>Order List</button>
                        <br/>
                    
           
                    
                    
                        
                    </div>
                    </div>
                    
                    {showChild && <SearchTable/>}
                    {showChild1 && <WasherTable/>}
                    {showChild2 && <div className='container' style={{background:"white",width:"80%"}}><RegisterWasher/></div>}
                    {showChild3&&<AllOrders/>}
                </div>
            </div>
        </div>
    )
}
