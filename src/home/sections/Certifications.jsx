
// import React, { useState, useEffect, useCallback } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Dialog, DialogActions, Button, Grid } from "@material-ui/core";
// import HelpingForm from "./HelpingForm";

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const location = useLocation();
//   const [headerClass, setHeaderClass] = useState("");

//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   const handleScroll = useCallback(() => {
//     const headerClass = window.scrollY > 30 ? "fixed" : "";
//     setHeaderClass(headerClass);
//   }, []);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", () => setWindowWidth(window.innerWidth));
//     };
//   }, [handleScroll]);

//   const handleClickOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const headerStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "0 15px",
//     position: "relative",
//     zIndex: 9999,
//     width:'100%',
//   boxSizing: "border-box",
//   left:0,

//   background: "linear-gradient(to right, #000000, #0A050F, #1E053B,#160C23,#150529,#000000)", // Gradient background
//   boxSizing: "border-box",
//     fontFamily: '"Poppins", sans-serif',
//     fontSize: "14px",
//     fontWeight: 400,
//     // color: "#b0b0b0",
//   };
  
  
  
//   // Styles for the body
//   const bodyStyle = {
//     // backgroundColor: "#10101b",
//     // color: "#b0b0b0",
//     fontWeight: 400,
//     margin: 0,
//     overflowX: "hidden",
//     padding: 0,
//     position: "relative",
//     width: "100%",
//     fontFamily: '"Poppins", sans-serif',
//     fontSize: "14px",
//     borderTop:'1px solid white',
//   };
  
//   const announcementBarStyle = {
//     textAlign: "center",
//     padding: "5px",
//     width: "100%",
//     boxSizing: "border-box",
//     background:'#130E0E',
//     color:'white',
//     borderBottom:'1 px solid white',
//     ZIndex:1000,
//     fontWeight:400,
//   };

//   const navLinkStyle = {
//     color: "#fff",
//     fontSize: windowWidth > 768 ? "16px" : "14px",
//     padding: "8px 12px",
//     fontFamily: 'futura-pt, sans-serif',
//     fontWeight: 100,
//     textAlign: 'center',
//     position: 'relative',
//     display: 'block',
   
//   };

//   return (
//     <>
//       <Dialog open={open} onClose={handleClose}>
//         <HelpingForm />
//         <DialogActions>
//           <Button onClick={handleClose} style={{ color: "black" }}>
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//       {!location.pathname.startsWith("/news") && location.pathname !== "/news" && location.pathname !== "/use-cases" && (
//   <div style={announcementBarStyle}>
//     <Link
//       to="/home"
//       style={{
//         textDecoration: "none",
//         textAlign: "center",
       
//       }}
//     >
//       <h3
//         style={{
//           margin: 0,
//           fontSize: windowWidth > 768 ? "12px" : "12px",
//           lineHeight: "1.5",
//           background: "transparent"
//         }}
//       >
//         Skylark Labs Selected Under the SBIR Phase 2 Program to Enhance UAS Detection and Tracking Capabilities for U.S. Air Force
//       </h3>
//     </Link>
//   </div>
// )}
// <div style={bodyStyle}>


//       <header style={headerStyle}>
//         <Grid container alignItems="center" justifyContent="space-between">
//           <Grid item>
//             <Link to="/" style={{ display: "flex", alignItems: "center", marginLeft: "50px" }}>
//               <img src="/images/White-Skylark-Labs-logo.png" alt="Skylark Labs Logo" style={{ width: "200px" }} />
//             </Link>
//           </Grid>
//           <Grid item>
//             <nav style={navLinkStyle}>
//               <ul style={{ listStyleType: "none", display: "flex", margin: 0, padding: 0 }}>
//                 <li style={{ margin: "0 20px" }}>
//                   <Link to="/home" style={navLinkStyle}>HOME</Link>
//                 </li>
//                 <li style={{ margin: "0 20px" }}>
//                   <Link to="/capabilities" style={navLinkStyle}>CAPABILITIES</Link>
//                 </li>
//                 <li style={{ margin: "0 20px" }}>
//                   <Link to="/aboutplatform" style={navLinkStyle}>DEMO</Link>
//                 </li>
//                 <li style={{ margin: "0 20px" }}>
//                   <Link to="/performance" style={navLinkStyle}>PAST PERFORMANCE</Link>
//                 </li>
//                 <li style={{ margin: "0 20px" }}>
//                   <Link to="/contact" style={navLinkStyle}>CONTACT</Link>
//                 </li>
//               </ul>
//             </nav>
//           </Grid>
//           <Grid item>
//             <Link to="/" style={{ display: "flex", alignItems: "center",marginRight:'60px'}}>
//               <img src="/images/ufscr-logo.png" alt="USFCR Logo" style={{ width: "90px" }} />
//             </Link>
//           </Grid>
//         </Grid>
//       </header>
//       </div>

//     </>
//   );
// };

// export default Header;