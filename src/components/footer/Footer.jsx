import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='box'>
          <ul className='flex'>
            <li>Terms of Use</li>
            <li>Privacy-Policy</li>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Watch List</li>
          </ul>
          <p>© 2022 STREAMIT. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, Streamit Inc. Duplication and copy of this is strictly prohibited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
