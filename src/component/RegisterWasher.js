import React, { useEffect, useState } from 'react';
import washerRegister from "../service/authService";

export const RegisterWasher = () => {
    const [emailId,setEmailId] = useState("");
    const [washerName,setWasherName] = useState("");
    const [line1,setLine1] = useState("");
    const [city,setCity] = useState("");
    const [state,setState] = useState("");
    const [pincode,setPincode] = useState("");
    const [landmark,setLandmark] = useState("");
    const [phoneNo,setPhoneNo] = useState("");
    const [password,setPassword] = useState("");
    

    const handleRegister = (e) =>{
        e.preventDefault();
        const washer = {
            emailId,
            washerName,
            line1,
            city,
            state,
            pincode,
            landmark,
            phoneNo,
            password
        };
        if(emailId){
        washerRegister
        .washerRegister(washer)
        .then((response) => {
          console.log("washer data registered", response.data);
          window.location.href="/adash";
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });}
        else{
            console.log("Enter the fields");
        }
    }


    return (

        <div className='row'style={{ marginTop: "20px", paddingBottom:"10px" , backgroundColor:"#71706E"}}>
            <div className="">
                
            </div>
            <div className='Register container col-md-5' style={{ width: "60%", paddingBottom:"10px",color:"black"}}>
                <center><h3>Register Washer</h3></center>
                <form class="row g-3 was-validated" novalidate>
                    <div class="col-md-8">
                        <label for="validationCustom16" class="form-label">Washer Name</label>
                        <input type="text" class="form-control" id="validationCustom16" value={washerName} onChange={(e) => setWasherName(e.target.value)} required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="validationCustom17" class="form-label">Line1</label>
                        <input type="text" class="form-control" id="validationCustom17" value={line1} onChange={(e) => setLine1(e.target.value)} required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="validationCustom18" class="form-label">City</label>
                        <input type="text" class="form-control" id="validationCustom18" value={city} onChange={(e) => setCity(e.target.value)} required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="validationCustom19" class="form-label">State</label>
                        <input type="text" class="form-control" id="validationCustom19" value={state} onChange={(e) => setState(e.target.value)} required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="validationCustom20" class="form-label">Pincode</label>
                        <input type="text" class="form-control" id="validationCustom20" value={pincode} onChange={(e) => setPincode(e.target.value)} required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="validationCustom21" class="form-label">Landmark</label>
                        <input type="text" class="form-control" id="validationCustom21" value={landmark} onChange={(e) => setLandmark(e.target.value)} required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="validationCustom22" class="form-label">Phone No</label>
                        <input type="text" class="form-control" id="validationCustom22" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="validationCustomUsername" class="form-label">EmailId</label>
                        <div class="input-group has-validation">
                            <input type="email" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" value={emailId} onChange={(e) => setEmailId(e.target.value)} required />
                            <div class="invalid-feedback">
                                Please choose a email.
                            </div>
                        </div>
                    </div>
                   
                    <div class="col-md-6">
                        <label for="validationCustom23" class="form-label">Password</label>
                        <input type="password" class="form-control" id="validationCustom23" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    
                    <div class="col-12">
                        <button class="btn btn-primary" onClick={(e) => handleRegister(e)} type="submit">Submit form</button>
                    </div>
                </form>
            </div>
        </div>
    )
}