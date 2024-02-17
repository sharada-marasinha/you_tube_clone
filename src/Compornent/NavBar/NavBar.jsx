import React from "react";
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import './NavBar.css'
const NavBar = () => {
    return (
        <nav className='flax-dev'>
            <div className='nav-left flex-dev'>
                <img className='menu_icon' src={menu_icon} alt="" />
                <img className='logo' src={logo} alt=""/>
            </div>
            <div className="nav-middle flex-dev">
                <div className="search-box flex-div">
                    <img src={search_icon} alt="" />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="nav-right flex-dev">
                <img src={upload_icon} alt="" />
                <img src={more_icon} alt="" />
                <img src={notification_icon} alt="" />
                <img className='user-icon' src={profile_icon} alt="" />
            </div>
        </nav>
    )
}
export default NavBar;