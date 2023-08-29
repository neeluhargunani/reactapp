import React, { useContext , useState} from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../Components/Userprovider'; // Import the UserContext

import style from "../Styles/userprofile.module.css";
import Chat from '../Components/Chat';


export default function UserProfile() {
  const [selectedUser] = useState(null);
    const { userId } = useParams();
    const allUsers = useContext(UserContext); // Use the context here
    const user = allUsers.find(user => user.id === parseInt(userId));
  
    if (!user) {
      return <p>Loading user profile...</p>;
    }

  return (
    <>
    <div style={{display:'flex',justifyContent:'left', alignItems:'left'
   }}>
  
 

       
       {/* <h1> Profile</h1>  */}
       
        <div className={style.leftSide} key={user.id} style={{display:'flex', justifyContent:'left' , flexDirection:'column'}}>
          
        <img src={user.profilepicture} alt={user.username} />
    <h1>{user.name}</h1>
    <div className={style.Usr_dtls}>
    <div>
       
            <h2>Username :</h2>
            <h2 style={{paddingLeft:'2.3rem'}}>e-mail :</h2>
            <h2 style={{paddingLeft:'2rem'}}>Phone :</h2>
            <h2  style={{paddingLeft:'1rem'}}>Website :</h2>
          </div>
          <div>
            <h3 >{user.username}</h3>
            <h3>{user.email}</h3>
            <h3>{user.phone}</h3>
            <h3>{user.website}</h3>
          </div>
          </div>
  <div className={style.borderTop}>
    <h1>Company</h1>
    </div>
    <div className={style.company}>
  
    <div>
       
            <h2 style={{paddingLeft:'4rem'}}>Name :</h2>
            <h2>catchphrase :</h2>
            <h2 style={{paddingLeft:'6.5rem'}}>Bs:</h2>
          
          </div>
          <div>
            <h3 >{user.company.name}</h3>

            <h3>{user.company.catchPhrase}</h3>
            <h3>{user.company.bs}</h3>
          </div>

        </div>
        </div>
        <div className={style.rightSide}>
        {/* -----------(address)------- */}
        <h2>Address:</h2>
        <div className={style.address}>
          <div>
            <h2 style={{ marginTop: "0px" }}>Street :</h2>
            <h2>Suite :</h2>
            <h2>City :</h2>
            <h2>Zipcode :</h2>
          </div>
          <div>
            <h3 style={{ marginTop: "0px" }}>{user.address.street}</h3>
            <h3>{user.address.suite}</h3>
            <h3>{user.address.city}</h3>
            <h3>{user.address.zipcode}</h3>
          </div>
        </div>
        <iframe
        title={user.address}
          width="100%"
          height="350"
          className={style.Map}
          src={`https://maps.google.com/maps?q=${user.address.street},t=&z=13&ie=UTF8&iwloc=&output=embed`}
         
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
            <div className={style.geo}>
          <p>
            Lat : <span>{user.address.geo.lat}</span>
          </p>
          <p>
            Lng : <span>{user.address.geo.lng}</span>
          </p>
        </div>
     
       <div>
       <div>
        {/* Icon to toggle chat visibility */}
        <Chat selectedUser={selectedUser} />

    </div>




       </div>
        </div>
       
    
  </div>
 
  </>
  )
}

