import React from 'react'
import UserProfile from './UserProfile'
import NavBarTop from '../Components/NavBarTop'
import SideBarLeft from '../Components/SideBarLeft';
import style from "../Styles/commingSoon.module.css"

export default function ProfilePage() {
 
  return (
    <div className={style.main}>
        <SideBarLeft/>
       
        <div className={style.topDiv}>
        <div className={style.profile}>
         <h2>Profile</h2>
      <NavBarTop/>
    </div>
     
    <div className={style.screen} style={{paddingTop:'0'}}>
      <UserProfile />
 </div>
      </div>
      </div>
  )
}
