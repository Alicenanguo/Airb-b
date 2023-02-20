import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import UpdateSpotModal from "../updateSpotModal";

import DeleteSpot from "../deleteSpot/deleteSpot.js";

import { getAllSpots, getCurrentSpot } from "../../../store/spots.js";
import UserReviews from '../../reviews/userReviews'
import './getCurrentSpot.css'

const GetCurrentSpot = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isLoaded, setIsLoaded] = useState(false)
  const { spotId } = useParams();


  const currentUser = useSelector((state) => state.session.user);
  console.log("currentUser", currentUser);

  const currentSpot = useSelector((state) => state.spots.allSpots);
  console.log("spots_getCurrent", currentSpot);

  // const currentSpotArr = Object.values(currentSpot);
  // console.log("currentSpotArr", currentSpotArr);

  if (!currentUser) {
    history.push("/");
  }

  useEffect(() => {
    if (currentUser) {
      dispatch(getCurrentSpot())
              .then(() => {
          setIsLoaded(true)
        })
    }
  }, [dispatch]);

  let currentSpotArr;

  if (isLoaded) {
    currentSpotArr = Object.values(currentSpot)

    if (currentSpotArr.length === 0) {
      return "Sorry, you do not have any hosting.";
    }
  }

  return (
    <div className="manage_listing_container">
      {isLoaded && (
        <>
          {/* {
        currentSpotArr.length === 0 && (
          <div>
            Sorry, you do not have any hosting
        </div>
      )} */}
          < div className="currentUser_spot">
            <div className="all_your_hosting">All your hosting</div>
            {currentSpotArr?.length > 0 &&
              currentSpotArr.map((spot) => (
                <>
                  <div className="currentSpot_info" key={spot.id}>


                        <div>
                          <img
                        className="listing_spot_img"
                        src={spot.previewImage}
                        alt={spot.name}
                        onError={e => { e.currentTarget.src = "/default.jpeg"; }}

                      />
                        </div>

                    <div className="listing_right">

                  <div className="listing_spot_address">
                    <NavLink className='navlink' to={`/spots/${spot.id}`}>
                      <div className="listing_spot_name">{spot.name}</div>
                    </NavLink>
                    <p className="listing_spot_address_name" id='listing-spot-address'>{spot.address}</p>
                    <p className="listing_spot_city">
                          { spot.city }, { spot.state }, { spot.country }
                    </p>
                  <div className="listing_spot_price">{`${spot.price} /night`}</div>
                  </div>


                  <div className="edit_delete_button">
                    <div id="listing_edit_button" to={`/spots/${spotId}/edit`}>
                      <UpdateSpotModal spot={spot} spotId={spot.id} />
                    </div>
                    <div className="listing_delete_button">
                      <DeleteSpot spotId={spot.id} />
                      </div>

                  </div>
                    </div>
                    </div>


                </>
              ))}
          </div>

        </>
      )}
      </div>
  )
};
export default GetCurrentSpot;
