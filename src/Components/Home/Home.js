import React from 'react';
import Room from '../Room/Room';
import './Home.css';
import rooms from '../../roomsData';
import  Button  from '@mui/material/Button';


const Home = () => {

    
    return (
        <div>
            <div className='cards'>
            {
                rooms.map(room => <Room key={room.index} room={room}></Room>)
            }
            
        </div>
        <Button variant="contained">Contained</Button>
        </div>
        
    );
};

export default Home;