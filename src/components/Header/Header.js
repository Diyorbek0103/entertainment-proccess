import React from "react";
import "./Header.css";
export const Header = () => {
  return (
    <div onClick={() => window.scroll(0, 0)} className="Header">
      <span> 🎬 Entertainment Hub 🎥</span>
    </div>
  );
};
