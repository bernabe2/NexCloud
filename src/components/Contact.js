import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <p>Para más información, comunícate con Carlos Alexis del 5B, o con la Universidad Tecnológica UTT</p>
      <div className="social-icons">
        <a href="https://wa.me/2381982186" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={32} /></a>
        <a href="https://www.facebook.com/profile.php?id=61554243517082" target="_blank" rel="noopener noreferrer"><FaFacebook size={32} /></a>
        <a href="https://www.instagram.com/ale.__bs/?next=%2Fa" target="_blank" rel="noopener noreferrer"><FaInstagram size={32} /></a>
      </div>
      <style jsx>{`
        .contact-container {
          text-align: center;
          margin-top: 50px;
        }

        .social-icons {
          margin-top: 20px;
        }

        .social-icons a {
          margin-right: 20px;
          color: #333;
          transition: color 0.3s ease;
        }

        .social-icons a:hover {
          color: #007bff;
        }
      `}</style>
    </div>
  );
};

export default Contact;
