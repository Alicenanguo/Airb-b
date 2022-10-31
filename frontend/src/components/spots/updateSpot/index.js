import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams, useHistory } from "react-router-dom";
import { getSpotsDetail, updateSpot } from "../../../store/spots";

const UpdateSpot = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { spotId } = useParams();

  const user = useSelector((state) => state.session.user);
  console.log("user_update", user);

  const spot = useSelector((state) => state.spots.singleSpot);
  console.log("spot_update", spot);

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
    if (!description) errors.push("Please input a valid description");
    if (!price) errors.push("Please input a valid price");

    setValidationErrors(errors);
  }, [address, city, state, country, name, description, price]);

  useEffect(() => {
    dispatch(getSpotsDetail(spotId));
  }, [dispatch]);

  const onSubmit = async (e) => {
    e.preventDefault();

    setHasSubmit(true);

    const spotInfo = {
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

    if (validationErrors.length === 0) {
      const result = await dispatch(updateSpot(spotInfo));
      if (result) history.push(`/spots/${result.id}`);
    }
  };

    return (
        <form
        className="updateSpot_form"
        onSubmit={onSubmit}
    >
        <h2>Update your hosting</h2>
        <ul className="errors">
    {validationErrors.map(erros => (
      <li key={erros}>{erros}</li>
    ))}
        </ul>
        <label>
            Name
            <input
                id="name"
                type='text'
                name='name'
                onChange={e => setName(e.target.value)}
                value={name}
              />
        </label>
        <label>
            Address
            <input
                id="address"
                type='text'
                name='address'
                onChange={e => setAddress(e.target.value)}
                value={address}
              />
        </label>
        <label>
        City
            <input
                id="city"
                type='text'
                name='city'
                onChange={e => setCity(e.target.value)}
                value={city}
              />
        </label>
        <label>
        State
            <input
                id="state"
                type='text'
                name='state'
                onChange={e => setState(e.target.value)}
                value={state}
              />
        </label>
        <label>
        Country
            <input
                id="country"
                type='text'
                name='country'
                onChange={e => setCountry(e.target.value)}
                value={country}
              />
        </label>
        <label>
        Lat
            <input
                id="lat"
                type='number'
                name='lat'
                onChange={e => setLat(e.target.value)}
                value={lat}
              />
        </label>
        <label>
        Lng
            <input
                id="lng"
                type='number'
                name='lng'
                onChange={e => setLng(e.target.value)}
                value={lng}
              />
        </label>
        <label>
        Description
        <textarea
                id="description"
                type='text'
                name='escription'
                onChange={e => setDescription(e.target.value)}
                value={description}
            />
        </label>
        <label>
        Price
            <input
                id="price"
                type='number'
                name='price'
                onChange={e => setPrice(e.target.value)}
                value={price}
              />
        </label>
        
        <div
            type="submit"
            id="submit_button"
            >
                <button>
                Update
                </button>
                <button>
                    <NavLink id='cancel_button' to={`/spots/${spotId}`}>
                        Cancel
                    </NavLink>
                </button>

</div>

    </form>

)
}




export default UpdateSpot;
