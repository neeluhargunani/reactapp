import React, { useContext} from 'react'
import SideBarLeft from '../Components/SideBarLeft'
import style  from "../Styles/commingSoon.module.css"
import NavBarTop from '../Components/NavBarTop'

export default function ToDo() {

  return (
    <div className={style.main}>
        <SideBarLeft/>
       
        <div className={style.topDiv}>
        <div className={style.profile}>
          <h2>ToDo</h2>
          <NavBarTop />
        </div>

  

        {/* ---------- Screen ------- */}
        <div className={style.screen}>
          <h1 className={style.ComingSoon}>Coming Soon</h1>
        </div>
      </div>
    </div>
    
  )


}
