// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import * as sessionActions from '../../store/session';

const ProfileButton = ({ user }) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  }
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener("click", closeMenu)

  }, [showMenu]);

  const logout = e => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  }
  return (
    <>
      <button className="nav-button profile-button" onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li className="link"><NavLink to="/products/new"><button className="nav-button">New Product</button></NavLink></li>
          <li className="link">
            <button className="nav-button" onClick={logout}>Log Out</button>
          </li>
        </ul>


      )}

    </>
  )
}

export default ProfileButton;
