import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import { updateSpot } from '../../../store/spots.js';
import UpdateSpotModal from '../updateSpotModal'

import DeleteSpot from '../deleteSpot/deleteSpot.js';



import { getSpotsDetail } from '../../../store/spots.js'

const GetSingleSpot = () => {
    const dispatch = useDispatch();

    const { spotId } = useParams();
    console.log("spotId",spotId)
    const single = useSelector(state => state.spots.singleSpot)

    const currentUser = useSelector((state) => state.session.user)

    useEffect(() => {
        dispatch(getSpotsDetail(spotId));
    }, [dispatch, spotId])

    if (!single) return null;


    return (

        <div className='single_spots'>
            {single.id && (
                <>
                    <div className='single_name'>
                        {single.name}
                    </div>

                    <div className='single_avgRating_star'>
                        <i className='fa-solid fa-star' />
                        {single.avgStarRating}
                    </div>

                    <div className='single_address'>
                        <p>{single.city},{single.state},{single.country}</p>

                    </div>

                    <div className='single_numReviews' >
                        {`${single.numReviews} reviews`}
                    </div>

                    <div>
                        {single.SpotImages.map(el => (
                            <img key={el.id} className='single_img'
                                src={el.url} alt={single.name} />
                        ))}

                    </div>

                    {currentUser && currentUser.id === single.ownerId &&

                        <div className="edit_delete_button">
                            <button>
                                <NavLink id="edit_button" to={`/spots/${spotId}/edit`}>
                                   <UpdateSpotModal />
                                </NavLink>
                            </button>
                            <DeleteSpot />
                        </div>
                    }


                </>
            )
}
        </div>
    )
            {/* <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500"
                id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies-online.net">fmovies</a>
                <a href="https://www.embedgooglemap.net">copy google map</a></div></div> */}



}
    export default GetSingleSpot;
