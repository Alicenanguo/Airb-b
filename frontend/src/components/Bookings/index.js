import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBookings, deleteBooking } from '../../store/booking';
import { NavLink } from "react-router-dom";
import EditBookingFormModal from '../EditBookingModal';
import { Modal } from '../../context/Modal';
import LoginForm from '../LoginFormModal/LoginForm';


export default function Bookings() {
    const dispatch = useDispatch();
    const bookingsObj = useSelector(state => state.booking);
    const bookings = Object.values(bookingsObj)
    const sessionUser = useSelector((state) => state.session.user);

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
       dispatch(getBookings());
    }, [dispatch]);


    if (!sessionUser) {
        return (
        <>
            <Modal onClose={() => setShowModal(false)}>
              <LoginForm />
            </Modal>
        </>
      );
}
    if (!bookings.length) return (<div>You have no bookings now.</div>)

    return (
        <>
            <h4>Welcome to Bookings Page!</h4>
            {bookings && bookings.map(booking => (
                <div key= {booking.id} style={{ display: "flex", flexFlow: "column" }}>
                    <div>Hotle: <NavLink to={`/listings/${booking.Listing.id}`}>{booking.Listing.name}</NavLink></div>
                    <div>Checkin date: ${booking.startDate}</div>
                    <div>Checkout date: ${booking.endDate}</div>
                    <div>Total cost: ${booking.totalCost}</div>
                    <button  onClick={async(e) => {e.preventDefault(); dispatch(deleteBooking(booking.id))}} value={booking.id}>Delete Booking</button>
                    < EditBookingFormModal booking = {booking}/>
                </div>
            ))}

        </>

    )
}
