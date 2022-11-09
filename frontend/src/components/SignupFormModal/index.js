import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from "./SignupForm";


function SignupFormModal() {
    const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div id='sign_up' className='login_signup_button'>
          <button onClick={() => setShowModal(true)}>Sign Up</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <SignupForm />
            </Modal>
        )}
       </div>
        </>
      );
    }

    export default SignupFormModal;
