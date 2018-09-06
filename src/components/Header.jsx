import React from 'react';
import { Link } from 'react-router-dom';
import base64thing from '../assets/images/base64.png';

function Header(){
  return (
    <div className="header">
      <style jsx>{`
          .header {
            background-color: #E0FBFC;
            font-family: monospace;
            padding: 20px 20px;
            text-align: center;
          }
          .base64 {
            height: 50px;
          }
        `}
      </style>
      <h1>Avery Organic Farm</h1>
      <img src={base64thing} className="base64"/><br/>
      <Link to="/">Schedule</Link> | <Link to="/seasonal">Seasonal Produce</Link>
    </div>
  );
}

export default Header;
