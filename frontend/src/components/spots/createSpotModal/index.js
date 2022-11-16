import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../../context/Modal';
import CreateSpot from './createSpot';

function CreateSpotModal() {
  const [showModal, setShowModal] = useState(false);

  const seesionUser = useSelector(state => state.session.user)
  if (!seesionUser)   return null


  return (
    <>
      <button className='become_a_host' onClick={() => setShowModal(true)}>Become a Host</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateSpot setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default CreateSpotModal;
