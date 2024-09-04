import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Dialog, DialogActions, Button, Grid } from "@material-ui/core";
import HelpingForm from "./HelpingForm";
const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [headerClass, setHeaderClass] = useState("");

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleScroll = useCallback(() => {
    const headerClass = window.scrollY > 30 ? "fixed" : "";
    setHeaderClass(headerClass);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", () => setWindowWidth(window.innerWidth));
    };
  }, [handleScroll]);
  // Inside the useEffect of your Header component
useEffect(() => {
  const link = document.createElement("link");
  link.href = process.env.PUBLIC_URL + "/assets/styles/Header.css";
  link.rel = "stylesheet";
  document.head.appendChild(link);

  return () => {
    document.head.removeChild(link); // Clean up on component unmount
  };
}, []);


  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <HelpingForm />
        <DialogActions>
          <Button onClick={handleClose} style={{ color: "black" }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      {!location.pathname.startsWith("/news") && location.pathname !== "/news" && location.pathname !== "/use-cases" && (
        <div className="announcement-bar">
          <Link to="/home">
            <h3>
              Skylark Labs Selected Under the SBIR Phase 2 Program to Enhance UAS Detection and Tracking Capabilities for U.S. Air Force
            </h3>
          </Link>
        </div>
      )}
      <div className="body">
        <header className="head">
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Link to="/" className="header-logo">
                <img src="/images/White-Skylark-Labs-logo.png" alt="Skylark Labs Logo" />
              </Link>
            </Grid>
            <Grid item>
              <nav>
                <ul className="nav-list">
                  <li className="nav-item">
                    <Link to="/home" className="nav-link">HOME</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/capabilities" className="nav-link">CAPABILITIES</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/aboutplatform" className="nav-link">DEMO</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/performance" className="nav-link">PAST PERFORMANCE</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">CONTACT</Link>
                  </li>
                </ul>
              </nav>
            </Grid>
            <Grid item>
              <Link to="/" className="usfcr-logo">
                <img src="/images/ufscr-logo.png" alt="USFCR Logo" />
              </Link>
            </Grid>
          </Grid>
        </header>
      </div>
    </>
  );
};

export default Header;
