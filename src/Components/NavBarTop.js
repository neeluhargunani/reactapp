import React, { useState, useContext } from 'react';
import { useAuth } from './AuthContext';
import { Link, NavLink, useParams } from 'react-router-dom';
import { UserContext } from '../Components/Userprovider'; // Import the UserContext

import style from '../Styles/miscellaneousStyles.module.css';

export default function NavBarTop() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { userId } = useParams();

  const { currentUser } = useAuth();
  const allUsers = useContext(UserContext);

  const user = allUsers.find((user) => user.id === parseInt(userId));
   
  if (!user) {
    return <p>Loading user profile...</p>;
  }

  const otherUsers = allUsers.filter((u) => u.id !== user.id).slice(0, 2);
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  return (
    <nav className={style.topNavBar}  onClick={toggleDropdown}>
  
        <img src={user.profilepicture} alt={user.username} />
        <h4>{user.name}</h4>
      
      {isDropdownVisible && (
        <div className={style.profile_dropdown}>
          <div className={style.profile_content}>
            <NavLink  to={`/profile/${user.id}`}>
              <div className={style.currentUser}>
                <img src={user.profilepicture} alt={user.username} className={style.current_img}/>
                <p>{user.name}</p>
              </div>
            </NavLink>
            {otherUsers.map((otherUser) => (
              <Link key={otherUser.id} to={`/profile/${otherUser.id}`}>
                <div style={{ display: 'flex'}}>
                  <img src={otherUser.profilepicture} alt={otherUser.username} />
                  <p style={{width:'10vw', padding:'.8rem'}}>{otherUser.name}</p>
                </div>
              </Link>
            ))}
          </div>
          {currentUser ? (
            ''
          ) : (
            <div className={style.signOutmain}>
              <Link to="/" className={style.signOut}>
                Sign Out
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
