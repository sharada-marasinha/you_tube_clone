import React, { useState } from "react";
import './index.css';
import NavBar from "./Compornent/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Video from "./pages/video/Video"

const App =() =>{
  const [sidebar,setsidebar]=useState(true);
  return(
    <div>
      <NavBar setsidebar={setsidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
      </Routes>
    </div>
  )
}
export default App;