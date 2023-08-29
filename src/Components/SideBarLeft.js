import React, {useState, useEffect} from 'react';
import {NavLink, useLocation } from 'react-router-dom'; 
import style from '../Styles/sidebar.module.css';


export default function SideBarLeft() {
  const location = useLocation();
  const [userId, setUserId] = useState('');

  useEffect(() => {
    setUserId(sessionStorage.getItem("userId") || 1);
  }, []);
  return (
    <>
    <div className={style.sidebar}>
      <NavLink
        to={`/profile/${userId}`}
        className={location.pathname.startsWith(`/profile/${userId}`) ? style.active : style.notActive }
      >
        Profile
      </NavLink>
      <NavLink
        to="/post"
        className={location.pathname === '/post' ? style.active : style.notActive }
      >
      Posts
      </NavLink>
      <NavLink
        to="/gallery"
        className={location.pathname === '/gallery' ? style.active : style.notActive }
      >
      Gallery
      </NavLink>
      <NavLink
        to="/todo"
        className={location.pathname === '/todo' ? style.active : style.notActive }
      >
      Todo
      </NavLink>
    </div>

    </>
  );
}
