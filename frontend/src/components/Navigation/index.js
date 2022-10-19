import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFromModal from '../SignupFormModal'
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div className='nav_button'>
          <NavLink id='add_host' to='/spots/create'>
            Host your Spot
          </NavLink>
          <ProfileButton user={sessionUser} />
          </div>
        </>
        );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFromModal />
      </>
    );
  }

  return (
    <ul>
      <li>
        <NavLink exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
