import "./Header.css";

import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";
import sessionReducer from "../../store/session";
import { Modal } from "../../context/Modal";
import { useState } from "react";
import ProfileButton from "../Navigation/ProfileButton";
import LoginForm from "../LoginFormModal/LoginForm";
import SignupForm from "../SignupFormModal/SignupForm";
import LoginFormModal from "../LoginFormModal/index";
import SignupFormModal from "../SignupFormModal/index";
import Navigation from "../Navigation/index";

function Header() {
  const sessionUser = useSelector((state) => state.session.user);
  console.log("sessionUser", sessionUser);

  return (
    <>
      <div className="header">
        {/* <div className='home_button'> */}
        <Navigation />

        <div className="search_bar">
          <input type="text" />
          <i className="fa-solid fa-magnifying-glass" />
        </div>
        <div className="upper_right">
          <p>Become a host</p>
          {/* <i className='fa-solid fa-globe' /> */}
          {/* <div className='drop_down'>
                <i className='fa-solid fa-caret-down' />*}

                {/* </div> */}
                {/* <i className='fa-solid fa-user' /> */}
  <LoginFormModal />
  <SignupFormModal />
        </div>
</div>
    </>
  );
}

export default Header;
