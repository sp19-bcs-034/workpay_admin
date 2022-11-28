import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SafetyDividerIcon from '@mui/icons-material/SafetyDivider';
import DetailsIcon from '@mui/icons-material/Details';
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";

import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import { DarkModeContext } from "../../context/darkModeContext";

import { Link } from "react-router-dom";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

import { useContext } from "react";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      
    <div className="top">
      
        <span className="logo">WorkPay</span>
    
    </div>
    <hr />
    <div className="center">
      <ul>
        <p className="title">MAIN</p>
        <li>
          <DashboardIcon className="icon" />
          <Link to="/" style={{ textDecoration: "none" ,width:'100%' }}>
          <span>Dashboard</span>
          </Link>
        </li>
        <p className="title">LISTS</p>
        <Link to="/" className="fontchange" style={{ textDecoration: "none" ,width:'100%' }}>
          <li>
          <PersonOutlineIcon className="icon" />
            <span>Users</span>
          </li>
        </Link>
        <li>
        <SafetyDividerIcon className="icon" />
        <Link to="/Auth" style={{ textDecoration: "none" ,width:'100%' }}>
          <span>User Authentication</span>
          </Link>
          </li>

     
        <li>
          <DetailsIcon className="icon" />
          <Link to="/Hello" style={{ textDecoration: "none",width:'100%' }} >
          <span>Gig Details</span>
          </Link>
        </li>
      
        <p className="title">USEFUL</p>
        <li>
          <PaymentIcon className="icon" />
          <span>Payment</span>
        </li>
        <p className="title">SERVICE</p>
        <li>
          <SettingsApplicationsIcon className="icon" />
          <span>Settings</span>
        </li>
        <p className="title">USER</p>
        <li>
          <AccountCircleOutlinedIcon className="icon" />
          <span>Profile</span>
        </li>
        <li>
          <ExitToAppIcon className="icon" />
          <Link to="/" style={{ textDecoration: "none" }}>
          <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
    <div className="bottom">
      <div
        className="colorOption"
        onClick={() => dispatch({ type: "LIGHT" })}
      ></div>
      <div
        className="colorOption"
        onClick={() => dispatch({ type: "DARK" })}
      ></div>
    </div>
  </div>
  );
};

export default Navbar;
