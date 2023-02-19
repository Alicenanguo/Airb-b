import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import BookingForm from './BookingForm';


function BookingFormModal({spot}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Make a reservation</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <BookingForm setShowModal = {setShowModal} spot = {spot}/>
        </Modal>
      )}
    </>
  );
}

export default BookingFormModal;
