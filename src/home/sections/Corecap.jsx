import React, { useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Backdrop } from "@material-ui/core";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  keyFeatures: {
    fontWeight: 400,
    color: '#b0b0b0',
    lineHeight: 'normal',
    boxSizing: 'border-box',
    border: '1px solid #e5e7eb1c',
    borderRadius: '8px',
    height: '100%',
    background: 'linear-gradient(0deg, hsla(0, 0%, 100%, .06), hsla(0, 0%, 100%, .06))',
    WebkitMask: 'linear-gradient(#fff, #fff) content-box content-box, linear-gradient(#fff, #fff)',
    padding: '15px',
    overflow: 'hidden',
    position: 'relative',
    fontSize: '12px',
    transition: 'transform 1.2s',

    '&:hover': {
      transform: 'translateY(-10px)',
    },

    '&::after': {
      background: 'radial-gradient(34.71% 34.71% at 56.45% 63.48%, #8a6cff 23.44%, rgba(138, 108, 255, 0) 72.92%)',
      filter: 'blur(32px)',
      willChange: 'transform',
      WebkitBackfaceVisibility: 'hidden',
      MozBackfaceVisibility: 'hidden',
      WebkitTransform: 'translateZ(0)',
      MozTransform: 'translateZ(0)',
      position: 'absolute',
      content: '""',
      zIndex: 0,
      bottom: '-100px',
      left: '-160px',
      width: '296px',
      height: '296px',
    }
  }
});

const Corecap = () => {
  useEffect(() => {
    const title = document.getElementById("mainTitle");
    if (title) {
      title.innerText = `Product Page: Self Learning AI - Turing is a cutting-edge AI suite tailored for Intelligence Organizations`;
    }

    const handleScroll = () => scrollCheck();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navOptions = useRef([]);
  const sections = useRef([]);

  const scrollCheck = () => {
    const offsetY = window.scrollY + 200;
    const addActiveClass = (option) => {
      navOptions.current.forEach((ele) => ele && ele.classList.remove("active"));
      option && option.classList.add("active");
    };

    for (let i = sections.current.length - 1; i >= 0; i--) {
      if (offsetY >= sections.current.current[i]?.offsetTop) {
        addActiveClass(navOptions.current[i]);
        break;
      }
    }
  };
  const classes = useStyles();
  // Styles
  const styles = {
    cardContainer: {
      background:'#080110',      
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      padding: "0",
      background: "linear-gradient(to right, #4F1D5A,#4C1D5A,#3D205A,#142152,#2A2157)", // Gradient background
      backdropfilter:'blur(10px)',
      height:'33.5em',
      backkground:'transparent',
      padding: "60px 0 60px 0",
    backgroundImage: "linear-gradient(to right, #601959, #4f1d5a, #3d205a, #2a2157, #142152)",
    position: "relative",
    zIndex: "9",
    },
    card: {
      backgroundColor: "rgba(217, 217, 217, 0.5)", // Semi-transparent background      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      color: "#fff",
      padding: "20px",
      display: "flex",
      alignItems: "center",
      marginBottom: "20px",
      height: "30%",
       minHeight: "100px", // Ensures a minimum height
      width:'70%',
     
    },
    image: {
      width: "100px",
      height: "100px",
      marginRight: "20px",
      borderRadius: "8px",
      objectFit: "cover",
    },
    title: {
      textAlign: "center",
      margin: "40px 0",
      color: "white",
      fontSize: "2em",
    },
    newSectionTitle: {
      fontSize: "3.5em",
      marginBottom: "40px",
      background: 'linear-gradient(45deg, #714DFF 46%, #9042B2 67%,#B39865 88%)',
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
   
    section: {
      padding: "40px 0",
      background:'#080110',    },
    imageContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
    },
    imageBox: {
      maxWidth: "400px",
      flex: "1",
      textAlign: "center",
    },
    imageBoxImg: {
      width: "100%",
      maxWidth: "100%",
      borderRadius: "15px",
    },
    spanFirstWordStyle: {
      background: 'linear-gradient(50deg, #3498DB 31.28%, #714DFF 77.97%)',
      WebkitBackgroundClip: "text", // Clip the gradient to the text
      WebkitTextFillColor: "transparent", // Make the rest of the text transparent
      fontWeight:'bold',
    },
  };

  return (
    <div className="content-below-banner">
      <section className="productoverviewblock" style={styles.cardContainer}>
        <div className="container">
          <Typography variant="h2" style={styles.title}>
            Core Competencies: Next-gen Features for Modern Intelligence
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                src: "images/custom.png",
                alt: "Feature 1 Image",
                title: "Advanced Analytics",
                description: "Gain insights with our powerful analytics toolset, allowing for real-time data processing.",
              },
              {
                src: "images/agile.png",
                alt: "Feature 2 Image",
                title: "Real-Time Monitoring",
                description: "Monitor activities in real-time with our advanced surveillance system that supports multiple camera feeds.",
              },
              {
                src: "images/prediction.png",
                alt: "Feature 3 Image",
                title: "AI-Powered Insights",
                description: "Utilize AI to predict and analyze patterns, providing deep insights and predictive intelligence.",
              },
              {
                src: "images/sensor.png",
                alt: "Feature 4 Image",
                title: "Customizable Dashboards",
                description: "Design your own dashboards and reports tailored to your specific needs and operational goals.",
              },
            ].map((card, index) => (
              <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
                <Card style={styles.card}>
                  <Box component="img" src={card.src} alt={card.alt} style={styles.image} />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {card.title}
                    </Typography>
                    <Typography variant="body2">{card.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </section>

      <section style={styles.section}>
        <div className="container">
          <Typography variant="h3" style={styles.newSectionTitle}>
            Differentiators
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {[
              {
                title: "Improvement On Edge",
                description: "Identify and learn new information in real-time at the edge, continuously improving to ensure effectiveness in dynamic defense scenarios.",
              },
              {
                title: "Multi-Domain Adaptability",
                description: "Seamlessly operates across land, sea, and air domains, providing a unified solution for diverse operational environments.",
              },
              {
                title: "Cost Effective System",
                description: "Reduces costs and downtime by continuously updating in real-time, eliminating the need for frequent and expensive overhauls.",
              },
              {
                title: "Legacy Device Compatibility",
                description: "Our solution upgrades legacy devices with an AI layer, maximizing the value of existing hardware.",
              },
            ].map((card, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card className={classes.keyFeatures}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {card.title}
                    </Typography>
                    <Typography variant="body2">{card.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </section>

      <section style={styles.section}>
        <div className="container">
          <Typography variant="h1" style={styles.title}>
            Unlocking Different <span style={styles.spanFirstWordStyle} >Application</span>
          </Typography>
          <Box style={styles.imageContainer}>
            {[
              {
                src: "images/capabilities-card1.png",
                alt: "Feature 1 Image",
                title: "LAND: Emerging Threat Observation System (ETOS)",
              },
              {
                src: "images/capabilities-card2.png",
                alt: "Feature 2 Image",
                title: "SEA: Marine Reconnaissance System (MIRAS)",
              },
              {
                src: "images/capabilities-card3.png",
                alt: "Feature 3 Image",
                title: "AIR: AROS (Aerial Reconnaissance & Observation System)",
              }
            ].map((card, index) => (
              <Box key={index} style={styles.imageBox}>
                <Box component="img" src={card.src} alt={card.alt} style={styles.imageBoxImg} />
                <Typography variant="h6" style={{ color: "#fff", margin: "10px 0" }}>
                  {card.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </div>
      </section>
    </div>
  );
};

export default Corecap;
