import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import BookingForm from './BookingForm';


function BookingFormModal({listing}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Make a reservation</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <BookingForm setShowModal = {setShowModal} listing = {listing}/>
        </Modal>
      )}
    </>
  );
}

export default BookingFormModal;
