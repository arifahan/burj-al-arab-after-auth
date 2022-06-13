import React from 'react';
import {Card, Button} from 'react-bootstrap';
import './Room.css'
import { Bicycle, Book, House, Valentine } from 'react-bootstrap-icons';

import { Link } from 'react-router-dom';


const Room = (props) => {
    const {id, title, description, imgUrl, bed, capacity, bedType, avatar, price} = props.room;


    return (
        
        <div>
        <Card className="card">
            <Card.Body>
                <span className='sl-no'>{avatar}</span>
                <h6>{title}</h6>
                <img className="img-thumbnail" src={imgUrl} alt="" />
                <Card.Text>
                   {description}
                </Card.Text>
                <footer className='card-footer'>
                    <div>
                        <Bicycle /><span> : {bed}</span>
                    </div>
                    <div>
                        <Valentine /><span> : {bedType}</span>
                    </div>
                    <div>
                        <span>$:{price}</span>
                    </div>
                    <div>
                        <Link  to={"/book/"+bedType}><Button  variant="primary">Book</Button></Link> 
                    </div>
                </footer>
                
            </Card.Body>
        </Card>
        </div>
    );
};

export default Room;