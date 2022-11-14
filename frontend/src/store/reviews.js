import { csrfFetch } from "./csrf";

// todo:define types
const GET_ALL = "reviews/GET";
const CREATE = "reviews/CREATE";
const DELETE = "reviews/DELETE";


// todo:define action creators
const actionGet = (all) => {
    type: GET_ALL,
    all
}

const actionCreate = (newReview) = {
    type: CREATE,
    newReview
}

const actionDelete = (reviwId) = {
    type: DELETE,
    reviwId
}



// todo:thunks section
export const getAllReviews = (spotId) => async (dispatch) => {
    const res = await csrfFetch(`api/spots/${spotId}/reviews`);

    if (res.ok) {
        const allReviews = await res.json();
        console.log('getall_review_thunk', allReviews)
        dispatch(actionGet(allReviews))
    }
}



// todo: reduce stuff
const initialState = { spotReviews: {}, userReviews: {} };

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL:
            let spotReviews= {};
            action.all.forEach((review) => (spotReviews[review.id] = review)
}




export default reviewsReducer;
