import * as React from 'react';
import { useState, useEffect } from "react";
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import getcurrentuser from "../service/authService";
import getWasherByEmail from "../service/authService";
import Postorder from "../service/authService";

let p = localStorage.getItem("username");
let washerId = localStorage.getItem("washerEmailId");
let costT=0;
export const Order = () => {
  const [orderId, setOrderId] = useState("1000084554");
  const [timeDate, setValue] = React.useState(dayjs());
  const [lastname, Setlastname] = useState("")
  const [emailId, SetEmailId] = useState("")
  const [firstName, SetFirstName] = useState("");
  const [washerName, setWasherName] = useState("");
  const [line1, setLine1] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [cost, setCost] = useState("");
  const [success, setSuccess] = useState("NOT DONE");
  const [pack, setPack] = useState("Premium Specail");
  const [landmark, setLandmark] = useState("");
  const [washerLocation, setWasherLocation] = useState("");

  const [toggleVar, setToggleVar] = useState(false);
  const [showAddons, SetShowAddons] = useState(false);
  const package1Var = 2000;
  const package2Var= 4000;
  const package3Var = 10000;
  const addon1Var = 500;
  const addon2Var = 1500;
  const addon3Var= 2500;

  const [package1, setPackage1] = useState(false);
  const [package2, setPackage2] = useState(false);
  const [package3, setPackage3] = useState(false);
  const [addon1, setAddon1] = useState(false);
  const [addon2, setAddon2] = useState(false);
  const [addon3, setAddon3] = useState(false);

  const HandleChange=()=>{
    let costTemp = 0;
    let addOnCost = 0;
    if (package1===true){
      costTemp = 0;
      costTemp +=package1Var;
    }
    else if (package2===true){
      costTemp = 0;
      costTemp += package2Var;
    }
    else if (package3===true){
      costTemp = 0;
      costTemp +=package3Var;
    }

    if(addon1===true){
      addOnCost = addon1Var;
    }
    if (addon2===true){
      addOnCost = addon2Var;
    }
    if (addon3===true){
      addOnCost = addon3Var;
    }
    const Total = addOnCost+costTemp;

    setCost(Total.toString());
    

  }



  const hello = (e) => {
    e.preventDefault();
      
      const b = {
      orderId,
      washerId,
      emailId,
      firstName,
      lastname,
      timeDate,
      washerName,
      washerLocation,
      pack,
      cost,
      success
    }
    localStorage.setItem("pack", pack);
    localStorage.setItem("washerId", washerId);
    localStorage.setItem("emailId", emailId);

    Postorder.Postorder(b).then((response) => {
      console.log(response.data);
      window.open("http://localhost:8080/homepage");
      window.location.href = "/profile";
    })
    // postOrder.postOrder(b)
    // .then((response) =>{
    //   console.log(response.data)
    // });



  }



  useEffect(() => {
    if (p) {
      getcurrentuser
        .getcurrentuser(p)
        .then((customer) => {
          SetEmailId(customer.data.emailId)
          SetFirstName(customer.data.firstName);
          Setlastname(customer.data.lastName)
          console.log(washerId)
        }
        )
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);

  useEffect(() => {
    getWasherByEmail
      .getWasherByEmail(washerId)
      .then((washer) => {
        setWasherName(washer.data.washerName)
        setLine1(washer.data.line1);
        setCity(washer.data.city)
        setState(washer.data.state)
        setPincode(washer.data.pincode)
        setLandmark(washer.data.landmark)
        setWasherLocation(line1 + " " + city + " " + state + " " + pincode + " " + landmark)
      }
      )
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  });
  return (
    <div className='Order'>
      
      <div class="container">
        <div class="py-1 text-center">
          <h2>Checkout form</h2>
          <p class="lead">Place your Order now and book your seat for an exclusive car wash.</p>
        </div>

        <div class="row">
          <div class="col-md-4 order-md-2 mb-4">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-muted">Your cart</span>
            </h4>
            <ul class="list-group mb-3">
              {package1 && <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 class="my-0">Base Package</h6>
                  <small class="text-muted">car wash</small>
                </div>
                <span class="text-muted">$2000</span>
              </li>}
              {package2 && <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 class="my-0">Premium Package</h6>
                  <small class="text-muted">car wash + Polish</small>
                </div>
                <span class="text-muted">$4000</span>
              </li>}
              {package3 && <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 class="my-0">Vip Package</h6>
                  <small class="text-muted">car wash + Polish + maintainance</small>
                </div>
                <span class="text-muted">$10000</span>
              </li>}
              {addon1 && <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 class="my-0">Tyre Polish</h6>
                  <small class="text-muted">Extra polish of tyre</small>
                </div>
                <span class="text-muted">$500</span>
              </li>}
              {addon2 && <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 class="my-0">Motor Wash</h6>
                  <small class="text-muted">Motor wash Part by part</small>
                </div>
                <span class="text-muted">$1500</span>
              </li>}
              {addon3 && <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 class="my-0">Interior Designing</h6>
                  <small class="text-muted">Customized disigning of Interior</small>
                </div>
                <span class="text-muted">$2500</span>
              </li>}
              <li class="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>${cost}</strong>
              </li>
            </ul>

          </div>
          <div class="col-md-8 order-md-1">
            <h4 class="mb-3">Billing address</h4>
            <form class="needs-validation" novalidate="">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="firstName">First name</label>
                  <input type="text" class="form-control" id="firstName" value={firstName} readonly />
                  <div class="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="lastName">Last name</label>
                  <input type="text" class="form-control" id="lastName" value={lastname} readonly />
                  <div class="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>

              <div class="mb-3">
                <label for="email">Email </label>
                <input type="email" class="form-control" id="email" value={emailId} />
              </div>

              <div class="mb-3">
                <label for="washerName">Washer Name</label>
                <input type="text" class="form-control" id="address" value={washerName} />
              </div>

              <div class="mb-3">
                <label for="address2">Address</label>
                <input type="text" class="form-control" id="address" placeholder="full address of washer" value={washerLocation} />
              </div>

              <div class="mb-3">
                {/* <label for="address2">Package</label>
              <input type="text" class="form-control" id="address" placeholder="full address of washer" value={pack}/> */}
                <button type="button" onClick={() => { setToggleVar(!toggleVar);setPackage1(false);setPackage2(false);setPackage3(false);SetShowAddons(false); }} className='btn btn-danger'>Choose your Package</button>
                {toggleVar && <div>
                  <div className='row mt-4 p-5 bg-dark text-white rounded'>
                    <h4>Select a Package</h4>
                    <div className='container'>
                      <div class="form-check form-check-inline">
                        <input style={{display:"inline-block"}} class="form-check-input" type="radio" name="inlineRadioOptions" id="basePackage" value="2000" onClick={()=>{setPackage1(!package1);setPackage2(false);setPackage3(false);SetShowAddons(true);HandleChange();costT=2000}}/>
                        <label class="form-check-label" for="basePackage">Base Package</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input  style={{display:"inline-block"}} class="form-check-input" type="radio" name="inlineRadioOptions" id="premiumPackage" value="4000" onClick={()=>{setPackage2(!package2);setPackage1(false);setPackage3(false);SetShowAddons(true);HandleChange();costT=4000}}/>
                        <label   class="form-check-label" for="premiumPackage">Premium Package</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input  style={{display:"inline-block"}} class="form-check-input" type="radio" name="inlineRadioOptions" id="vipPackage" value="10000" onClick={()=>{setPackage3(!package3);setPackage1(false);setPackage2(false);SetShowAddons(true);HandleChange();costT=10000}}/>
                        <label class="form-check-label" for="vipPackage">Vip Package</label>
                      </div>
                    </div>
                  </div>
                  {showAddons && <div className='row mt-4 p-5 bg-secondary text-white rounded'>
                    <h4>Add Ons</h4>
                    <div className='container'>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="Tyrepolish" value="500" onClick={(e)=>{setAddon1(!addon1);HandleChange();costT=costT+500}}/>
                        <label class="form-check-label" for="Tyrepolish">Tyre polish</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="MotorWash" value="1500" onClick={(e)=>{setAddon2(!addon2);HandleChange();costT=costT+1500}}/>
                        <label class="form-check-label" for="MotorWash">Motor Wash</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="InteriorDesigning" value="2500" onClick={(e)=>{setAddon3(!addon3);HandleChange();costT=costT+2000}}/>
                        <label class="form-check-label" for="InteriorDesigning">Interior Designing</label>
                      </div>
                    </div>
                  </div>}
                </div>}
              </div>
              <br />

              <div>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="DateTimePicker"
                    value={timeDate}
                    onChange={(newValue) => {
                      setValue(newValue);
                      console.log(timeDate);
                    }}
                  />
                </LocalizationProvider>
              </div>
              <br/>
              <div className='order'>
                <button className='btn btn-warning' onClick={(e) => {hello(e) }}>place order</button>
              </div>
            </form>
          </div>
        </div>

        <footer class="my-5 pt-5 text-muted text-center text-small">
       
        </footer>
      </div>
    </div>
  )
}