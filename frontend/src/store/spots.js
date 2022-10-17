import { csrfFetch } from './csrf';


// todo:define types
const LOAD = 'spots/LOAD';
const LOAD_ONE ='spots/LOAD_ONE'
const CREATE = 'spots/CREATE';
const UPDATE = 'spots/UPDATE'
const REMOVE = 'spots/REMOVE'


// todo:define action creators

const actionLoad = (all) => ({
    type: LOAD,
    all

});

const actionLoadSingle = (one) => ({
    type: LOAD,
    one

  });

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
        //console.log("list-thunk",list)
        dispatch(actionLoad(list));
      }

}

export const getSpotsDetail = (spotId) => async dispatch => {
    const res = await csrfFetch(`/api/spots/${spotId}`)

    if (res.ok) {
        const singleSpot = await res.json();
        console.log('singleSpot',singleSpot)
        dispatch(actionLoadSingle(singleSpot))
    }
}



// todo: reduce stuff




const spotReducer = (state = {}, action) => {
    const newState = {};
    switch (action.type) {
        case LOAD:
            action.all.Spots.forEach(spot => {
                newState[spot.id] = spot;
            });
            //console.log('newstate:', newState)
            return newState;

        // case LOAD_ONE:
        //         spotData,
        // SpotImages: [imagesData],
        // Owner: {
        //   ownerData,
        // },

        default:
            return state;

    }
}




export default spotReducer;
