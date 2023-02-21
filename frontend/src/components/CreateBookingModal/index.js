import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import BookingForm from './BookingForm';
import './createBooking.css'


function BookingFormModal({spot}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className='create-booking'>
      <button className='booking-button' onClick={() => setShowModal(true)}>Reservation</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <BookingForm setShowModal = {setShowModal} spot = {spot}/>
        </Modal>
        )}
        </div>
    </>
  );
}

export default BookingFormModal;
