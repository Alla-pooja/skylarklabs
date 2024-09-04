import React, { useState, useEffect } from "react";
import Banner from "./home/sections/Banner";
import Header from "./Header";
import Selflearingai from "./home/sections/SelfLearning";
import Vendor from "./home/sections/Vendor";
const Homepage = () => {
  const [isInIndia, setIsInIndia] = useState(false);

  // Update document title using useEffect
  useEffect(() => {
    document.title = "Skylark Labs: Self-Learning AI to Foresee Emerging Threats";

    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const json = await res.json();
        setIsInIndia(json?.country_name === "India");
      } catch (err) {
        console.error("Error fetching location:", err);
        // Fallback behavior in case of an error
        setIsInIndia(false);
      }
    };

    fetchLocation();
  }, []);

  return (
    <div className="homepage-container">
      <div className="main-content">
        {/* Conditional rendering of Banner component */}
        {/* {isInIndia ? <BannerIndia /> : <Banner />} */}
           <Banner />
           <Selflearingai />
           <Vendor />
        {/* Centered title */}
      
      </div>
      
    </div>
  );
};

export default Homepage;
