import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams, useHistory } from "react-router-dom";
import {
  editReviewTHUNK,
  getAllProductReviews,
  getUserReview,
} from "../../../store/review";
import { getOneProductThunk } from "../../../store/product";
import "./EditReview.css";
import UserReviews from "../UserReviews";

const EditReview = ({ reviews, reviewId, setShowModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.session.user);
  const product = useSelector((state) => state.products.singleProduct);
  // const userReview = useSelector(state => state.reviews?.userReviews)
  // console.log("userReview-in-edit0review",userReview)

  console.log("-----------------------review", reviews[reviewId]);
  console.log("review_id_editreview", reviewId);
  const [review, setReview] = useState(reviews[reviewId]?.review);

  const [stars, setStars] = useState(reviews[reviewId]?.stars);

  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  console.log("reviews-in-edit-component", review);

  // useEffect(() => {
  //   dispatch(getOneProductThunk(product.id));
  // }, [dispatch]);

  useEffect(() => {
    const errors = [];
    if (review?.length > 2000)
      errors.push("Review could not greater than 2000 characters.");

    setValidationErrors(errors);
  }, [review]);

  const onSubmit = async (e) => {
    e.preventDefault();

    setHasSubmitted(true);

    const reviewInfo = {
      review,
      stars,
    };

    console.log("review_info_in_update_reviews", reviewInfo);

    await dispatch(editReviewTHUNK(reviewInfo, reviewId))
      .then(() => {
        dispatch(getUserReview());
      })
      .then(() => setShowModal(false));

    // if (result) {
    //   console.log('product-in-editreview',product)
    //   // dispatch(getOneProductThunk(product.id))

    //   setShowModal(false)
    // }
    // console.log("createReviews_result", result);
    //   .then(() => dispatch(getOneProductThunk(productId)))
    //   .then(() => dispatch(getAllProductReviews(productId)))
    //   .catch(async (res) => {
    //       const data = await res.json();
    //       console.log('data_in_add_review',data)
    //     if (data && data.errors) setValidationErrors(data.errors);

    //       console.log('res****************',res)
    //     if (res.status === 403) {
    //       setValidationErrors(["you have a review for this product"])
    //     }

    // })
  //   if (result?.errors) {
  //     setValidationErrors([result.errors]);
  //   }
  //   console.log("res_in_create_reviews", result);
  //   console.log("errors_in_create_review", result?.errors);
  //   // console.log("errors_in_create_reviews", validationErrors);

  //   //   if (!result.errors && validationErrors.length === 0) {
  //   //     setShowModal(false);
  //   //     await dispatch(getOneProductThunk(productId))
  //   //       .then(() => dispatch(getAllProductReviews(productId)))
  //   //       .then(() => history.push(`/products/${productId}`));
  //   //   }
  //   // };
  //   // console.log("errors_in_add_reviews", validationErrors);
   };
  const cancelSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    //history.push('/reviews/current');
  };

  const ratingStar = [1, 2, 3, 4, 5];

  return (
    <>
      <form className="createReviews_form_add" onSubmit={onSubmit}>
        <h2 className="review_info">Edit Review</h2>

        {hasSubmitted && validationErrors.length > 0 && (
          <div className="err-div">
            <ul className="errors_info" id="errors_show_above">
              {validationErrors?.map((error, idx) => (
                <li className="error" key={idx}>
                  {error}
                </li>
              ))}
            </ul>
          </div>
        )}

        <label className="review_stars">
          Update Rating
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
            <div>Update Review</div>

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

        <div className="create_product_submit">
          <button type="submit" id="submit_button">
            Update Review
          </button>
          <button className="cancel_product_button" onClick={cancelSubmit}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default EditReview;
