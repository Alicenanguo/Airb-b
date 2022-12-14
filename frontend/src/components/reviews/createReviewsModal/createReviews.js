import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams, useHistory } from "react-router-dom";
import { createReviews, getAllSpotReviews } from "../../../store/reviews";
import "./createReviews.css";
import { getSpotsDetail } from '../../../store/spots'

const CreateReviews = ({ spotId, setShowModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.session.user);
  const spot = useSelector((state) => state.spots.singleSpot);

  console.log("-----------------------review");
  const [review, setReview] = useState("");
  const [stars, setStars] = useState(5);

  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // useEffect(() => {
  //   const errors = [];
  //   if (!review) errors.push("Review text is required");
  //   // if (stars < 0 || stars > 5) errors.push('Stars must be an number from 1 to 5')

  //   setValidationErrors(errors);
  //   // console.log('errors_createReviews', errors)

  // }, [review, stars]);

  const onSubmit = async (e) => {
    e.preventDefault();

    setHasSubmitted(true);

    const reviewInfo = {
      review,
      stars,
    };
    // console.log('reviewInfo', reviewInfo)
    // console.log('validationEroors',validationErrors)

    const result = await dispatch(createReviews(reviewInfo, spotId))
      // console.log("createReviews_result", result);
      .then(() => dispatch(getSpotsDetail(spotId)))
      .then(() => dispatch(getAllSpotReviews(spotId)))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setValidationErrors(data.errors);


        if (res.status === 403) {
          setValidationErrors(["User already has a review for this spot"])
        }

      })

      if (result) {
        setShowModal(false);
        history.push(`/spots/${spotId}`);

      }

  };
  const ratingStar = [1, 2, 3, 4, 5];

  return (
    <>
      <form className="createReviews_form_add" onSubmit={onSubmit}>
        <h2 className="review_info">Please Leave Your Review</h2>

        {hasSubmitted && validationErrors.length > 0 && (
          <div className="err-div">
            <ul className="error_container">
              {validationErrors.map((error, idx) => (
                <li className="error" key={idx}>
                  {error}
                </li>
              ))}
            </ul>
          </div>
        )}

        <label className="review_stars">
          Rating
          <select
            id="stars"
            type="number"
            name="stars"
            onChange={(e) => setStars(e.target.value)}
            value={stars}
            required
          >
            {ratingStar.map((el) => (
              <option key={el}>{el}</option>
            ))}
          </select>
        </label>

        <div className="create_review_content">

          <label>
            <div>Review</div>

            <div>
              <textarea
                id="review"
                type="text"
                name="review"
                onChange={(e) => setReview(e.target.value)}
                value={review}
                required
              ></textarea>
            </div>
          </label>
        </div>
        <button type="submit" id="submit_button">
          Create Review
        </button>
      </form>
    </>
  );
};

export default CreateReviews;
