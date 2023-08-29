import React  from 'react'
import style from "../Styles/landingPage.module.css";

import ProfileList from './ProfileList';


export default function LandingPage() {
  return (
    <div>
         <div className={style.landingMain}>
      
      <div className={style.card}>
        <h1 className={style.card_top}>Select an account</h1>
 <ProfileList/>

</div>
</div>
</div>
   
  )
}
