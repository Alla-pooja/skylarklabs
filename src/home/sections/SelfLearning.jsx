
import React, { useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";
const Selflearingai = () => {
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
  // Inside the useEffect of your Header component
useEffect(() => {
  const link = document.createElement("link");
  link.href = process.env.PUBLIC_URL + "/assets/styles/Selflearning.css";
  link.rel = "stylesheet";
  document.head.appendChild(link);

  return () => {
    document.head.removeChild(link); // Clean up on component unmount
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

  return (
    <>
      <div className="content-below-banner">
        <div className="centered-text">
          <span className="span-first-word">Self-Learning AI</span>, Motion Analysis, Sensor Fusion, BVLOS<br />Threats Prediction, Explainable AI
        </div>
        <div className="centered-text-sec">
          "DUAL-USE SELF-LEARNING AI TO FORESEE EMERGING THREATS"
        </div>
        <div className="productoverviewblock">
          <div className="container">
            <div className="card-content">
              <Grid container spacing={6}>
                <Grid item xs={6} sm={6} md={6} lg={6}>
                  <div className="homeright-block">
                    <h2>
                      <span className="span-first-word">About</span> SkyLark Labs
                    </h2>
                    <p>
                      Skylark Labs Inc. develops Dual-use Self-learning AI security products that proactively identify known threats and continuously learn new, unanticipated threats. Our proprietary technology has been used by several defenses (on drones, helicopters, satellites) and commercial organizations to enhance safety, security, and productivity applications. Most recently, non-profits in India used our technology to rescue 13 trafficked children from brothels in India.
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <div className="videoleftblock">
                    <ReactPlayer
                      controls={true}
                      playsinline
                      volume={0}
                      width="100%"
                      height="100%"
                      loop={true}
                      muted={false}
                      playing={true}
                      stopOnUnmount={true}
                      url="https://www.youtube.com/embed/K0nzQoT6Ymw?si=IA10l8er0KgO74P4"
                    />
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Selflearingai;
