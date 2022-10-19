import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import {updateSpot} from '../../../store/spots'

const UpdateSpot = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector(state => state.session.user)
    console.log('user_update', user)

    const spot = useSelector(state => state.spots.singleSpot)
    console.log('spot_update', spot)

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
        if (!address) errors.push("please input a vaild address")
        if (!city) errors.push("please input a vaild city")
        if (!state) errors.push("please input a vaild state")
        if (!country) errors.push("please input a vaild country")
        if (!name) errors.push("Please input a valid name");
        if (!description) errors.push('Please input a valid description');
        if (!price) errors.push("Please input a valid price");
     
        setValidationErrors(errors)
    }, [address, city, state, country, name, description, price])



}
export default UpdateSpot;
