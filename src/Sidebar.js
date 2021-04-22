import React, { useState } from 'react';
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CreateIcon from '@material-ui/icons/Create';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';



function Sidebar() {

  const [isShown, setIsShown] = useState(false);

  return (
    <div className="sidebar">

      <Tooltip title="Twitter"><IconButton aria-label="Twitter">
      <SidebarOption Icon={TwitterIcon} text="" />
      </IconButton></Tooltip>

      <Tooltip title="Home"><IconButton aria-label="Home">
      <SidebarOption active Icon={HomeIcon} text="" />
      </IconButton></Tooltip>
        
      <Tooltip title="Explore"><IconButton aria-label="Explore">
      <SidebarOption Icon={SearchIcon} text="" /> 
      </IconButton></Tooltip>

      <Tooltip title="Notifications"><IconButton aria-label="Notifications">
      <SidebarOption Icon={NotificationsNoneIcon} text="" />
      </IconButton></Tooltip>

      <Tooltip title="Messages"><IconButton aria-label="Messages">
      <SidebarOption Icon={MailOutlineIcon} text=""/>   
      </IconButton></Tooltip>

      <Tooltip title="Profile"><IconButton aria-label="Profile">
      <SidebarOption Icon={PermIdentityIcon} text="" />
      </IconButton></Tooltip>

      <Tooltip title="More"><IconButton aria-label="More">
      <SidebarOption Icon={MoreHorizIcon} text="" />
      </IconButton></Tooltip>

      {/* Button -> Tweet */}
      <Tooltip title="Tweet"><IconButton aria-label="Tweet">
      <SidebarOption Icon={CreateIcon} text="" />
      </IconButton></Tooltip>

      
      <Tooltip title="Accounts"><IconButton aria-label="Accounts">
      <SidebarOption Icon={AccountCircleIcon} text="" />     
      </IconButton></Tooltip>
    </div>
    
  );
}

export default Sidebar;
