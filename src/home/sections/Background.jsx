
import React from "react";
import { Typography,Grid } from "@material-ui/core";
import { useEffect } from "react";
const Background = () => {
  // Inside the useEffect of your Header component
useEffect(() => {
  const link = document.createElement("link");
  link.href = process.env.PUBLIC_URL + "/assets/styles/Contact.css";
  link.rel = "stylesheet";
  document.head.appendChild(link);

  return () => {
    document.head.removeChild(link); // Clean up on component unmount
  };
}, []);

  return (
    <div className="background-container">
       <h2 className="contact-us-text">Contact Us</h2>

{/* Card Container */}
<div className="card-container">
  {/* Card 1 */}
  <div className="card">
    <div className="card-content">
      <p className="typography-bold">SkylarkLabsInc</p>
      <p className="typography-regular">www.skylarklabs.ai</p>
      <p className="typography-regular1">www.skylarklabsgov.com</p>
      <p className="typography-regular1">Amarjoth Singh</p>
      <p className="typography-regular1">Email: info2skylarklabs.ai</p>
      <p className="typography-regular1">Phone: (415) 609-3633</p>
    </div>
  </div>

        {/* Card 2 */}
        <div className="card card-2">
          <img
            src="/images/mail.png" // Replace with your image path
            alt="Card Image"
            className="card-image"
          />
          <div className="card-heading">
            <span className='spanFirstWordStyle'>Get in Touch </span>with Us
          </div>
          <button className="send-email-button">
            SEND E-MAIL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Background;

