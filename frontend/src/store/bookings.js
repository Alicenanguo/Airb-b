import { csrfFetch } from "./csrf";

const GET_SPOT_BOOKINGS = "bookings/GET__SPOT_bookings";
const GET_USER_BOOKINGS = 'bookings/GET_USER_bookings'
const CREATE_BOOKING = "bookings/CREATE_booking";
const EDIT_BOOKINGS = "bookings/EDIT_booking";
const DELETE_BOOKINGS = "bookings/DELETE_booking";

//todo:action
const getSpotBookingsAction = (bookings) => ({
    type: GET_SPOT_BOOKINGS,
    bookings
});

const getUserBookingsAction = (bookings) => ({
    type: GET_USER_BOOKINGS,
    bookings
});


const createBookingAction = (booking) => ({
    type: CREATE_BOOKING,
    booking
})


const editBookingAction = (booking) => ({
    type: EDIT_BOOKINGS,
    booking
});

const deleteBookingAction = (bookingId) => ({
    type: DELETE_BOOKINGS,
    bookingId
});

//todo:thunk
export const getSpotBookings = (spotId) => async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}/bookings`);

    if (response.ok) {
        const bookings = await response.json();
        dispatch(getSpotBookingsAction(bookings));
        return bookings;
    }
};

export const getUserBookings = () => async dispatch => {
    const response = await csrfFetch('/api/bookings/current');

    if (response.ok) {
        const bookings = await response.json();
        dispatch(getUserBookingsAction(bookings));
        return bookings;
    }
};

export const createBooking = (booking) => async dispatch => {
    const { spotId, startDate, endDate } = booking
    const response = await csrfFetch(`/api/spots/${spotId}/bookings`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(booking),
    })

    if (response.ok) {
        const newBooking = await response.json()
        await dispatch(createBookingAction(newBooking));
        return newBooking
    }
}

export const editBooking = (booking) => async dispatch => {
    const response = await csrfFetch(`/api/bookings/${booking.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(booking),
    });

    if(response.ok) {
        const updatedBooking = await response.json()
        await dispatch(editBookingAction(updatedBooking));
        return updatedBooking
    }
}

export const deleteBooking = (id) => async dispatch => {
    const response = await csrfFetch(`/api/bookings/${id}`, {
        method: "DELETE"
    });

    if(response.ok) {
        dispatch(deleteBookingAction(id));
        return response;
    }
}



// todo: reduce stuff
const initialState = {allBookings: {}, singleBooking: {}, userBookings: {}};

export default function bookingReducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case GET_SPOT_BOOKINGS:
            newState = { ...state };
            let allBookings = {};
            action.bookings?.Booking?.forEach(booking => (allBookings[booking.id] = booking));
            newState.allBookings = allBookings;
            return newState;

        case GET_USER_BOOKINGS:
            newState = { ...state };
            let userBookings = {};
            console.log('action-in-getUserBooking-reduce',action)
            action.bookings.Bookings.forEach(booking => (userBookings[booking.id] = booking ));
            newState.userBookings = userBookings;
            return newState;

        case CREATE_BOOKING:
            newState = {...state,allBookings: { ...state.allBookings }, singleBooking: {}}
            let newBooking = { ...action.booking };
            newState.allBookings[action.booking.id] = newBooking;
            newState.singleBooking = newBooking;
            return newState

        case EDIT_BOOKINGS:
            newState = {...state}
            newState.allBookings = { ...state.allBookings, [action.booking.id]: { ...state.allBookings[action.booking.id], ...action.booking } }
            newState.singleBooking = { ...state.singleBooking, ...action.booking }
            return newState;

        case DELETE_BOOKINGS:
            const deleted = {
                ...state,
                allBookings: { ...state.allBookings },
                singleBooking: { ...state.singleBooking },
                userBookings: { ...state.userBookings }
              }
            delete deleted.allBookings[action.id];
            delete deleted.userBookings[action.id];
            if (action.id == newState.singleBooking.id) {
                delete deleted.singleBooking
            }

            return deleted;

        default:
            return state;
    }
}
