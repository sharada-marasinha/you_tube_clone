import React from "react";
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from'../../assets/upload.png'
const NavBar =() =>{
  return(
    <nav className='flax-dev'>
        <div className='nav-left flex-dev'>
            <img className='menu_icon' src={menu_icon} alt="" />
            <img className='logo' src={logo} alt="" />
        </div> 
        <div className="nav-middle flex-dev">
            <input type="text" placeholder="Search" />
            <img src={search_icon} alt="" />
        </div>
        <div className="nav-right flex-dev">
            <img src={upload_icon} alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
    </nav>
  )
}
export default NavBar;