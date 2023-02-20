import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams } from "react-router-dom";
import { updateSpot } from "../../../store/spots.js";
import { getSpotsDetail } from "../../../store/spots.js";
import CreateReviewsModal from "../../reviews/createReviewsModal/index.js";
import BookingFormModal from "../../CreateBookingModal/index.js";
import "./getSpotDetails.css";

import GetSpotReviews from "../../reviews/spotReviews";
import BookingCalendar from "./Calendar.js";
import { getSpotBookings, getUserBookings } from "../../../store/bookings.js";

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
    dispatch(getSpotsDetail(spotId))
      dispatch(getUserBookings())
    .then(() => setIsLoaded(true));
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
                    <p className="single_hostInfo">{`Entire home hosted by ${single.Owner.firstName}`}
                    <p className="text-bedroom-number">6 guests · 3 bedrooms · 2 baths</p>
                    </p>

                    <div className="icon-parts-container">
                    <div className="icon-parts">
                      <img
                        className="spot-detail-icon"
                        src='https://seeklogo.com/images/A/airbnb-superhost-logo-1E4451535F-seeklogo.com.png'
                        alt="superhost"
                        onError={e => { e.currentTarget.src = "/default.jpeg"; }}
                      />
                      <div className="icon-parts-text">
                        <div className="icon-parts-text-top">{`${single.Owner.firstName} is a Superhost`} </div>
                        <div className="icon-parts-text-bottom">Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</div>
                        </div>
                    </div>

                    <div className="icon-parts">
                      <img
                        className="spot-detail-icon"
                        src='https://cdn-icons-png.flaticon.com/512/3170/3170748.png'
                        alt="Great checkin"
                        onError={e => { e.currentTarget.src = "/default.jpeg"; }}
                      />
                      <div className="icon-parts-text">
                      <div className="icon-parts-text-top">Great check-in experience</div>
                        <div className="icon-parts-text-bottom">90% of recent guests gave the check-in process a 5-star rating.</div>
                        </div>
                    </div>

                    <div className="icon-parts">
                      <img
                        className="spot-detail-icon"
                        src='https://static.vecteezy.com/system/resources/previews/010/160/301/original/calendar-icon-sign-symbol-design-free-png.png'
                        alt="free cancel"
                        onError={e => { e.currentTarget.src = "/default.jpeg"; }}
                      />
                      <div className="icon-parts-text">
                        <div className="icon-parts-text-top">Free cancellation</div>
                        <div className="icon-parts-text-bottom">Any time before you check in.</div>
                        </div>
                      </div>
                      </div>

                    <div className="aircover-part">
                    <img
                        className="aircover-icon"
                        src='data:image/png;base64,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'
                        alt="aircover"
                        onError={e => { e.currentTarget.src = "/default.jpeg"; }}
                      />
                      <div className="text-aircover">
                      Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.
                      </div>

                    </div>



                    <div className="single_description">{single.description}</div>

                    <div className="offer-part">
                      <div className="text-offer">What this place offers</div>

                      <div className="offer_part-second"></div>
                      <div className="offer-details">
                      <img
                        className="aircover-icon"
                        src='https://cdn0.iconfinder.com/data/icons/party-related-2-filled/64/birthday_party-29-512.png'
                        alt="kitchen"
                        onError={e => { e.currentTarget.src = "/default.jpeg"; }}
                        />
                        <div>Kitchen</div>
                      </div>

                      <div className="offer-details">
                      <img
                        className="aircover-icon"
                        src='data:image/png;base64,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'
                        alt="pets"
                        onError={e => { e.currentTarget.src = "/default.jpeg"; }}
                        />
                        <div>Pets allowed</div>
                      </div>

                      <div className="offer-details">
                      <img
                        className="aircover-icon"
                        src='https://cdn-icons-png.flaticon.com/512/1500/1500101.png'
                        alt="backyard"
                        onError={e => { e.currentTarget.src = "/default.jpeg"; }}
                        />
                        <div>Backyard</div>
                      </div>

                      <div className="offer-details">
                      <img
                        className="aircover-icon"
                        src='https://cdn-icons-png.flaticon.com/512/1788/1788637.png'
                        alt="parking"
                        onError={e => { e.currentTarget.src = "/default.jpeg"; }}
                        />
                        <div>Free Parking</div>
                      </div>

                      <div className="offer-details">
                      <img
                        className="aircover-icon"
                        src='https://freesvg.org/img/Aircon.png'
                        alt="air condition"
                        onError={e => { e.currentTarget.src = "/default.jpeg"; }}
                        />
                        <div>Central air conditioning</div>
                      </div>

                      <div className="offer-details">
                      <img
                        className="aircover-icon"
                        src='https://cdn.shopify.com/s/files/1/0279/0234/5304/products/qetlecsuv7k7dmpjtdju.jpg?v=1636151664&width=1946'
                        alt="fireplace"
                        onError={e => { e.currentTarget.src = "/default.jpeg"; }}
                        />
                        <div>Indoor fireplace</div>
                      </div>

                    </div>

                    <div className="calendar-part">
                      <div>Calendar</div>
                      <BookingCalendar spotId={spotId}/>
                    </div>

                  </div>



                  <div className="show_card">
                    <div className="show-card-top-part">
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
                    <div className="">
                    {currentUser && (<BookingFormModal spot = {single}/>)}
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
