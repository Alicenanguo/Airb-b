import { csrfFetch } from "./csrf";

// todo:define types
const GET_ALL = "reviews/GETSPOTREVIEW";
const CREATE = "reviews/CREATE";
const EDIT = "reviews/EDIT_REVIEW";
const DELETE = "reviews/DELETE";
const GET_BYUSER = "reviews/GETUSERREVIEWS";

// todo:define action creators
const actionGetSpotreviws = (allSpotReviews) => ({
  type: GET_ALL,

  allSpotReviews,
});

const actionCreate = (newReview) => ({
  type: CREATE,
  newReview,
});

const actionEdit = (review) => ({
  type: EDIT,
  review,
});

const actionDelete = (reviweId) => ({
  type: DELETE,
  reviweId,
});

const actionGetUserReview = (userReviewInfo) => ({
  type: GET_BYUSER,
  userReviewInfo,
});

// todo:thunks section
export const getAllSpotReviews = (spotId) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${spotId}/reviews`);
  console.log("++++++thunk_review_get", spotId);

  if (res.ok) {
    const allReviews = await res.json();
    console.log("getall_review_thunk", allReviews);
    dispatch(actionGetSpotreviws(allReviews));
    console.log("review_________thunk", allReviews);
    return allReviews;
  }
};

export const getUserReview = () => async (dispatch) => {
  const res = await csrfFetch("/api/reviews/current");
  if (res.ok) {
    const review = await res.json();
    dispatch(actionGetUserReview(review));
    return review;
  }
};

export const createReviews = (reviewInfo, spotId) => async (dispatch) => {
  const resReview = await csrfFetch(`/api/spots/${spotId}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reviewInfo),
  });
  if (resReview.ok) {
    const newReview = await resReview.json();
    console.log("newReview_createReview________thunk", newReview);
    dispatch(actionCreate(newReview));
    return newReview;
  }
};

export const editReviewTHUNK = (review, reviewId) => async (dispatch) => {
  console.log(review, reviewId, ")))))))");
  const res = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(review),
  });

  if (res.ok) {
    const update = await res.json();
    console.log("update^^^^^^^^", update);
    dispatch(actionEdit(update));
    return update;
  }
};

export const deleteReview = (reviewId) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(actionDelete(reviewId));
    return res;
  }
};

// todo: reduce stuff
const initialState = { spotReviews: {}, userReviews: {} };

const reviewsReducer = (state = initialState, action) => {
  let newState = {};

  switch (action.type) {
    case GET_ALL:
      newState = { ...state };
      let spotReviews = {};
      // console.log('action_action---_review_spot',action.allSpotReviews)
      // console.log('action_all_review_spot',action.allSpotReviws.Reviews)
      // console.log('newState_getallReviews:', newState)
      action.allSpotReviews.Reviews.forEach(
        (review) => (spotReviews[review.id] = review)
      );
      newState.spotReviews = spotReviews;
      return newState;

    case GET_BYUSER:
      newState = { ...state };
      let userReviews = {};
      // console.log('action_all_review_user', action.userReviewInfo.Reviews)
      // console.log('newState_getUserReviews:', newState)

      action.userReviewInfo.Reviews.forEach(
        (review) => (userReviews[review.id] = review)
      );
      newState.userReviews = userReviews;
      return newState;

    case CREATE:
      // let newCreate = {
      //     ...state,
      //     // spotReviews: {
      //     //     ...state.spotReviews,
      //     //     [action.newReview.id]:action.spotReviews
      //     // },
      //     userReviews: {
      //         ...state.userReviews,
      //         [action.newReview.id]:action.userReviews
      //     }
      // }
      newState = { ...state };
      newState.userReviews[action.newReview.id] = action.newReview;
      console.log("newState_review_create:", newState);
      return newState;

    case EDIT:
      newState = { ...state };
      newState.userReviews[action.newReview?.id] = action.newReview;
      console.log("newState_review_edit:", newState);
      return newState;

    case DELETE:
      const deleted = {
        ...state,
        spotReviews: {},
        userReviews: { ...state.userReviews },
      };
      delete deleted.userReviews[action.reviewId];
      console.log("review_delete_reducer", deleted);

      return deleted;

    default:
      return state;
  }
};

export default reviewsReducer;
