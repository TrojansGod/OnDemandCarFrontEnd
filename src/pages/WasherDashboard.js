import React from 'react';
import { useEffect, useState } from "react";
import { Link, useHistory, useNavigate } from "react-router-dom";
import washerLog from "../service/authService";
import { DataGrid } from '@mui/x-data-grid';


export const WasherDashboard = () => {
    const [washerid, setWasherid] = useState("");
    const [Pass, setPass] = useState("");
    const navigate = useNavigate();

    const [check, setCheck] = useState(true);

    const [order, setOrder] = useState([]);

    const logOut = () => {
        window.location.href="/out";
    };

    const columns = [
        { field: 'orderId', headerName: 'OrderId', width: 300 },
        { field: 'washerId', headerName: 'WasherId', width: 150 },
        { field: 'emailId', headerName: 'EmailId', width: 100 },
        { field: 'firstName', headerName: 'UserFName', width: 100 },
        { field: 'lastname', headerName: 'UserLName', width: 100 },
        { field: 'timeDate', headerName: 'SLOT', width: 100 },
        { field: 'washerName', headerName: 'WasherName', width: 100 },
        { field: 'washerLocation', headerName: 'LOCATION', width: 100 },
        { field: 'pack', headerName: 'PACKAGE', width: 100 },
        { field: 'cost', headerName: 'PRICE', width: 100 },
        { field: 'success', headerName: 'STATUS', width: 160 }
    ];

    const Regi = (e) => {
        e.preventDefault();


        washerLog.washerLog(washerid).then((response) => {
            console.log(response.data);
            setOrder(response.data);
            setCheck(false);
        }).catch((error) => {
            console.log("Something went wrong", error);
        });

    }


    return (
        <div>
            <div className='row'>
                <div className='col-md-3' style={{ backgroundImage: "linear-gradient(to right top, #07ca9d, #51dc8a, #88eb70, #c1f752, #ffff31)", paddingTop: "0" }}>
                    <br />
                    <a className='btn btn-success' href="/" style={{ marginLeft: "5px" }}>Home</a>
                    <div className='container'>
                        
                    </div>
                    <br />
                    <strong>
                       {check && <div className='container col-md-6' id="modal-login" style={{ width: "100%", paddingLeft: "5%", paddingTop: "5%" }}>
                            <form className='LoginCustomer was-validated' novalidate>
                                <center><h1 class="h3 mb-3 fw-normal">Washer Login</h1></center>

                                <div class="form-floating">
                                    <input type="email" class="form-control has-validation" id="floatingInput" placeholder="name@example.com" value={washerid} onChange={(e) => setWasherid(e.target.value)} required />
                                    <label for="floatingInput">Email address</label>
                                    <div class="invalid-feedback">
                                        Please choose a email.
                                    </div>
                                </div>

                                <br />
                                <div class="form-floating">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" value={Pass} onChange={(e) => setPass(e.target.value)} required />
                                    <label for="floatingPassword">Password</label>
                                </div>

                                <div class="checkbox mb-3">
                                    <label>
                                        <input type="checkbox" required /> Remember me
                                    </label>
                                </div>
                                <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={(e) => { Regi(e) }}>Sign in</button>
                                <p class="mt-2 mb-3 text-muted">© CarWash.com</p>
                            </form>
                        </div>}
                        {
                            !check && <div>
                                <strong>
                                    <br />
                                    <div className='row container'>
                                        <h6>Email: {washerid}</h6>
                                    </div>
                                </strong>
                                <br/>
                                <div className='row container'>
                                <button className="btn btn-danger ml-2" onClick={() => {logOut()}}>
                                    Logout
                                </button>
                            </div>
                            </div>
                            
                        }
                    </strong>
                    

                </div>
                <div className='col-md-9' id="custDashboardArea" style={{ height: "750px", paddingTop: "20px" }}>
                    <center><h1 className='text-light'>All Orders</h1></center>
                    <DataGrid
                        rows={order}
                        columns={columns}
                        pageSize={5}
                        getRowId={(row) => row.emailId}
                        rowsPerPageOptions={[1]}
                        // disableMultipleSelection={true}
                        // checkboxSelection
                        style={{ background: "white" ,height:"500px"}}
                    />

                </div>
            </div>
        </div>
    )
}