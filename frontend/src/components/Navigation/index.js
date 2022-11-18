import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
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
      <div className="header_container">
        <nav className="header_allthing">
          <div className="icon_left_group">
            <NavLink className="navLink" exact to="/">
              <i className="fa-solid fa-house" />

              <div className="logo_name_one">Airb-b</div>
            </NavLink>
          </div>
          <div className="upper_right_login_signup_host">
            <div className="host_button">
              <CreateSpotModal />
            <div className="header_login_signup">
              {isLoaded && sessionLinks}
            </div>
          </div>
            </div>
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
        </nav>
      </div>
    </>
  );
}

export default Navigation;
