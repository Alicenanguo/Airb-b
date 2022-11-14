import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';

import { getAllSpotReviews } from '../../../store/reviews';

const GetSpotReviews = ({spotId}) => {
    const dispatch = useDispatch();

    console.log("spotId in review",spotId)
    const [isLoaded, setIsLoaded] = useState(false);


    const sessionUser = useSelector(state => state.session.user);
    console.log("user_getspotReviews", sessionUser)

    const spot = useSelector(state => state.spots.singleSpot);
    console.log('spot_getspotReviews', spot)

    const reviews = useSelector(state => state.reviews.spotReviews)
    console.log('reviews_getspotReviews', reviews)
    //const reviewsArr = Object.values(reviews)

    useEffect(() => {
        //console.log("USE EFFECT RUNNING")
        dispatch(getAllSpotReviews(spotId))
        .then(() => setIsLoaded(true))
    }, [dispatch])

    let reviewsArr;
    if (isLoaded) {
        reviewsArr = Object.values(reviews)
    }
    // if (reviewsArr.length === 0) return null;

    return (
        isLoaded && (
        <>
                <div className='reviews_by_spotId'>

                {reviews && reviewsArr.map(el => (
                    <div key={el.id} className='review_el'>

                        <p className='review_by_name'>{el.User?.firstName}</p>
                        <p className='review_content'>{el?.review}</p>
                        <div className='review_create_time'>
                            {el?.createdAt.slice(0,10)}

                        </div>
                    </div>
                ))
                }



                </div>
            </>
        )

    )


}


export default GetSpotReviews;
