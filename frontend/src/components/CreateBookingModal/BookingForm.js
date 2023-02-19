import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBooking } from "../../store/bookings";
import { useHistory, useParams } from "react-router-dom";
import "./createBooking.css";

function BookingForm({ setShowModal, spot }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { spotId } = useParams();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);

  const currentUser = useSelector((state) => state.session.user);

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
      totalCost: night * spot.price,
    };

    if (new Date(endDate) > new Date(startDate)) {
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

  let sum = night * `${spot.price}`;
  let priceInfo;
  if (new Date(endDate) > new Date(startDate)) {
    priceInfo = (
      <p>
        {" "}
        ${spot.price} x {night} nights <span>${sum.toFixed(0)}</span>
      </p>
    );
  } else {
    priceInfo = (
      <p>
        {" "}
        ${spot.price} x 0 nights <span>${0}</span>{" "}
      </p>
    );
  }

  return (
    <>
      <h4>Make a reservation</h4>
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
        <div className="text-nocharge">You won't be charged yet</div>
      </form>

      <div className="second-part"></div>
      <div>{priceInfo}</div>

      <div>
        <div>
          Cleaning fee
          <span>$100</span>
        </div>
      </div>

      <div>
        <div>
        Service fee
          <span>$0</span>
        </div>
      </div>

      <div className="third-part">
        
      </div>


    </>
  );
}

export default BookingForm;
