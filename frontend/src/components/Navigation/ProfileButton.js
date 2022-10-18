import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
      //debugger
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

      const closeMenu = () => {
       //debugger
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button onClick={openMenu}>
      <i className="fa-sharp fa-solid fa-user" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">

          <li className='username_navigation'>{`Hello,${user.username}`}</li>
          <li className="email_navigation">{user.email}</li>


            <div className="manage_navigation">
              <NavLink id="manage_listings" to='/spots/current'>Manage your listings</NavLink>
          </div>
          <div className="manage_reviews">
            <NavLink id='manage_reviews' to='/reviews/current'>Manage your reviews</NavLink>
            </div>
            <button onClick={logout}>Log Out</button>
        </ul>

      )}
    </>
  );
}

export default ProfileButton;
