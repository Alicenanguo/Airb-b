import { csrfFetch } from "./csrf";

const CREATE_BOOKING = "bookings/CREATE_booking";
const GET_BOOKINGS = "bookings/GET_bookings";
const DELETE_BOOKINGS = "bookings/DELETE_booking";
const EDIT_BOOKINGS = "bookings/EDIT_booking";

//todo:action
const createBookingAction = booking => ({
    type: CREATE_BOOKING,
    booking
})

const getBookingsAction = (bookings) => ({
    type: GET_BOOKINGS,
    bookings
});

const deleteBookingAction = (bookingId) => ({
    type: DELETE_BOOKINGS,
    bookingId
});

const editBookingAction = (booking) => ({
    type: EDIT_BOOKINGS,
    booking
});

//todo:thunk

export const getBookings = () => async dispatch => {
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
