
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const Bannercapab = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 767) {
      setHeight("auto");
    } else {
      setHeight(window.innerHeight);
    }
  }, [height]);

  const animate = (index, count) => {
    const texts = [""];
    
    function sleep(delay) {
      return new Promise((resolve) => setTimeout(resolve, delay));
    }

    const typeWrite = async () => {
      if (count === texts.length) {
        count = 0;
      }
      let currentWord = texts[count];
      let currentLetter = currentWord.slice(0, ++index);
      const typing = document.querySelector(".typing");
      const mobtyping = document.querySelector(".mobile-typing");
      
      if (typing) typing.textContent = currentLetter;
      if (mobtyping) mobtyping.textContent = currentLetter;

      if (index === currentWord.length) {
        await sleep(1500);
        while (index > 0) {
          currentLetter = currentWord.slice(0, --index);
          if (typing) typing.textContent = currentLetter;
          if (mobtyping) mobtyping.textContent = currentLetter;
          await sleep(50);
        }
        count++;
        index = 0;
        await sleep(500);
      }
      setTimeout(typeWrite, Math.random() * 200 + 50);
    };
    typeWrite();
  };

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        animate(0, 0);
      }, 8000);
      setLoading(false);
    }
  }, [loading]);

  // Inline styles
  const bannerContainerStyle = {
    position: "relative",
    overflow: "hidden",
    height: "100vh", // Adjust height as needed
    background:'#080110',  };

  const bannerContentStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    textAlign: "center",
    zIndex: 1,
  };

  const contentBoxStyle = {
    maxWidth: "800px", // Adjust as needed
    padding: "20px",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.6)", // Black shadow for better visibility
    borderRadius: "8px", // Optional: Rounded corners
    margin: "0 auto",
  };

  const titleStyle = {
    fontSize: "2rem", // Adjust font size as needed
    textDecoration: "none",
    color: "white", // Ensure text is visible
    display: "inline-block",
    position: "relative",
    padding: "10px",
  };
  const secondtitle={
    fontSize:"17px",
    position:'relative',
    display:'inline-block',

  }

  const typingStyle = {
    fontSize: "1.5rem", // Adjust as needed
    color: "white", // Ensure text is visible
    marginTop: "10px",
  };

  return (
    <div style={bannerContainerStyle}>
      <section className="mainbanner banner_part bgnone">
        <div className="bannerimgblock">
          <ReactPlayer
            style={{
              zIndex: "-1",
              pointerEvents: "none",
            }}
            controls={false}
            volume={0}
            width="100%"
            height="100%"
            loop={true}
            muted={true}
            playing={true}
            url="https://d1nbq27kwttg28.cloudfront.net/blog/Self-learling.mp4"
          />
          <div className="bannercontent homebanner" style={bannerContentStyle}>
            <div className="container">
              <div className="contentbox homepage" style={contentBoxStyle}>
                <h1 className="titlehome" style={titleStyle}>
                  
                    CAPABILITIES STATEMENT
                  
                </h1>  
                <br />
                <h3 className="titlehome" style={secondtitle}>Delivering Advanced Solutions for Enhanced Operational Efficiency and <br /> Strategic Advantage</h3>
                <div className="intro">
                  <div className="typing" style={typingStyle}></div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="MobileBanner">
        <div className="container">
          <div className="contentbox homepagemobile" style={contentBoxStyle}>
            <h1>
              <a href="self-learning-ai">
                Self-Learning AI <br /> To Foresee Emerging Threats
              </a>
            </h1>
            <div className="intro">
              <div className="mobile-typing" style={typingStyle}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannercapab;
