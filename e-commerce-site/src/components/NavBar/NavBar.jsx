import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="logoContainer">
        <a href="#" className="image"></a>
      </div>

      <nav>
        <div className="content-letters">
          <div className="content-1">MEN</div>
          <div className="content-1">WOMEN</div>
          <div className="content-1">KIDS</div>
          <div className="content-1">HOME & LIVING</div>
          <div className="content-1">BEAUTY</div>
          <div className="content-1">STUDIO</div>
        </div>
      </nav>

      <div className="input-query">
        <input type="text" />
      </div>

      
      <div className="profile">
        <div className="profile-1">
          <i class="fa-solid fa-user"></i>
        </div>
        <div className="profile-2">
          <i class="fa-regular fa-heart"></i>
        </div>
        <div className="profile-3">
          <i class="fa-sharp fa-solid fa-bag-shopping"></i>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
