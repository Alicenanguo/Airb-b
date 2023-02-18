import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams, useHistory } from "react-router-dom";
import { getSpotBookings, getUserBookings, deleteBooking } from "../../../store/bookings.js";
import BookingFormModal from "../../CreateBookingModal/index.js";
import './GetCurrentBookings.css'

const GetCurrentBookings = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isLoaded, setIsLoaded] = useState(false)

    const currentUser = useSelector((state) => state.session.user);
    const currentBookings = useSelector(state => state.booking?.userBookings)
    console.log('currentBookings-in-getCurrentBookings', currentBookings)

    if (!currentUser) {
        history.push("/");
    }

    useEffect(() => {
        if (currentUser) {
          dispatch(getUserBookings())
        .then(() => {
              setIsLoaded(true)
            })
        }
    }, [dispatch]);

    let currentBookingsArr;
    if (isLoaded) {
        currentBookingsArr = Object.values(currentBookings)
        console.log('currentBookings',currentBookings)

        if (currentBookingsArr.length === 0) {
          return "No trips booked...yet!";
        }
    }

    return (
        <div className="user-booking-container">
            {isLoaded && (
                <>
                    <div className="user-booking">
                        <div className="text-Trips">Trips</div>



                    </div>
                </>
            )}

        </div>
    )








}







export default GetCurrentBookings;
