import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams, Redirect,useHistory } from "react-router-dom";
import { getSpotBookings, getUserBookings, deleteBooking } from "../../../store/bookings.js";
import BookingFormModal from "../../CreateBookingModal/index.js";
import './GetCurrentBookings.css'

const GetCurrentBookings = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isLoaded, setIsLoaded] = useState(false)

    const currentUser = useSelector((state) => state.session.user);
    const currentBookings = useSelector(state => state.bookings?.userBookings)
    console.log('currentBookings-9n-getCurrentBookings', currentBookings)

    if (!currentUser) {
        history.push("/");
    }

    useEffect(() => {
        if (currentUser) {
          dispatch(GetCurrentBookings())
        .then(() => {
              setIsLoaded(true)
            })
        }
    }, [dispatch]);

    let currentBookingsArr;
    if (isLoaded) {
        currentBookingsArr = Object.values(currentBookings)

        if (currentSpotArr.length === 0) {
          return "No trips booked...yet!";
        }
    }

    return (
        <div className="user-booking-container">

        </div>
    )








}







export default GetCurrentBookings;
