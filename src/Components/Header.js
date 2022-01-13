import React from 'react';
import '../Css/Header.css';
import GmailLogo from './gmailLogo.png';
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Header() {
    return (
        <div className='header'>
            <div className='header_left'>
                <title>Gmail</title>
                <IconButton>
                <MenuIcon />
                </IconButton>
                <img src={GmailLogo} alt='gmailLogo' />
            
            </div>
            <div className='header_middle'>
                <SearchIcon />
                <input placeholder="Search mail" type="text" />
                <ArrowDropDownIcon className="header__inputCaret" />
            </div>
            <div className='header_right'>
                <IconButton>
                <AppsIcon />
                </IconButton>
                <IconButton>
                <NotificationsIcon />
                </IconButton>
                <Avatar />
            </div>
        </div>
    )
}

export default Header
