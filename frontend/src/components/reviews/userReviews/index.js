import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams, useHistory } from "react-router-dom";

import { getUserReview } from "../../../store/reviews";
import { deleteReview } from "../../../store/reviews";
import "./userReviews.css";

const UserReviews = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);
  console.log("user_userReviews", sessionUser);

  const reviews = useSelector((state) => state.reviews.userReviews);
  const reviewsArr = Object.values(reviews);
  console.log("reviews_getspotReviews", reviewsArr);

  useEffect(() => {
    dispatch(getUserReview());
  }, [dispatch]);

  if (reviewsArr.length === 0) {
    return "Sorry, You do not have any reviews.";
  }

  const handleDeleted = async (reviewId) => {
    const result = await dispatch(deleteReview(reviewId));
    console.log("resule_delte_reviews", result);
    if (result)
      // history.push('/reviews/current')
      dispatch(getUserReview());
  };

    // if (!reviews.ReviewImages) return null;

  return (
    <div className="user_reviews_Info_conntainer">
      <p className="user_review_name">{`${sessionUser.firstName},This is your Reviws`}</p>

      <div className="user_single_review">
        {reviews &&
          reviewsArr.map((el) => (
            <div className="user_review_el" key={el.id}>
              {/* {el.ReviewImages && el.ReviewImages.length > 0 && (
                <div className="user_review_img">
                  <img
                    className="user_review_Img_review"
                    src={el.ReviewImages[0]?.url}
                    alt={el.Spot.previewImage}
                  />
                </div>
                  )} */}

                  {/* {!el.ReviewImages[0] && ( */}
                      <div className='user_review_img'>
                            <img className='user_review_Img_review' src={el.Spot?.previewImage} alt={' '} />
                        </div>

{/* )} */}


              <div className="user_review_right">
                <p className="user_list_review_name">{el.Spot?.name}</p>

                <div className="list_star_group">
                  <div className="user_review_star">
                    <i className="fa-solid fa-star" />
                    {el?.stars}
                  </div>
                  <div className="user_review_content">
                    <p>{el?.review}</p>
                  </div>
                </div>
                <div className="review_create_time">
                  {el?.createdAt.slice(0, 10)}
                </div>

                <div className="userReview_delete_button">
                  <button onClick={() => handleDeleted(el.id)}>
                    Delete Review
                  </button>
                  {/* {console.log("el_______", el)} */}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserReviews;
