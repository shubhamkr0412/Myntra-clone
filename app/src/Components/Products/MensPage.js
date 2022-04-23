import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import SideBar from '../Navbar/SideBar'
import MensProduct from './MensProduct'
import "./MensPage.css";

import dataSlider from '../Slider/dataSlider'

import { useEffect } from 'react';



const MensPage = () => {
  const [data, setData] = useState(dataSlider);
  const [page, setPage] = useState(1);
  const [menuData,setMenuData] = useState([]);
  useEffect(() => {
    getsData();
  }, [page]);

  const getsData = () => {
    fetch(`http://localhost:3005/mens?_page=${page}&_limit=9`)
      .then((d) => d.json())
      .then((res) => {
        setMenuData(res);
      });
  };
  console.log(menuData);
  
  return (
    <div><Navbar/>
 
    <div className='griid'>
    
    
        <div><SideBar menuData={menuData} /></div>
        <div><MensProduct menuData={menuData} /></div>
    </div>
    <div style={{ marginLeft: "600px" }}>
        {" "}
        <button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
        <button disabled={page===2} onClick={()=>setPage(page+1)}>Next</button>
      </div></div>
  )
}

export default MensPage