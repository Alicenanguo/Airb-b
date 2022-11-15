import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import { createSpot } from '../../../store/spots'
import './createSpot.css'

const CreateSpot = ({ setShowModal }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector(state => state.session.user)
    console.log('user_create', user)
    const spot = useSelector(state => state.spots.singleSpot)

    console.log('spot_create', spot)

    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);



    useEffect(() => {
        const errors = [];
        if (!address) errors.push("please input a vaild address")
        if (!city) errors.push("please input a vaild city")
        if (!state) errors.push("please input a vaild state")
        if (!country) errors.push("please input a vaild country")
        if (!name) errors.push("Please input a valid name");
        if (!description) errors.push('Please input a valid description');
        if (!price) errors.push("Please input a valid price");
         if (!previewImage) errors.push("need a image fot the spot")
        setValidationErrors(errors)
    }, [address, city, state, country, name, description, price, previewImage])

    const onSubmit = async(e)=> {
        e.preventDefault();

        setHasSubmitted(true);

        const spotInfo = {
            address, city, state, country, lat, lng, name, description, price


        }
        const imgInfo = {
            url: previewImage,
            preview: true

        }
        //console.log(submitInfo)
        if (validationErrors.length === 0) {
            const result = await dispatch(createSpot(spotInfo, imgInfo));
            //console.log('createSpot_result', result)


            if (result) {
                setShowModal(false)
                history.push(`/spots/${result.id}`)
            }

        }

        // setAddress('');
        // setCity('');
        // setState('');
        // setCountry('');
        // setLat('');
        // setLng('');
        // setName('');
        // setDescription('');
        // setPrice('');
        // setPreviewImage('')

    }

    return (
        <>
        <form
            className="createSpot_form"
            onSubmit={onSubmit}
            >

             <h2 className='host'>Become a Host</h2>

                {hasSubmitted && validationErrors.length > 0 && (
        <div className='err-div'>
          <ul className='error_info'>
          {validationErrors.map((error, idx) => <li className='error' key={idx}>{error}</li>)}
          </ul>
        </div>
        )}

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
            <label>
            Imgae Url
                <input
                    id="previewImage"
                    type='url'
                    name='previewImage'
                    onChange={e => setPreviewImage(e.target.value)}
                    value={previewImage}
                  />
            </label>
            <button
                type="submit"
                id="submit_button"
        // disabled={validationErrors.length >0}
      >
        Submit
            </button>



        </form>
</>
    )
}
export default CreateSpot;
