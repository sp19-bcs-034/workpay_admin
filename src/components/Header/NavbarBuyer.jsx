import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './NavbarBuyer.scss';
import Dropdown from './Dropdown';
import { MenuItems } from './MenuItems';
import { AvatarMenuItems } from './AvatarMenuItems';
import Avatar from '@mui/material/Avatar';
// import { useSelector, useDispatch} from "react-redux";
// import {changeNavbar} from '../../../redux/actions/userAction'
// import {loadGig} from '../../../redux/actions/gigAction'
function Navbar() {
  const isAuthenticated=false, user  = null
  // const dispatch = useDispatch(); 
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState({
    avatar:false,
    services:false
  });
  const handleNavbar = ()=>{
    // dispatch(changeNavbar('seller'))
    // dispatch(loadGig())
  }
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = (name) => {
    if (window.innerWidth < 1020) {
      setDropdown((pre)=>({...pre,[name]:false}));
    } else {
      setDropdown((pre)=>({...pre,[name]:true}));
    }
  };

  const onMouseLeave = (name) => {
    if (window.innerWidth < 1020) {
      setDropdown((pre)=>({...pre,[name]:false}));
    } else {
      setDropdown((pre)=>({...pre,[name]:false}));
    }
  };

  return (
    <>
      <nav className='navbar'>
        <div className="navbar-inner">
          {/* <Link to='/' className='navbar-logo'  onClick={closeMobileMenu}> */}
          <Link to='/' className='navbar-logo' style={{marginTop:'-16px',}} >
            WorkPay
            <i className="fab fa-google-wallet" aria-hidden="true"></i>


          </Link>
          
          {/* <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div> */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              HOME
              </Link>
              <Link to='users' className='nav-links' onClick={closeMobileMenu}>
              USERS
              </Link>
            </li>
            <li
              className='nav-item'
              onMouseEnter={()=>onMouseEnter('services')}
              onMouseLeave={()=>onMouseLeave('services')}
            >
              <Link
                to='/Auth'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                USER AUTHENTICATION
              </Link>
              {dropdown.services && <Dropdown MenuItems={MenuItems} />}
            </li>
            <li className='nav-item'>
              <Link
                to='/Hello'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              GIG DETAILS
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/gigs?category=music-&-audio'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                PAYMENT
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link
                to='/gigs?category=business'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Business
              </Link>
            </li> */}
            <li>
              {/* <Link
                to='/login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Login
              </Link> */}
            </li>
          </ul>
          <div>
            
            {isAuthenticated 
            ?
            <>
              <div className="avatar-mobile-display">
              <Link to='/dashboard'
              className="switch-dashboard" onClick={handleNavbar}
              >Switch to Seller</Link>
              <li
              className='nav-item placement'
              onMouseEnter={()=>onMouseEnter('avatar')}
              onMouseLeave={()=>onMouseLeave('avatar')}
            >
              <Avatar 
              alt="Remy Sharp" src={user.avatar?.url ? user.avatar?.url:"./Profile.png" } />
              {dropdown.avatar && <Dropdown MenuItems={AvatarMenuItems} right="4%" avatar={true} />}
          </li>
              </div>
            </>
            :<Button text="Login" link="/login"/>
            
            }

          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
