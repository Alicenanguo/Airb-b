import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams } from "react-router-dom";
import { updateSpot } from "../../../store/spots.js";
import { getSpotsDetail } from "../../../store/spots.js";
import CreateReviewsModal from "../../reviews/createReviewsModal/index.js";
import "./getSpotDetails.css";

import GetSpotReviews from "../../reviews/spotReviews";

const GetSingleSpot = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const { spotId } = useParams();
  console.log("spotId", spotId);
  const single = useSelector((state) => state.spots.singleSpot);
  console.log("single_state_getone", single);
  //console.log('get_one_spot', single.SpotImages)

  const currentUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getSpotsDetail(spotId)).then(() => setIsLoaded(true));
  }, [dispatch, spotId]);

  if (!single) return null;

  return (
    <div className="getOneSpot_container">
      {isLoaded && (
        <div className="single_spots">
          {single.id && (
            <>
              <div className="single_name">{single.name}</div>

              <div className="spot_info_container">
                <div className="single_avgRating_star">
                  <i className="fa-solid fa-star" />
                  {single.avgStarRating
                    ? parseFloat(single.avgStarRating).toFixed(1)
                    : "No Rating"}
                </div>
                <div className="dot">·</div>
                <div className="single_numReviews">
                  {`${single.numReviews} reviews`}
                </div>
                <div className="dot">·</div>
                <div className="single_address">
                  <p>
                    {single.city}, {single.state}, {single.country}
                  </p>
                </div>
              </div>

              <div className="spot_img">
                <div className="spot_previewImg">
                  <img src={single.SpotImages[0].url} alt={single.name}
                   onError={e => { e.currentTarget.src = "/default.jpeg"; }}
                   />
                </div>
                <div className="spot_other4_img">
                  {single.SpotImages.slice(1, 5).map((el) => (
                    <img
                      key={el.id}
                      className="single_img"
                      src={el.url}
                      alt={single.name}
                      onError={e => { e.currentTarget.src = "/default.jpeg"; }}

                    />
                  ))}
                </div>
              </div>

              <div className="single_host_description">
                <div className="list_content_container">
                  <div className="host_content">
                    <p className="single_hostInfo">{`Entire vacation home hosted by ${single.Owner.firstName}`}</p>
                    <p className="single_description">{single.description}</p>
                  </div>

                  <div className="show_card">
                    <div className="single_spot_price">
                      <p>{`$${single.price} /night`}</p>
                    </div>
                    <div className="card_star">
                      <i id="single_star" className="fa-solid fa-star" />
                      {single.avgStarRating
                        ? parseFloat(single.avgStarRating).toFixed(1)
                        : "No Rating"}

                      <div className="single_numRev">{`${single.numReviews} reviews`}</div>
                    </div>
                  </div>
                </div>

                <div className="review_spotId">
                  <div className="card_star_bottom">
                    <i id="single_star_bottom" className="fa-solid fa-star" />
                    {single.avgStarRating
                      ? parseFloat(single.avgStarRating).toFixed(1)
                      : "No Rating"}

                    <div className="single_numRev_bottom">{`${single.numReviews} reviews`}</div>
                                  </div>

                  <div className="create_review_spotList">
                    {currentUser && currentUser.id && single.Owner.id!== currentUser.id && (
                    <CreateReviewsModal spotId={spotId} />
                    )}
                    </div>
                  <GetSpotReviews spotId={spotId} />
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
  {
    /* <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500"
                id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies-online.net">fmovies</a>
                <a href="https://www.embedgooglemap.net">copy google map</a></div></div> */
  }
};
export default GetSingleSpot;
