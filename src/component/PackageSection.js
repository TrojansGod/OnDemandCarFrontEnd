import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
function PriceList() {
  return (
<div>

    <div className='row' >
        
        <div className='col-md-3'>

        <div class="card" style={{ width: '20rem'}}>
        <img className="card-img-top" style={{ width: '20rem',height:'20rem'}} src="https://cdn.pixabay.com/photo/2015/05/31/12/41/cleaning-791542_960_720.jpg" />
        <div className="card-body" style={{backgroundColor:'lightgray' }}>
        
            <Card.Text>
            <b>FULL CAR WASH</b>
    
            </Card.Text>
            <Card.Text>
            ₹2199
            </Card.Text>
           
        </div>
        <ListGroup style={{color: 'White'}}>
            <ListGroup.Item style={{backgroundColor: 'gray'}}>Standard Water Wash</ListGroup.Item>
            <ListGroup.Item style={{backgroundColor: 'gray'}}>Both Interior Exterior</ListGroup.Item>
            <ListGroup.Item style={{backgroundColor: 'gray'}}>Free Washing Materials</ListGroup.Item>
        </ListGroup>
        
        <Card.Body>
        <Button variant="primary">Book Now</Button>
        <Button variant="success" className="mx-2" href="https://api.whatsapp.com/send?phone=9163484074&text=Let me know the standard plan"><FontAwesomeIcon icon={faWhatsapp} className="mx-1" />Chat Now</Button>
            {/* <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
        </div>
        </div>
        <div className='col-md-3'>
        <div class="card" style={{ width: '20rem'}}>
        <img className="card-img-top" style={{ width: '20rem',height:'20rem'}}  src="https://cdn.pixabay.com/photo/2020/05/21/16/50/car-5201683_960_720.jpg" />
        <div className="card-body" style={{backgroundColor:'lightgray' }}>
        <Card.Text>
            <b>FOAM SPECIAL</b>
    
            </Card.Text>
            <Card.Text>
            ₹2199
            </Card.Text>
        </div>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>Special Foam Wash</ListGroup.Item>
            <ListGroup.Item>Only Exterior</ListGroup.Item>
            <ListGroup.Item>Free Polish</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Button variant="primary">Book Now</Button>
        <Button variant="success" className="mx-2" href="https://api.whatsapp.com/send?phone=9163484074&text=Let me know the standard plan"><FontAwesomeIcon icon={faWhatsapp} className="mx-1" />Chat Now</Button>
        </Card.Body>
        </div>
        </div>
        <div className='col-md-3'>
        <div class="card" style={{ width: '20rem'}}>
        <img className="card-img-top" style={{ width: '20rem',height:'20rem'}}   src="https://cdn.pixabay.com/photo/2020/05/08/08/49/wash-5144828_960_720.jpg" />
        <div className="card-body"style={{backgroundColor:'lightgray' }} >
            <Card.Text>
            <b>SPECIAL INTERIOR</b>
            </Card.Text>
            <Card.Text>
            ₹999
            </Card.Text>
        </div>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>Interior Special Wash</ListGroup.Item>
            <ListGroup.Item>With Deep Clean</ListGroup.Item>
            <ListGroup.Item>Free Polish</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Button variant="primary">Book Now</Button>
        <Button variant="success" className="mx-2" href="https://api.whatsapp.com/send?phone=918240935072&text=Let me know the standard plan"><FontAwesomeIcon icon={faWhatsapp} className="mx-1" />Chat Now</Button>
        </Card.Body>
        </div>
        </div>
        <div className='col-md-3'>
        <div class="card" style={{height:'20rem', width: '15rem'}}>
        <img className="card-img-top" style={{ width: '20rem',height:'15rem'}}   src="https://cdn.pixabay.com/photo/2020/05/08/08/49/wash-5144828_960_720.jpg" />
        <div className="card-body"style={{backgroundColor:'lightgray' }} >
            <Card.Text>
            <b>SPECIAL INTERIOR</b>
            </Card.Text>
            <Card.Text>
            ₹999
            </Card.Text>
        </div>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>Interior Special Wash</ListGroup.Item>
            <ListGroup.Item>With Deep Clean</ListGroup.Item>
            <ListGroup.Item>Free Polish</ListGroup.Item>
        </ListGroup>
        <Button variant="primary">Book Now</Button>
        <Button variant="success" className="mx-2" href="https://api.whatsapp.com/send?phone=918240935072&text=Let me know the standard plan"><FontAwesomeIcon icon={faWhatsapp} className="mx-1" />Chat Now</Button>
        </div>
        </div>
      </div>
      </div>
    
  );
}

export default PriceList;