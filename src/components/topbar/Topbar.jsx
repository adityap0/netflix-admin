import React from "react";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin Db</span>
        </div>
        <div className="topRight">
          <img
            src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
