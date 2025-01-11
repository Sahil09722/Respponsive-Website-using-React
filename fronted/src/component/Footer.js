import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer >
      <div className="footer-container container">
      <div className="footer-left">
        <Link to="/" className="logo">
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <div className="footer-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quisquam
          qui, optio officia exercitationem illo ratione rem possimus ab earum
          reiciendis! 
        </div>
        <div className="social-links">
          <a href="https://in.linkedin.com/" target="_blank">
            <FaLinkedinIn />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <FaFacebookF />
          </a>
          <a href="https://www.twitter.com/" target="_blank">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="footer-right">
        <article>
        <ul>
        <li>
            <h4>Permalinks</h4>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/plans">Plans</Link>
          </li>
          <li>
            <Link to="/trainers">Trainers</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
          
        </article>
        <article>
          <ul>
            <li>
              <h4>Insight</h4>
            </li>
            <li>
              <Link to="/s">Blog</Link>
            </li>
            <li>
              <Link to="/s">Case studies</Link>
            </li>
            <li>
              <Link to="/s">Events</Link>
            </li>
            <li>
              <Link to="/s">Communities</Link>
            </li>
            <li>
              <Link to="/s">FAQs</Link>
            </li>
          </ul>
        </article>
        <article>
          <ul>
            <li>
              <h4>Get in Touch</h4>
            </li>
            <li><Link to="/s">Contact us</Link></li>
            <li><Link to="/s">Support</Link></li>
          </ul>
        </article>
      </div>
      </div>
    </footer>
  );
};
export default Footer;
