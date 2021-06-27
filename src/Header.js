import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
const Header = () => {
    return (
        <div className="header">
            <img className="header__image"src="https://sf16-scmcdn-sg.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-whole-c555aa707602e714ec956ac96e9db366.svg" alt="" />

           
           
            <div className="header__input">
                <div className="header__searchContainer">
                    <input type="text" className="header__inputSection" placeholder="Search accounts"/>
                    <SearchIcon />
                </div>
            </div>
            <div className="header__icons">
                <button className="header__uploadButton">Upload</button>
                <button className="header__loginButton">Log in</button>
                <MoreVertIcon />
             </div>
        </div>
    )
}

export default Header
