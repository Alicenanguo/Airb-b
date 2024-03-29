import { csrfFetch } from "./csrf";

// todo:define types
const LOAD = "spots/LOAD";
const LOAD_ONE = "spots/LOAD_ONE";
const LOAD_CURRENT = "spots/LOAD_CURRENT";
const CREATE = "spots/CREATE";
//const ADDIMG ='spot/ADD_IMG'
const UPDATE = "spots/UPDATE";
const DELETE = "spots/DELETE";
const SEARCH = 'Products/search'

// todo:define action creators

const actionLoad = (all) => ({
  type: LOAD,
  all,
});

const actionLoadSingle = (one) => ({
  type: LOAD_ONE,
  one,
});

const actionCurrentSpot = (userSpot) => ({
  type: LOAD_CURRENT,
  userSpot,
});

const actioCreate = (newSpot) => ({
  type: CREATE,
  newSpot,
});



const actionUpdate = (updateSpot) => ({
  type: UPDATE,
  updateSpot
});

const actionRemove = (spotId) => ({
  type: DELETE,
  spotId,
});

const actionSearch = (spots) => ({
  type: SEARCH,
  spots

})



// todo:thunks section
export const getAllSpots = () => async (dispatch) => {
  const res = await csrfFetch("api/spots");

  if (res.ok) {
    const list = await res.json();
   //console.log("list-thunk",list)
    dispatch(actionLoad(list));
  }
};

export const getSpotsDetail = (spotId) => async (dispatch) => {
  console.log("spotId-thunk:",spotId)
  const res = await csrfFetch(`/api/spots/${spotId}`);

  if (res.ok) {
    const singleSpot = await res.json();
    //console.log('singleSpot',singleSpot)
    dispatch(actionLoadSingle(singleSpot));
  }
};

export const getCurrentSpot = () => async (dispatch) => {
  const res = await csrfFetch("/api/spots/current");

  if (res.ok) {
    const currentSpot = await res.json();
     console.log('current_thunk',currentSpot)
    dispatch(actionCurrentSpot(currentSpot));
  }
};

export const createSpot = (spot,img) => async (dispatch) => {
  const res = await csrfFetch("/api/spots", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(spot),
  });
  if (res.ok) {
    const newSpot = await res.json();
    // dispatch(actioCreate(newSpot));
    // return newSpot;
    console.log("createSpot",createSpot)
    const resImg = await csrfFetch(`/api/spots/${newSpot.id}/images`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(img)

    })
    if (resImg.ok) {
        const newImg = await resImg.json()
     //   newSpot.previewImage = newImg.url
      dispatch(actioCreate(newSpot, newImg))
      console.log('newSpot',newSpot)
        return newSpot

    }
  }
};

export const updateSpot = (spot) => async dispatch => {
  const res = await csrfFetch(`/api/spots/${spot.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(spot)
  })
  if (res.ok) {
    const update = await res.json();
    console.log('update_in_thunk',update)
    dispatch(actionUpdate(update));
    return update;
  }
}

export const deleteSpot = (spotId) => async dispatch => {
  const res = await csrfFetch(`/api/spots/${spotId}`, {
    method: 'DELETE',
  })
  if (res.ok) {
    dispatch(actionRemove(spotId))
    return res
  }

}

export const searchThunk = (keyword) => async dispatch => {
  const res = await fetch(`/api/spots/search/${keyword}`)
  if (res.ok) {
    const data = await res.json()
    dispatch(actionSearch(data))
    return data
  }
}


// todo: reduce stuff
const initialState = { allSpots: {}, singleSpot: {}, searchSpots:{}};

const spotReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case LOAD:
     // newState = { };
      let allSpots = {};
      action.all.Spots.forEach((spot) => (allSpots[spot.id] = spot));
      newState.allSpots = allSpots;
        console.log('newState_getall:', newState)
      return newState;

    case LOAD_ONE:
      newState = { ...state };
      const singleSpot = action.one;
      newState.singleSpot = singleSpot;
      console.log('getone_state',newState)
      return newState;

    case LOAD_CURRENT:
      let current = {};
      action.userSpot.Spots.forEach((spot) => (current[spot.id] = spot));
      return { allSpots: current };

      case CREATE:
        let newCreate = {
          ...state,
          // allSpots: {
          //   ...state.allSpots,
            singleSpot: {
              ...state.singleSpot,
              [action.newSpot.id]: action.newSpot,
            },
            // }
        }
        console.log('newState_create:', newCreate)
        return newCreate;

    case UPDATE:
      // const updateState = { ...state };
      // updateState.singleSpot[action.updateSpot.id] = { ...action.updateSpot };
      // updateState.singleSpot = action.updateSpot
      // return updateState;
      console.log('action_sigspot', state.singleSpot)
      console.log('action_update',action.updateSpot)

      let updateState = {
        ...state,
        // allSpots: {
        //   ...state.allSpots,
        //   // [action.updateSpot.id]: action.updateSpot,
        //   [action.updateSpot.id]: { ...state.allSpots[action.updateSpot.id], ...action.updateSpot },

        //   singleSpot: {
        //     ...state.singleSpot, ...action.updateSpot
        //   }
        // },
        singleSpot:{ ...state.singleSpot, ...action.updateSpot}
      }
      // updateState.singleSpot = action.updateSpot

      console.log('newState_update:', updateState)

        return updateState;

      // newCreate1[action.updateSpot.id] = action.updateSpot;
      // console.log('newstate:', newCreate1)
      // return newCreate1;

      //   const newUpdate = { ...state }
      // newUpdate[action.updateSpot.id] = action.updateSpot
      // console.log('newUpdate',newUpdate)
      // return newUpdate

    case DELETE:
      const deleted = {
        ...state,
        allSpots: { ...state.allSpots },
        singleSpot:{}
      }
      delete deleted.allSpots[action.spotId]
      return deleted;

      case SEARCH:
        newState = { ...state, searchSpots: {} };
        console.log("action-in-search-reduce",action)
        action.spots?.spots?.forEach(spot => {
          newState.searchSpots[spot.id] = spot
        })
        console.log("newState_search_reducer:", newState);
        return newState;


        default:
          return state;
      }
};

export default spotReducer;
