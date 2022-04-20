import React from "react";
import Navbar from "../Navbar/Navbar";
import SideBar from "../Navbar/SideBar";
import "./MensPage.css";
import { useEffect } from "react";
import { useState } from "react";
const MensProduct = () => {
  const [lists, setLists] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getMensData();
  }, [page]);

  const getMensData = () => {
    fetch(`http://localhost:3005/mens?_page=${page}&_limit=9`)
      .then((d) => d.json())
      .then((res) => {
        setLists(res);
      });
  };
  return (
    <>
      <div className="containerr">
        {lists.map((curr) => {
          return (
            <>
              <div className="inside" key={curr.id}>
                <div className="items">
                  <p>
                    <span>Name:</span>
                    {curr.title}
                  </p>
                </div>
                <div className="items">
                  <p>
                    <span>Category:</span>
                    {curr.Category}
                  </p>
                </div>
                <div className="items">
                  {" "}
                  <p>
                    <span>Price:</span>
                    {curr.price}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div style={{ marginLeft: "550px" }}>
        {" "}
        <button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
        <button disabled={page===2} onClick={()=>setPage(page+1)}>Next</button>
      </div>
    </>
  );
};

export default MensProduct;
