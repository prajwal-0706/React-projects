import './NavBar.css';
import logo from "../../images/logo.png";

function NavBar(){
    return(
        <div className="n-wrapper">
            <div className="n-left">
                <div className="logoimg">
                    <img src={logo} style= {{width:"50px", height:'55px'}} />
                </div>
                <span className='Logoheading'>
                    LOGIC TIMES +
                </span>
            </div>

            <div className="n-right">
                <ul className='right-content'>
                    <li>HOME</li>
                    <li>LOCAL</li>
                    <li>SPORTS</li>
                    <li>JOBS</li>
                    <li>BUISNESS</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;   