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
export const getSPOTBookings = () => async dispatch => {
    const response = await csrfFetch('/api/bookings');

    if (response.ok) {
        const bookings = await response.json();
        dispatch(getBookingsAction(bookings));
        return bookings;
    }
};

export const createBooking = (booking) => async dispatch => {
    const response = await csrfFetch(`/api/bookings`, {
        method: "POST",
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
    }
}



// todo: reduce stuff
const initialState = {};

export default function bookingReducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case GET_BOOKINGS:
            newState = {};
            action.bookings.forEach(booking => newState[booking.id] = booking);
            return newState;

        case CREATE_BOOKING:
            newState = {...state}
            newState[action.booking.id] = action.booking;
            return newState

        case EDIT_BOOKINGS:
            newState = {...state}
            newState[action.booking.id] = action.booking;
            return newState;

        case DELETE_BOOKINGS:
            newState = {...state}
            delete newState[action.bookingId];
            return newState;

        default:
            return state;
    }
}
