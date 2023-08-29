import React, { useContext } from 'react';
import styleList from '../Styles/userList.module.css';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../Components/Userprovider'; // Import the UserContext

export default function ProfileList() {
  const allUsers = useContext(UserContext); // Use the context here

  if (!allUsers) {
    return <p>Loading user profiles...</p>;
  }

  return (
    <div className={styleList.userList}>
      <ul className=" ">
        {allUsers.map((user) => (
          <li key={user.id}>
            {/* Use NavLink instead of Link */}
            <NavLink
              to={`/profile/${user.id}`}
              activeClassName={styleList.activeLink}
            >
              <div className={styleList.userListCard}>
                <img src={user.profilepicture} alt={user.profilepicture} />
                <span>{user.name}</span>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
