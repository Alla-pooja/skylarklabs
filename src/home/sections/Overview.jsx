import React, { useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";

const Overview = () => {
  useEffect(() => {
    const title = document.getElementById("mainTitle");
    if (title) {
      title.innerText = `Product Page: Self Learning AI - Turing is a cutting-edge AI suite tailored for Intelligence Organizations`;
    }

    const handleScroll = () => {
      scrollCheck();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navOptions = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const sections = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  const scrollCheck = () => {
    const addActiveClass = (option) => {
      if (!option || !option.current) return;
      navOptions
        .filter((ele) => ele !== option)
        .forEach((ele) => {
          if (ele.current) {
            ele.current.classList.remove("active");
          }
        });
      if (option.current) {
        option.current.classList.add("active");
      }
    };

    const offsetY = window.scrollY + 200;

    const checkSec = (ele) => ele && ele.current && offsetY >= ele.current.offsetTop;

    if (checkSec(sections[5])) addActiveClass(navOptions[5]);
    else if (checkSec(sections[4])) addActiveClass(navOptions[4]);
    else if (checkSec(sections[3])) addActiveClass(navOptions[3]);
    else if (sections[2].current && offsetY >= sections[2].current.offsetTop) addActiveClass(navOptions[2]);
    else if (sections[1].current && offsetY >= sections[1].current.offsetTop) addActiveClass(navOptions[1]);
    else if (sections[0].current && offsetY >= sections[0].current.offsetTop) addActiveClass(navOptions[0]);
  };

  // Inline styles
  const cardContainerStyle = {
    padding: '0',
    backgroundColor: '#150F1D',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    display: 'flex',
  };

  const imageLeftBlockStyle = {
    paddingRight: '1px',
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  };

  const homeRightBlockStyle = {
    padding: '20px',
  };

  const h2Style = {
    marginTop: '0',
    fontSize: '1.5em',
    color: 'white',
  };

  const pStyle = {
    fontSize: '20px',
    lineHeight: '1.6',
    color: 'white',
  };

  const spanFirstWordStyle= {
    background: 'linear-gradient(50deg, #714dff, #9c83ff 31.28%, #2EA3FF 77.97%, #2EA3FF 95.64%)',
    WebkitBackgroundClip: "text", // Clip the gradient to the text
    WebkitTextFillColor: "transparent", // Make the rest of the text transparent
  }

  return (
    <>
      <div className="content-below-banner">
        <section className="productoverviewblock" style={cardContainerStyle}>
          <div className="container">
            <div className="card-content">
              <Grid container spacing={3}>
                {/* Image on the Left */}
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <div className="imageleft-block" style={imageLeftBlockStyle}>
                    <img
                      src="images/your-image.png" // Replace with your image path
                      alt="Feature Image"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover", // Maintain aspect ratio
                        borderRadius: "10px", // Optional: Add some border radius for styling
                      }}
                    />
                  </div>
                </Grid>

                {/* Text on the Right */}
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <div className="homeright-block" style={homeRightBlockStyle}>
                    <h2 style={h2Style}>
                      <span style={spanFirstWordStyle}>About</span> SkyLark Labs
                    </h2>
                    <p style={pStyle}>
                      Skylark Labs Inc. develops Dual-use Self-learning AI security products that proactively identify
                      known threats and continuously learn new, unanticipated threats. Our proprietary technology has
                      been used by several defenses (on drones, helicopters, satellites) and commercial organizations to
                      enhance safety, security, and productivity applications. Most recently, non-profits in India used
                      our technology to rescue 13 trafficked children from brothels in India.
                    </p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Overview;
