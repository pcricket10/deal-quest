// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'
import ProfileButton from './ProfileButton'
import LoginFormModal from '../LoginFormModal';
import './Navigation.css'

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector(state => state.session.user);
  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div className='login-signup'>
        <NavLink to="/login"><button className="login">Log In</button></NavLink>
        <NavLink to="/signup"><button className="signup">Sign Up</button></NavLink>
      </div>
    );
  }
  return (
    <nav>
      <NavLink exact to="/"><button className='home'><i className='fa-solid fa-house' /></button></NavLink>
      {isLoaded && sessionLinks}
    </nav>
  )
}
export default Navigation;
