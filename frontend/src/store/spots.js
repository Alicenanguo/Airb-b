import { csrfFetch } from './csrf';


// todo:define types
const LOAD = 'spots/LOAD';
const LOAD_ONE = 'spots/LOAD_ONE'
const LOAD_CURRENT = "spots/LOAD_CURRENT"
const CREATE = 'spots/CREATE';
const UPDATE = 'spots/UPDATE'
const REMOVE = 'spots/REMOVE'


// todo:define action creators

const actionLoad = (all) => ({
    type: LOAD,
    all

});

const actionLoadSingle = (one) => ({
    type: LOAD_ONE,
    one

});

const actionCurrentSpot = (userSpot) => ({
    type: LOAD_CURRENT,
    userSpot

})

const actioCreate = () => ({
    type: CREATE,


});
 const actionUpdate = () => ({
    type: UPDATE,
});

const actionRemove = (id) => ({
    type: REMOVE,
    id,
  });


// todo:thunks section
export const getAllSpots = () => async dispatch => {
    const res = await csrfFetch('api/spots');

    if (res.ok) {
        const list = await res.json();
       // console.log("list-thunk",list)
        dispatch(actionLoad(list));
      }

}

export const getSpotsDetail = (spotId) => async dispatch => {
   // console.log("spotId-thunk:",spotId)
    const res = await csrfFetch(`/api/spots/${spotId}`)

    if (res.ok) {
        const singleSpot = await res.json();
        //console.log('singleSpot',singleSpot)
        dispatch(actionLoadSingle(singleSpot))
    }
}

export const getCurrentSpot = () => async dispatch => {
    const res = await csrfFetch('/api/spots/current');

    if (res.ok) {
        const currentSpot = await res.json();
        console.log('current_thunk',currentSpot)
        dispatch(actionCurrentSpot(currentSpot))
    }
}


// todo: reduce stuff
const initialState = {allSpots:{},singleSpot:{}}
const spotReducer = (state = initialState, action) => {
   let newState ={};
    switch (action.type) {
        case LOAD:
            newState= {...state}
            let allSpots = {};
            action.all.Spots.forEach(spot => (
                allSpots[spot.id] = spot
            ));
            newState.allSpots = allSpots
            //  console.log('newstate:', newState)
            return newState;



        case LOAD_ONE:
            newState= {...state}
            const singleSpot = action.one
            newState.singleSpot = singleSpot
            return newState;

        case LOAD_CURRENT:

            action.userSpot.Spots.forEach(spot => (
                newState[spot.id] = spot
            ));
            return newState;






        default:
            return state;

    }
}




export default spotReducer;
