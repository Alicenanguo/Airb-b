import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';

import { getAllSpotReviews } from '../../../store/reviews';
import './spotReviews.css'

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
    }, [dispatch,spotId])

    let reviewsArr;
    console.log('reviewsArr____getspotReviews',reviews)
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

                        <div>
                            <p className='review_by_name'>{el.User?.firstName}</p>
                        </div>
                        <div className='review_create_time'>
                            {el?.createdAt.slice(0,10)}
                        </div>
                        <div>
                            <p className='review_content'>{el?.review}</p>
                            </div>
                        {/* <div>{el.reviewImages && el.reviewImages.url}</div> */}
                    </div>
                ))
                }



                </div>
            </>
        )

    )


}


export default GetSpotReviews;
