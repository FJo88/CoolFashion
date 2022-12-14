
import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
      <div className="row-delivery">
        <div className="del-col">
          <i className="fa-solid fa-truck-fast"></i>
          <h3>Fast Delivery</h3>
        </div>
        <div className="del-col">
          <i className="fa-solid fa-right-left"></i>
          <h3>Free Returns</h3>
        </div>
        <div className="del-col">
          <i className="fa-solid fa-credit-card"></i>
          <h3>Safe payments</h3>
        </div>
      </div>

      <div className="row">
        <div className="footer-col">
          <h4>About Cool Fashion</h4>
          <ul>
            <li>
              <a href="#">Company info</a>
            </li>
            <li>
              <a href="#">Affiliates</a>
            </li>
            <li>
              <a href="#">Find a Store</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Shop</h4>
          <ul>
            <li>
              <Link to='/contact-us' state={{confirm: false}}>Contact us</Link>
            </li>
            <li>
              <a href="#">Gift Cards</a>
            </li>
            <li>
              <a href="#">Shipping</a>
            </li>
            <li>
              <a href="#">Track your order</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <Link to='/admin'>For employees</Link>
              </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Follow us</h4>
          <div className="social-links">
            <a href="">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="row-copy">
        <h3>
          Cool Fashion AB <i className="fa fa-copyright"></i>, all rights
          reserved
        </h3>
      </div>
    </div>
  );
};

export default Footer;
