import React from "react";
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";
import Header from '../component/Header'
import Header1 from '../component/Header1'
import carwash from "../video/carwash.mp4";
import "./Scroll.css";
import PriceList from "../component/PackageSection";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {Footers} from "../component/Foooters";
window.localStorage.setItem("washerId","hello")


const Scroll = () => (
  <div >
    

    <video src={carwash} autoPlay loop muted disablePictureInPicture aria-setsize={"90%"} ></video>
    <div className="content1">
     
      <Header1></Header1>

    </div>
  
    <div className='container' style={{ "padding-top": "20px", "padding-left": "200px", "item-align": "center" }}>
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">One Subscriptions. <span className="text-muted">It'll blow your mind.</span></h2>
                        <p className="lead">Only at <b><i>CarWash.com</i></b> you will find all sorts of car wash services just at your fingertips.
                            From basic car wash to premium grade car wash all you can find for now in your locality. Just see for yourself by registering today. </p>
                    </div>
                    <div className="col-md-3">
                        <img className="featurette-image img-fluid mx-auto" alt="500x500" style={{ "width": "300px", "height": "300px" }} src="assets/2.jpg" data-holder-rendered="true" />
                    </div>
                </div>

                <br />
                <br />

                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
                        <p className="lead">Yes, after all these offerings if you still find its not worth it then give a try to our VIP membership
                            where you will get variety of offers, discounts and many more extra spices which will make you fall in love with <b><i>CarWash.com</i></b></p>
                    </div>
                    <div className="col-md-3 order-md-1">
                        <img className="featurette-image img-fluid mx-auto" alt="500x500" style={{ "width": "300px", "height": "300px" }} src="assets/5.jpg" data-holder-rendered="true" />
                    </div>
                </div>
            </div>
            <br />
            <br />
            {/* Third view in the homepage that is offering */}
            <div className='homeBg3'>
                <div className='container pricing-container'>
                    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                        <h1 className="display-4">Subscriptions</h1>
                        <p className="lead">Servies we offer to our customers based on the subscription.
                            So choose your subscription wisely although we give you the liberty to upgrade anytime and
                            we also have a basic membership those who want to experience our servie.</p>
                    </div>

                    <div className="card-deck mb-3 text-center row">
                        <div className="card mb-4 box-shadow col" id="pricingCards">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">Basic</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">₹1500 <small className="text-muted">/ mo</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Hand wash</li>
                                    <li>Basic Polish</li>
                                    <li>Inflation of tyres with Nitrogen</li>
                                    <li>Only basic cars.</li>
                                </ul>
                                <button type="button" className="btn btn-lg btn-block btn-primary">Register</button>
                            </div>
                        </div>
                        <div className="card mb-4 box-shadow col" id="pricingCards">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">Premium</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">₹2500 <small className="text-muted">/ mo</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Automatic wash</li>
                                    <li>Premium polish</li>
                                    <li>Inflation of tyres with Nitrogen</li>
                                    <li>Premium cars included.</li>
                                </ul>
                                <button type="button" className="btn btn-lg btn-block btn-primary">Register</button>
                            </div>
                        </div>
                        <div className="card mb-4 box-shadow col" id="pricingCards">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">VIP</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">₹5000 <small className="text-muted">/ mo</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Automatic wash + hand wash</li>
                                    <li>Diamond polish</li>
                                    <li>Complete servicing</li>
                                    <li>Sports car included</li>
                                </ul>
                                <button type="button" className="btn btn-lg btn-block btn-primary">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    <Footers></Footers>
  </div>
);

export default Scroll;