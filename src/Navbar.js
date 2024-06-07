import React from "react";

function Navbar({ onBuild, prevValue }) {
  function handleClick() {
    onBuild(true);
  }
  return (
    <div className="nav-bar">
      <div className="logo">
        <img src="/logo.jpg" alt="Logo" />
      </div>
      <div className="build-resume">
        <button id="btn-resume" onClick={handleClick}>
          Build Your Resume
        </button>
      </div>
    </div>
  );
}

export default Navbar;
