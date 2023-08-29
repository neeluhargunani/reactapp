import React from 'react'
import SideBarLeft from '../Components/SideBarLeft'
import style  from "../Styles/commingSoon.module.css"
import NavBarTop from '../Components/NavBarTop'

export default function Gallery() {
  return (
    <div className={style.main}>
    <SideBarLeft/>
   
    <div className={style.topDiv}>
    <div className={style.profile}>
      <h2>Gallery</h2>
      <NavBarTop />
    </div>
    <div className={style.screen}>
      <h1 className={style.ComingSoon}>Coming Soon</h1>
    </div>
  </div>
</div>
  )
}
