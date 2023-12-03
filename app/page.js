import React from 'react';
import { RiSearchLine, RiBookletLine, RiTruckLine, RiLoopLeftLine, RiVerifiedBadgeFill, RiCloseFill, RiFlightTakeoffLine, RiNotification3Fill, RiMenuLine } from 'react-icons/ri';

import './globals.css'; // Import your CSS file

const YourComponent = () => {
  return (
    <div className="main">
      <div className="navbar">
        <div className="nav-l">
          <img src="https://dnk.cept.gov.in/customers.web/static/img/dnk2.png" alt="" />
          <p>डाकघर निर्यात केंद्र - ग्राहक पोर्टल <br />DakGhar Niryat Kendra - Customer Portal</p>
        </div>
        <div className="nav-c">
          <img src="https://dnk.cept.gov.in/customers.web/static/img/logo.jpg" alt="" />
          <img src="https://dnk.cept.gov.in/customers.web/static/img/g20.jpg" alt="" />
        </div>
        <div className="nav-r">
          <RiNotification3Fill />
          <a href="#"><RiMenuLine />Menu</a>
          <a href="./Register">Sign-in</a>
          <a href="./Login">Log-in</a>
        </div>   
      </div>
      <div className="hero">
        <div className="search">
          <form action="">
            <input className="search-b" type="text" placeholder="Search anything" name="q" />
            <button type="submit"><RiSearchLine /></button>
          </form>
        </div>
        <div className="artical">
          <p>ARTICLE NUMBER</p>
          <p>PBE NUMBER</p>
        </div>
        <div className="book">
          <p>+Book Article</p>
        </div>
        <div className="book">
          <p>GO TO Profile</p>
        </div>
      </div>
      <hr />
      <div className="mainhero">
        <div className="right">
          <div className="hero1">
            <p>Total Consignments - 0 <br />
              Total Declared Value - ₹ 0.00</p>
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0jYnWPk0IWUpMuUL98M0plbi2uIot6aGrg6A3luDrqCrezxHf" alt="" />
          </div>
        </div>
        <div className="left">
          <div className="hero2">
            <RiBookletLine />
            <h1>0</h1>
            <p>PO induction Pending</p>
          </div>
          <div className="hero2">
            <RiTruckLine />
            <h1>0</h1>
            <p>In Transit</p>
          </div>
          <div className="hero2">
            <RiLoopLeftLine />
            <h1>0</h1>
            <p>Under Process</p>
          </div>
          <div className="hero2">
            <RiVerifiedBadgeFill />
            <h1>0</h1>
            <p>Customs Cleared</p>
          </div>
          <div className="hero2">
            <RiCloseFill />
            <h1>0</h1>
            <p>Customs detained</p>
          </div>
          <div className="hero2">
            <RiFlightTakeoffLine />
            <h1>0</h1>
            <p>Dispatched out of India</p>
          </div>
        </div>
      </div>
      <div className="mainhero2">
        <div className="right">
          <div className="hero3">
            <p>Mail Class wise booking</p>
            <img src="https://alexjordanseniorproject.files.wordpress.com/2012/11/progressanimated.gif" alt="" />
          </div>
        </div>
        <div className="left">
          <div className="hero4">
            <p>Top 5 Destinations</p>
            <img src="https://global.discourse-cdn.com/business7/uploads/plot/original/1X/056590b3c2fa991ebf3a9caa95111edd5e3f68bc.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
