import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="logoContainer">
        <a href="#" className="image"></a>
      </div>

      <nav>
        <ul className="content-letters">
          <li className="content-1">MEN</li>
          <li className="content-1">WOMEN</li>
          <li className="content-1">KIDS</li>
          <li className="content-1">HOME & LIVING</li>
          <li className="content-1">BEAUTY</li>
          <li className="content-1">STUDIO</li>
        </ul>
        {/* <div className="content-1">MEN</div>
          <div className="content-1">WOMEN</div>
          <div className="content-1">KIDS</div>
          <div className="content-1">HOME & LIVING</div>
          <div className="content-1">BEAUTY</div>
          <div className="content-1">STUDIO</div> */}
      </nav>

      <div className="input-query">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search for products, brands and more" />
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
