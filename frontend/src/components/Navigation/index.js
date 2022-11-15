import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import CreateSpotModal from "../spots/createSpotModal";

import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const [showLogInModal, setShowLogInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  let sessionLinks;
  //   sessionLinks = (
  //     <ProfileButton
  //       isLoaded={isLoaded}
  //       setShowLogInModal={setShowLogInModal}
  //       setShowSignUpModal={setShowSignUpModal}
  //     />
  // )

  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;

    //         <div className='nav_button'>
    //     <NavLink id='add_host' to='/spots/create'>
    //       Host your Home
    //     </NavLink>
    //     <ProfileButton user={sessionUser} />
    //     </div>

    //  );
  } else {
    sessionLinks = (
      <div className="upper_right">
        <LoginFormModal className="loginForm" />
        <SignupFormModal className="signupForm" />
      </div>
    );
  }

  return (
    <>
      <nav className="header">
        <NavLink exact to="/">
          <img
            className="icon"
            src="http://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            alt="loading"
          />
        </NavLink>
        {isLoaded && sessionLinks}
        {/* {showLogInModal && (
      <div className='upper_right' onClose={() => setShowLogInModal(false)}>
        <LoginFormModal setShowLogInModal={setShowLogInModal} />
      </div>
    )}
    {showSignUpModal && (
      <div className='upper_right' onClose={() => setShowSignUpModal(false)}>
      <SignupFormModal setShowSignUpModal={setShowSignUpModal} />
      </div>
    )}
      */}
        <div className='host_button'>
       <CreateSpotModal />
        </div>
      </nav>
    </>

    //         <NavLink exact to="/">
    //         <img
    //             className="icon"
    //             src="http://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
    //             alt="loading"
    //           />
    //         </NavLink>
    //         {isLoaded && sessionLinks}
    // </>
  );
}

export default Navigation;
