import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { NavLink,useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';
//import Header  from '../Header/Header';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal'
import './Navigation.css'

function ProfileButton({isLoaded,setShowLogInModal, setShowSignUpModal}) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector(state => state.session.user);
  const history = useHistory();

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
    history.push('/')
  };

  // let dropDown;
  // if (isLoaded && !user) {
  //   dropDown = (
  //     <div>

  //        <LoginFormModal />
  //       <SignupFormModal />

        {/* <button onClick={()=>setShowLogInModal(true)}>Log</button>
        <button onClick={()=>setShowSignUpModal(true)}>Sign Up</button> */}

  //     </div>
  //   )
  // } else if(isLoaded && user) {
  //   dropDown = (
  //     <ul className="profile-dropdown">
  //       <li>{user.username}</li>
  //       <li>{user.email}</li>
  //       <li>
  //         <button onClick={logout}>Log Out</button>
  //       </li>
  //     </ul>
  //   )
  // }

  return (
  //   <>
  //   <button onClick={openMenu}>
  //     <i className="fas fa-user-circle" />
  //   </button>
  //   {showMenu && dropDown}
  // </>
    <>
      <div className="profilebutton_div">
        <button onClick={openMenu} className='upperRight_button'>
        <i className="fa-solid fa-bars"></i>
        <i className="fa-solid fa-circle-user"></i>
        {/* <i className="fa-sharp fa-solid fa-user" /> */}
{/* <Header /> */}
        </button>
        {/* {showMenu && dropDown} */}
        {showMenu && (
          <div className="main_page_list_container">
        <div className="profile-dropdown">

          <div className='info_navigation'>{`Hello,${user.username}`}</div>
          <div id='user_email' className="info_navigation">{user.email}</div>


            <div className="info_navigation">
              <NavLink id="manage_listings" to='/spots/current'>Manage your listings</NavLink>
          </div>
          <div className="info_navigation">
            <NavLink id='manage_listings' to='/reviews/current'>Manage your reviews</NavLink>
            </div>
            <button className="logout_button_drop" onClick={logout}>Log Out</button>
            </div>
            </div>

        )}
        </div>
    </>
  );
}

export default ProfileButton;
