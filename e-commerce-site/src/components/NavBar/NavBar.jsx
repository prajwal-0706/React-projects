import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="logoContainer">
        <a href="#" className="image"></a>
      </div>

      <header>
        <nav>
          <ul>
            <li>
              <a href="#">MEN</a>
              <ul>
                <li>
                  <a href="#">Khushi</a>
                </li>
                <li>
                  <a href="#">Khushi</a>
                  <ul>
                    <li>
                      <a href="#">Jiddu</a>
                    </li>
                    <li>
                      <a href="#">Jiddu</a>
                    </li>
                    <li>
                      <a href="#">Jiddu</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Khushi</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">WOMEN</a>
              <ul>
                <li>
                  <a href="#">Jidnyasa</a>
                </li>
                <li>
                  <a href="#">Khushi</a>
                  <ul>
                    <li>
                      <a href="#">Hii Jidnyasa</a>
                    </li>
                    <li>
                      <a href="#">Hii Jidnyasa</a>
                    </li>
                    <li>
                      <a href="#">Hii Jidnyasa</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Catty</a>
                  <ul>
                    <li>
                      <a href="#">Hii Khushi</a>
                    </li>
                    <li>
                      <a href="#">Hii Khushi</a>
                    </li>
                    <li>
                      <a href="#">Hii Khushi</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">KIDS</a>
            </li>
            <li>
              <a href="#">HOME & LIVING</a>
            </li>
            <li>
              <a href="#">BEAUTY</a>
            </li>
            <li>
              <a href="#">STUDIO</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* <nav>
        <ul className="content-letters">
          <li className="content-1">
            <a href="#">MEN</a>
            <ul>
              <li>
                <a href="#">Hello-1</a>
              </li>
              <li>
                <a href="#">Hello-2</a>
              </li>
              <li>
                <a href="#">Hello-3</a>
              </li>
            </ul>
          </li>
          <li className="content-1">
            WOMEN
            <ul>
              <li>Jidnyasa</li>
              <li>Khushi</li>
              <li>Catty</li>
            </ul>
          </li>
          <li className="content-1">KIDS</li>
          <li className="content-1">HOME & LIVING</li>
          <li className="content-1">BEAUTY</li>
          <li className="content-1">STUDIO</li>
        </ul>
      </nav> */}

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
