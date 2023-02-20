import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams, useHistory } from "react-router-dom";
import {
  getSpotBookings,
  getUserBookings,
  deleteBooking,
} from "../../../store/bookings.js";
import BookingFormModal from "../../CreateBookingModal/index.js";
import "./GetCurrentBookings.css";

const GetCurrentBookings = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isLoaded, setIsLoaded] = useState(false);

  const currentUser = useSelector((state) => state.session.user);
  const currentBookings = useSelector((state) => state.booking?.userBookings);
  console.log("currentBookings-in-getCurrentBookings", currentBookings);

  if (!currentUser) {
    history.push("/");
  }

  useEffect(() => {
    if (currentUser) {
      dispatch(getUserBookings()).then(() => {
        setIsLoaded(true);
      });
    }
  }, [dispatch]);

  let currentBookingsArr;
  if (isLoaded) currentBookingsArr = Object.values(currentBookings);
  console.log("currentBookings", currentBookings);

  if (currentBookingsArr?.length === 0) {
    return (
      <>
        <div>No trips booked...yet!</div>
        <div>
          Time to dust off your bags and start planning your next adventure
        </div>
        <button>
          Start searching
          <NavLink className="go-backr" to={`/`}>
            Start searching
          </NavLink>
        </button>
      </>
    );
  }

  const bookingCancel = async (id) => {
    if (window.alert('Want to cancel your reservation?')) {
      await dispatch(deleteBooking(id))
    }

  }

  return (
    isLoaded && (
      <>
        <div className="user_reviews_Info_conntainer">
          <div className="user_review_name">Trips </div>

          {currentBookingsArr?.length > 0 && (
            <>
              <div className="user_single_review">
                {currentBookingsArr.map((el) => (
                  <>
                  <div className="user_review_el" key={el.id}>
                    <div className="user_review_img">
                      <img
                        className="user_review_Img_review"
                        src={el?.Spot?.previewImage}
                        alt={el?.Spot?.name}
                        onError={(e) => {
                          e.currentTarget.src = "/default.jpeg";
                        }}
                      />
                    </div>

                    <div className="user_review_right">
                      <NavLink className='navlink' to={`/spots/${el?.Spot.id}`}>
                        <div id='booking-address-trips' className="user_list_review_name">
                          {el?.Spot?.name}
                        </div>
                      </NavLink>
                      <div className="listing_spot_address_name">
                        {el?.Spot.address}, {el?.Spot.city}, {el?.Spot.state}
                      </div>
                      <div className="listed-spot-info-time">{`${el?.startDate.slice(
                        0,
                        10
                      )} to ${el?.endDate.slice(0, 10)}`}</div>
                    </div>
                  </div>

                  <div className='user-bookings-delete-button'>
                  {new Date() < new Date(el.startDate) && (
                      <button onClick={(e) => bookingCancel(el.id)}> Cancel Reservation </button>
                  )}
                    </div>
                    </>
                ))}
              </div>
            </>
          )}
        </div>
      </>
    )
  );
};

export default GetCurrentBookings;
