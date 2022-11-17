import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../../context/Modal';
import UpdateSpot from './updateSpot';
import './updateSpot.css'

function UpdateSpotModal({spot,spotId}) {
  const [showModal, setShowModal] = useState(false);

  const seesionUser = useSelector(state => state.session.user)
  if (!seesionUser)   return null


  return (
    <>
      <button className='listing_edit_button' onClick={() => setShowModal(true)}>Edit Listing</button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdateSpot setShowModal={setShowModal} spot={spot} spotId={spotId} />
        </Modal>
      )}
    </>
  );
}

export default UpdateSpotModal;
