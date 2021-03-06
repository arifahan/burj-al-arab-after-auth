import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://damp-cove-77187.herokuapp.com/bookings?email='+loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }

        })
        .then(res => res.json())
        .then(data => setBookings(data))
    }, [])


    return (
        <div>
            <h1>You have: {bookings.length}</h1>
            {
                bookings.map(book => <li key={book._Id}>{book.name} from: {(new Date(book.checkIn).toDateString('dd/MM/yyy'))} to: {(new Date(book.checkOut).toDateString('dd/MM/yyy'))}</li>)
            }
        </div>
    );
};

export default Bookings;