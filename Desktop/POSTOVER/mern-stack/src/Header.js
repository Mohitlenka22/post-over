import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h2>PostOver</h2>
       
     <li><a href="/">Home</a></li>
      <li>
        <a href="/upload">Upload</a>
        </li>
    </div>
  );
}

export default Header;