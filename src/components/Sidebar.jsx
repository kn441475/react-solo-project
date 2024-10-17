import React, { useEffect } from "react";
import SidebarOption from "./SidebarOption";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocalMoviesRoundedIcon from '@mui/icons-material/LocalMoviesRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { Link, useLocation } from "react-router-dom";


const Sidebar = () => {
  const location = useLocation()
  
  return (
    <div className="sidebar">
      <h4>Menu</h4>
      <div className="sidebar__top">
        <Link to="/"><SidebarOption icon={<HomeRoundedIcon />} text="Home" active={location.pathname === '/'}/></Link>
        <Link to="/movies"><SidebarOption icon={<LocalMoviesRoundedIcon />} text="Movies" active={location.pathname === '/movies'}/></Link>
      </div>
      <div className="sidebar__bottom">
        <SidebarOption icon={<SettingsRoundedIcon/>} text="Settings" nocursor />
        <SidebarOption icon={<HelpRoundedIcon />} text="Help" nocursor/>
      </div>
    </div>
  );
};

export default Sidebar;
