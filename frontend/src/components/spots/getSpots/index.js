import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';

import { getAllSpots } from '../../../store/spots'


const GetSpots = () => {
    const dispatch = useDispatch();


    const spotsArr  = Object.values(useSelector(state => state.spots.allSpots))
    console.log("spots-getall",spotsArr)
   // const spotsArr = Object.values(spots)
   // console.log("spotArr:",spotsArr)



  useEffect(() => {
    dispatch(getAllSpots(spotsArr));
  }, [dispatch]);

  if (spotsArr.length <= 0) {
    return null;
  }
    return (
        <div className="all_spots">
            {spotsArr.map(spot => (
                <div className='spot_id' key={spot.id}>
                    <NavLink  to={`/spots/${spot.id}`}>
                        <img  className='spot_img' src={spot.previewImage} alt={spot.name} />
                    </NavLink>
                    <div className='spot_address'>
                        <p>{spot.city},{spot.state},{spot.country}</p>
                        <p>{spot.name}</p>
                    </div>
                    <div className='spot_price'>
                        <p>{`$${spot.price} /night`}</p>
                    </div>
                    <div>
                        <i className='fa-solid fa-star' />
                        {`${spot.avgRating}`}
                        </div>
                    </div>
            ))}

        </div>
            )

  }

export default GetSpots;
