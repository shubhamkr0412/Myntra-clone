import React from 'react'
import Navbar from '../Navbar/Navbar'
import SideBar from '../Navbar/SideBar'
import MensProduct from './MensProduct'
import "./MensPage.css";

const MensPage = () => {
  return (
    <div><Navbar/>
    <div className='griid'>
    
        
        <div><SideBar/></div>
        <div><MensProduct/></div>
    </div></div>
  )
}

export default MensPage