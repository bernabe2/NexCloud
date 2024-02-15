import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link desde React Router
import "./header.css";

const Header = () => {
  const [Mobile, setMobile] = useState(false);
  
  return (
    <>
      <header>
        <div className='container flexSB'>
          <nav className='flexSB'>
            <div className='logo'>
              <img src='./images/logo.png' alt='' />
            </div>
            <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
              <li>
                <Link to='/'>Home</Link> {/* Usa Link en lugar de <a> */}
              </li>
              <li>
                <Link to='/series'>Series</Link> {/* Usa Link en lugar de <a> */}
              </li>
              <li>
                <Link to='/movies'>Movies</Link> {/* Usa Link en lugar de <a> */}
              </li>
              <li>
                <Link to='/pages'>Pages</Link> {/* Usa Link en lugar de <a> */}
              </li>
              <li>
                <Link to='/pricing'>Pricing</Link> {/* Usa Link en lugar de <a> */}
              </li>
              <li>
                <Link to='/contact'>Contact</Link> {/* Usa Link en lugar de <a> */}
              </li>
            </ul>
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
          <div className='account flexSB'>
            <i className='fa fa-search'></i>
            <i className='fas fa-bell'></i>
            <i className='fas fa-user'></i>
            <button>Subscribe Now</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
