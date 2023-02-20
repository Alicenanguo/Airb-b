import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBooking,getSpotBookings } from "../../store/bookings";
import { useHistory, useParams } from "react-router-dom";
import bookingDays from "../spots/getSpotDetails/Booked";
import "./createBooking.css";
import { Calendar } from "react-date-range";

function BookingForm({ setShowModal, spot }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { spotId } = useParams();

  const [isLoaded, setIsLoaded] = useState(false);


  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);

  const currentUser = useSelector((state) => state.session.user);
  const booking = useSelector(state => state.booking?.userBookings)
  console.log('booking-in-create-booking',booking)

  useEffect(() => {
    dispatch(getSpotBookings(spotId))
    .then(() => setIsLoaded(true))
}, [dispatch, spotId])

  let bookingArr;
  if (isLoaded) bookingArr = Object.values(booking)
  console.log('bookingArr-in-create-booking',bookingArr)

  let booked = []
    for (let i = 0; i < bookingArr?.length; i++) {
        if (bookingArr[i].spotId == spotId) {
            booked =booked.concat(bookingDays(bookingArr[i].startDate,bookingArr[i].endDate))
        }
    }
  console.log('booked-in-create-Booking', booked)

  // if (booked.includes(startDate) || booked.includes(endDate)) {
  //   errors.push('Sorry, this spot is already booked for the specified dates')

  // }



  const today = new Date();

  const date = today
    .getDate()
    .toLocaleString(("en-US", { minimumIntegerDigits: 2 }));
  const month = (today.getMonth() + 1).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
  }); // range from 0 -11
  const year = today.getFullYear();

  const night = (new Date(endDate) - new Date(startDate)) / (1000 * 3600 * 24);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    const data = {
            spotId: spot.id,
            startDate,
            endDate,
          };

  //   if (currentUser) {
  //     const data = {
  //       spotId: spot.id,
  //       startDate,
  //       endDate,
  //     };
  //     setHasSubmitted(true);

  //     const exitedBookings = await dispatch(createBooking(data))
  //       .then(() => setShowModal(false))
  //       .then(() => history.push(`/bookings`))
  //       .catch(async res => {
  //         const data = await res.json();
  //         if (data && data.errors) setErrors(data.errors);
  //       })
  //     if (exitedBookings) {
  //       setErrors([errors]);
  //       history.push(`/bookings/current`)
  //     } else {
  //       setHasSubmitted(true);

  //     }
  //   }
  // }

    if (booked.includes(startDate) || booked.includes(endDate)) {
      setErrors([]);
      return dispatch(createBooking(data))
        .then(() => setShowModal(false))
        .then(() => history.push(`/bookings`))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    } else {
      let error = [];
      error.push(
        "Make suer your checkout date is later than your checkin date"
      );
      setErrors(error);
      setHasSubmitted(true);
      return;
    }
  };

  let sum;
  if (!night) sum = 0
  else{sum = night * spot.price;}

  console.log("sum*************", night);
  let priceInfo;
  if (new Date(endDate) > new Date(startDate)) {
    priceInfo = (
      <>
        <div>
          ${spot.price} x {night} nights
        </div>
        <span>${sum.toFixed(0)}</span>
      </>
    );
  } else {
    priceInfo = (
      <>
        <div>${spot.price} x 0 nights</div>
        <span>${0}</span>
        </>

    );
  }

  return (
    <>
      <div className="create-booking-container">
        <div className="text-make-reservation">Make a reservation</div>

        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li className="error" key={idx}>
                {error}
              </li>
            ))}
          </ul>

          <div className="creat-booking-first-part">
            <div className="check-in-booking-input">
            <label className="text-check">CHECK-IN</label>
            <input
              type="date"
              required
              value={startDate}
              // min={`${year}-${month}-${date}`}
              onChange={(e) => setStartDate(e.target.value)}
              min={`${new Date().toLocaleDateString('en-ca')}`}
              max={`${new Date().getFullYear() + 2}-12-31`}
              />
            </div>

            <div className="check-in-booking-input" id='create-booking-checkout'>
            <label className="text-check">CHECKOUT</label>
            <input
              type="date"
              required
              value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                min={`${new Date(new Date(startDate).getTime() + (1000 * 3600 * 48)).toLocaleDateString('en-ca')}`}
                max={`${new Date().getFullYear() + 2}-12-31`}
              />
              </div>
          </div>

          <div className="create-booking-second-part">
            <div className="second-part-el">{priceInfo}</div>

            <div className="second-part-el">
                Cleaning fee
                <span>$100</span>
            </div>

            <div className="second-part-el">
                Service fee
                <span>$60</span>
            </div>
          </div>

          <div className="create-booking-third-part">
            Total before taxes
            <span>${sum + 100 + 60}</span>
          </div>

          <div className="create-booking-fourth-part">
            <div className="create-booking-button">
          <button className='submit_button' type="submit">Submit</button>
              <button className='submit_button'id='create-booking-cancel' onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            <div className="text-nocharge">You won't be charged yet</div>
            </div>
        </form>
      </div>
    </>
  );
}

export default BookingForm;
