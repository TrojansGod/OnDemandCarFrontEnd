import React,{ useState, useEffect } from 'react';
import "../pages/reg.css";
import giveFeedback123 from '../service/giveFeedback';

export const Homeregister = () => {
	const [name, setName] = useState("");
  	const [emailId, setEmailId] = useState("");
	const [message, setMessage] = useState("");

	const feedbackform = (e) =>{

	const feedback = { 
        name,
		emailId,
        message
	};

	giveFeedback123
	.giveFeedback123(feedback)
	.then((response) => {
		console.log("Feedback added successfully", response.data);
	  })
	  .catch((error) => {
		console.log("Something went wrong", error);
	  });
	}



  return (
    <div className='Homeregister'>
        <div class="container d-flex justify-content-center">
			<div class="row my-2 mx-2">
			<div class="col-md-12">
					<h2 class="form-title">Contact us</h2>
						<p class="justify text-muted">Have an enquiry or would like to give us feedback?<br/>Fill out the form below to contact our team.</p>

					<form>
						<div class="form-group pt-2 pl-1">
							<label for="exampleInputName">Your name</label>
							<input type="text" class="form-control" id="exampleInputName"  
							value={name} onChange={(e) => setName(e.target.value)}/>
						</div>

						<div class="form-group pl-1">
							<label for="exampleInputEmail1">Your email address</label>
 						 	<input type="email" class="form-control" id="exampleInputEmail1"
							value={emailId} onChange={(e) => setEmailId(e.target.value)}/>
						</div>

						<div class="form-group pl-1">
    						<label for="exampleFormControlTextarea1">Your message</label>
    						<textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
							value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

  						</div>
  						<div class="row homecontactbtn">
  							<div class="col-md-3 offset-md-9"><button type="submit" class="btn btn-primary homecontactbtn1" onClick={(e) => feedbackform(e)}>Send</button></div>
  						</div>
						
  						
  					</form>
						
			</div>
		</div>
			
		</div>
    </div>
  )
}