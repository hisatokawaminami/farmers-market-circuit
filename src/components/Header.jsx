import React from 'react';

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
        `}
      </style>
      <h1>Avery Organic Farm</h1>
    </div>
  );
}

export default Header;
