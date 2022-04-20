import React from 'react'
import Navbar from '../Navbar/Navbar'
import SideBar from '../Navbar/SideBar'
import "./MensPage.css";
import { useEffect } from 'react';
import { useState } from 'react'
const MensProduct = () => {
  const[lists,setLists]=useState([]);
  useEffect(() => {
   getMensData();
  }, []);

  const getMensData=()=>{
    fetch("http://localhost:3003/mens").then((d)=>d.json())
    .then((res)=>{
      setLists(res);
    })
  }
  return (
    <>
    <div className='containerr'>
    {
        lists.map((curr)=>{
            return (
                <>
                
            
                <img src={curr.img} alt="images"/>
     <div className='items' key={curr.id}>
        
         <p className='items'><span>Name:</span>{curr.title}</p>
         <p className='items'><span>Category:</span>{curr.color}</p>
         <p className='items'><span>Price:</span>{curr.price}</p>
     
        
     </div>
    
    
  
 
  </>)
        })
    }
    </div>
    </>
  )
}

export default MensProduct