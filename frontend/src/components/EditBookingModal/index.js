import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditBookingForm from './EditBookingForm';

function EditBookingFormModal({booking}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit booking</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditBookingForm showModal={showModal} setShowModal = {setShowModal} booking = {booking}/>
        </Modal>
      )}
    </>
  );
}

export default EditBookingFormModal;
