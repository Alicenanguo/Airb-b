import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams,useHistory } from 'react-router-dom';


import { getUserReview } from '../../../store/reviews';
import { deleteReview } from '../../../store/reviews';

const UserReviews = () => {
    const dispatch = useDispatch();
    const history = useHistory();


    const sessionUser = useSelector(state => state.session.user);
    console.log("user_userReviews", sessionUser)

    const reviews = useSelector(state => state.reviews.userReviews)
    console.log('reviews_getspotReviews', reviews)
    const reviewsArr = Object.values(reviews)

    useEffect(() => {
    dispatch(getUserReview())
},[dispatch])

    if (reviewsArr.length === 0) {
       return ('Sorry, You Do Not Have Any Reviews.')

    }

    const handleDeleted =  async(reviewId) =>{

        const result = await dispatch(deleteReview(reviewId))
        console.log('resule_delte_reviews',result)
        if(result)
        // history.push('/reviews/current')
            dispatch(getUserReview())

    }

    return (
        <div className='user_reviews_Info'>
            <p className='user_review_name'>{`${sessionUser.firstName},This is your Reviws`}</p>

            <div className='user_single_review'>
                {reviews && (
                    reviewsArr.map(el=> (
                        <div className='user_review_el' key={el.id}>
                            <p className='user_review_name'>{el.Spot?.name}</p>
                            <p className='user_review_content'>{el?.review}</p>
                            <div>
                                <i className="fa-solid fa-star" />
                                {el?.stars}
                            </div>
                            <div className='review_create_time'>
                                {el?.createdAt.slice(0, 10)}
                                </div>
                            <img className='user_review_preImg' src={el.Spot?.previewImage} />

                            <div className='userReview_delete_button'>
                                <button onClick={() => handleDeleted(el.id)}>Delete Review</button>
                                {console.log("el_______", el)}

                            </div>




                        </div>

                    ))
                )}

            </div>
        </div>
    )



}

export default UserReviews;
