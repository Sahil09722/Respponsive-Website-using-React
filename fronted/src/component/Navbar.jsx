import { useState } from "react";
import Logo from "../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
  const [isNavShowing,setIsNavShowing]=useState(false);
  
  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className="logo" onClick={()=>setIsNavShowing(false)}>
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className={`nav_links ${isNavShowing?'show_nav':'hide_nav'}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink to={path} className={({isActive})=>isActive?'active-nav':''} onClick={()=>setIsNavShowing(prev=>!prev)}>{name}</NavLink>
              </li>
            );
          })}
        </ul>
        <button className="nav_toggle-btn" onClick={()=>setIsNavShowing(prev=>!prev)}>
          {
            isNavShowing?<IoClose/>:<FaBars/>
          }
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
