import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar } from 'react-date-range';
import { getSpotBookings } from '../../../store/bookings';
import bookingDays from './Booked';
import './Calendar.css'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';


function BookingCalendar({ spotId }) {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);

    const booking = useSelector(state => state.booking?.userBookings)

    console.log('bookings-in-calendar', booking)

    useEffect(() => {
        dispatch(getSpotBookings(spotId))
        .then(() => setIsLoaded(true))
    }, [dispatch, spotId])

    let bookingArr;
    if (isLoaded) bookingArr = Object.values(booking)
    console.log('bookingArr-in-calendar',bookingArr)

    const nextMonth = new Date();
    nextMonth.setDate(1);
    nextMonth.setMonth(nextMonth.getMonth() + 1)
    console.log('nextMonth', nextMonth)





    let booked = []
    for (let i = 0; i < bookingArr?.length; i++) {
        if (bookingArr[i].spotId == spotId) {
            booked =booked.concat(bookingDays(bookingArr[i].startDate,bookingArr[i].endDate))
        }
    }

    console.log('booked',booked)

    return (
        <div className='calendar-container'>
            <div className='spot-calender'>
            <Calendar className="calender-this-month"
                        minDate={new Date()}
                        disabledDates={booked}

                    />
            </div>

            <div className="spot-calendar">
                    <Calendar className="calender-next-month"
                        minDate={new Date()}
                        shownDate={nextMonth}
                        disabledDates={booked}

                    />
                </div>

        </div>
    )


}
export default BookingCalendar;
