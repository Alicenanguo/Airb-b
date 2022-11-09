import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../../context/Modal';
import UpdateSpot from './updateSpot';

function UpdateSpotModal() {
  const [showModal, setShowModal] = useState(false);

  const seesionUser = useSelector(state => state.session.user)
  if (!seesionUser)   return null


  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit Listing</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdateSpot />
        </Modal>
      )}
    </>
  );
}

export default UpdateSpotModal;
