import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../../context/Modal';
import CreateReviews from './createReviews';
import LoginForm from '../../LoginFormModal/LoginForm';

function CreateReviewsModal({spotId}) {
    const [showModal, setShowModal] = useState(false);


  const sessionUser = useSelector(state => state.session.user)
  if (!sessionUser)   return null


  return (
    <>
      <button onClick={() => setShowModal(true)}>Add Your Reviews</button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
                  {sessionUser && <CreateReviews spotId={spotId} setShowModal={setShowModal} />}
        </Modal>
      )}
    </>
  );
}

export default CreateReviewsModal;
