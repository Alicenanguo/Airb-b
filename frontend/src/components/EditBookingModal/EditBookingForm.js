import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { editBooking } from "../../store/bookings";
import "./edit.css";

function EditBookingForm({ showModal, setShowModal, booking }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [startDate, setStartDate] = useState(booking.startDate);
  const [endDate, setEndDate] = useState(booking.endDate);

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);
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
      id: booking.id,
      listingId: booking.Listing.id,
      startDate,
      endDate,
      totalCost: night * booking.Listing.price,
    };

    if (new Date(endDate) > new Date(startDate)) {
      setErrors([]);
      return dispatch(editBooking(data))
        .then(() => {
          setShowModal(false);
        })
        .then(() => history.push(`/listings`))
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

  let priceInfo;

  if (new Date(endDate) > new Date(startDate)) {
    priceInfo = (
      <p>
        Total price = {night} x ${booking.Listing.price}
      </p>
    );
  } else {
    priceInfo = <p>Total price = 0 x ${booking.Listing.price}</p>;
  }

  return (
    <div className="edit">
      <h4>Edit your reservation</h4>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <input
          type="date"
          required
          value={startDate}
          min={`${year}-${month}-${date}`}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <input
          type="date"
          required
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <button type="submit">Submit</button>
        <button onClick={() => setShowModal(false)}>Cancel</button>
      </form>
      {priceInfo}
    </div>
  );
}

export default EditBookingForm;
