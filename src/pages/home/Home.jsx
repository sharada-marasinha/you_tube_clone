import React from "react";
import './Home.css';
// import SideBar from "../../Compornent/SideBar/SideBar.jsx";
import SideBar from "../../Compornent/SideBar/SideBar";

const Home =({sideBar}) =>{
  return(
    <>
    {/* <div>Hello</div> */}
    <SideBar sideBar={sideBar}/>
    </>
  )
}
export default Home;