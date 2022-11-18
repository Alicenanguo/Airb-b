import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams, useHistory } from "react-router-dom";
import { getSpotsDetail, updateSpot, getAllSpots } from "../../../store/spots";
import "./updateSpot.css";

const UpdateSpot = ({ spot, spotId, setShowModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.session.user);
  // console.log("user_update", user);

  //  const spot = useSelector((state) => state.spots.singleSpot);
  // console.log("spot_update", spot);

  const [address, setAddress] = useState(spot.address);
  const [city, setCity] = useState(spot.city);
  const [state, setState] = useState(spot.state);
  const [country, setCountry] = useState(spot.country);
  const [lat, setLat] = useState(spot.lat);
  const [lng, setLng] = useState(spot.lng);
  const [name, setName] = useState(spot.name);
  const [description, setDescription] = useState(spot.description);
  const [price, setPrice] = useState(spot.price);

  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmit, setHasSubmit] = useState(false);

  useEffect(() => {
    const errors = [];
    if (!address) errors.push("please input a vaild address");
    if (!city) errors.push("please input a vaild city");
    if (!state) errors.push("please input a vaild state");
    if (!country) errors.push("please input a vaild country");
    if (!name) errors.push("Please input a valid name");
    if (lat < -90 || lat > 90) errors.push("LAT ERROR");
    if (lng < -180 || lng > 180) errors.push("LNG ERROR");
    if (!description) errors.push("Please input a valid description");
    if (!price) errors.push("Please input a valid price");

    setValidationErrors(errors);
  }, [address, city, state, country, name, description, price, lat, lng]);

  // useEffect(() => {
  //   dispatch(getSpotsDetail(spotId));
  // }, [dispatch]);

  const onSubmit = async (e) => {
    e.preventDefault();

    setHasSubmit(true);

    const spotInfo = {
      ...spot,
      address,
      city,
      state,
      country,
      lat,
      lng,
      name,
      description,
      price,
    };
    // console.log("spotInfo", spotInfo);
    // console.log('validation',validationErrors,validationErrors.length)

    const result = await dispatch(updateSpot(spotInfo));
    //   .catch(async (res) => {
    //     const data = await res.json();
    //     console.log("data---------errors",data.errors)
    //     if (data && data.errors) setValidationErrors(data.errors);
    // })
    console.log("update_result", result);
    console.log("--------------");
    //await dispatch(getAllSpots())
    if (result) setShowModal(false);
    history.push(`/spots/${result.id}`);
  };

  const cancelSubmit = async (e) => {
    e.preventDefault();
    setShowModal(false);
    history.push(`/spots/current`);
  };
  console.log("update_validationerror", validationErrors);

  return (
    <form className="updateSpot_form" onSubmit={onSubmit}>
      <div className="update_your_hosting">
        <h2>Update Hosting</h2>
      </div>
      {hasSubmit && (
        <ul className="error_container">
          {validationErrors.map((erros) => (
            <li className="error" key={erros}>
              {erros}
            </li>
          ))}
        </ul>
      )}
      <div className="update_hosting_list_container">
        <div className="update_hosting_list">
          <label>
            <div className="update_hosting_title">Name</div>
            <div className="update_hosting_input">
              <input
                id="name"
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
          </label>
        </div>
        <div className="update_hosting_list">
          <label>
            <div className="update_hosting_title">Address</div>
            <input
              id="address"
              type="text"
              name="address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
          </label>
        </div>
        <div className="update_hosting_list">
          <label>
            <div className="update_hosting_title">City</div>
            <input
              id="city"
              type="text"
              name="city"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </label>
        </div>
        <div className="update_hosting_list">
          <label>
            <div className="update_hosting_title">State</div>
            <input
              id="state"
              type="text"
              name="state"
              onChange={(e) => setState(e.target.value)}
              value={state}
            />
          </label>
        </div>
        <div className="update_hosting_list">
          <label>
            <div className="update_hosting_title">Country</div>
            <input
              id="country"
              type="text"
              name="country"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
            />
          </label>
        </div>
        <div className="update_hosting_list">
          <label>
            <div className="update_hosting_title">Lat</div>
            <input
              id="lat"
              type="number"
              name="lat"
              onChange={(e) => setLat(e.target.value)}
              value={lat}
            />
          </label>
        </div>
        <div className="update_hosting_list">
          <label>
            <div className="update_hosting_title">Lng</div>
            <input
              id="lng"
              type="number"
              name="lng"
              onChange={(e) => setLng(e.target.value)}
              value={lng}
            />
          </label>
        </div>
        <div className="update_hosting_list">
          <label>
            <div className="update_hosting_title">Description</div>
            <textarea
              id="description"
              type="text"
              name="escription"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </label>
        </div>
        <div className="update_hosting_list">
          <label>
            <div className="update_hosting_title">Price</div>
            <input
              id="price"
              type="number"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </label>
        </div>
      </div>
      <div type="submit" id="update_hosting_submit_button">
        <button type="submit" className="update_hosting_update_button">
          {/* <id='cancel_button' to={`/spots/${spotId}`}> */}
          Update
        </button>
        <button className="update_hosting_cancel_button" onClick={cancelSubmit}>
          {/* <NavLink id='cancel_button' to={`/spots/${spotId}`}> */}
          Cancel
          {/* </NavLink> */}
        </button>
      </div>
    </form>
  );
};

export default UpdateSpot;
