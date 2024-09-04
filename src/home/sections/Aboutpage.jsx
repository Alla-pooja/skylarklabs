
// import React from "react";
// import { Box, Card, CardContent, Typography, Button } from "@mui/material";
// const Demostyle = {
//   background: 'radial-gradient(231.94% 231.94% at 50% 100%, #8a6cff 0, rgba(53, 41, 128, 0) 25.24%), linear-gradient(180deg, rgba(243, 238, 255, 0), rgba(243, 238, 255, .04)), rgba(147, 130, 255, .01)',
//   boxShadow: ' 0 0 0 0 rgba(16, 0, 51, .4), 0 2px 5px 0 rgba(16, 0, 51, .39), 0 8px 8px 0 rgba(16, 0, 51, .34), 0 19px 11px 0 rgba(16, 0, 51, .2), 0 34px 14px 0 rgba(16, 0, 51, .06), 0 53px 15px 0 rgba(16, 0, 51, .01), inset 0 0 12px 0 hsla(0, 0%, 100%, .08), inset 0 -8px 32px 0 #1e0d49',
//   borderRadius: '10px',
//   textalign: 'center',
//   lineHeight: '20px',
//   color: '#fff',
//   fontWeight: '500',
//   position: 'relative',
//   padding: '8px 17px',
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   marginTop: "20px",
//   marginLeft: "70px",


// }

// const AboutPage = () => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "20px",
//         background:'#080110',        minHeight: "100vh", // Full viewport height
//         width: "100%", // Full width
//         boxSizing: "border-box", // Include padding in width calculations
//       }}
//     >
//       {/* Heading */}
//       <Typography
//         variant="h2"
//         sx={{
//           fontWeight: "bold",
//           marginBottom: "20px",
//           textAlign: "center",
//           fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, // Responsive font size
//           background: "linear-gradient(90deg, #714DFF, #3992DE,#FFFFFF)", // Linear gradient
//           WebkitBackgroundClip: "text", // Clip the gradient to the text
//           WebkitTextFillColor: "transparent", // Make the rest of the text transparent
//           fontWeight: "bold", // Bold font
//           textAlign: "center", // Center the heading
//           dispaly: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',

//         }}
//       >
//         About the Platform
//       </Typography>
//       <Typography
//         variant="body1"
//         sx={{
//           maxWidth: "800px",
//           textAlign: "center",
//           marginBottom: "40px",
//           color: "#fff", // Slightly lighter color for the description
//           fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" }, // Responsive font size

//         }}
//       >
//         Our platform offers a comprehensive suite of tools designed to enhance your productivity and streamline your workflow. With user-friendly interfaces and advanced functionalities, we aim to provide a seamless experience that meets your needs and exceeds your expectations.
//       </Typography>

//       {/* Container for the Cards */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column", // Stack cards vertically
//           alignItems: "center",
//           gap: "20px", // Space between cards
//           width: "100%", // Ensure cards take full width
//           maxWidth: "1800px", // Limit the maximum width of the card container
//           justifyContent:'center',
//           marginRight:'12%',
//         }}
//       >

//         <Box sx={{ display: "flex", flexDirection: "column", gap: "40px", mt: 5 }}>
//           {/* First Box */}
//           <Box sx={{ display: "flex", gap: "20px", alignItems: "center", border: '2px solid #3C3C77', width:'120%' ,borderRadius:'20px',backgroundColor:'#15152E'}}>
//             <Box sx={{ flex: 1.2 }}>
//               <img src="images/card1.png" alt="" style={{ width: "500px", height: "auto" ,marginLeft:'30px',marginTop:'20px',marginBottom:'20px'}} />
//             </Box>
//             <Box sx={{ flex: 1 }}>
//               <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff", fontSize: "19px" }}>
//                 LAND PRODUCT LINE <br /> ETOS (Emerging Threat <br /> Observation and detection System)
//               </Typography>
//               <Typography variant="body2" sx={{ color: "#fff", textAlign: "justify", maxWidth: "350px" }}>
//                 Detects land-based threats by integrating data from CCTV cameras, radars, and audio sensors to provide real-time situational awareness. It's designed for perimeter security at borders, military bases, and government buildings. TRL: 6+
//               </Typography>
//               <Button
//                 variant="contained"
//                 style={Demostyle}
//                 onClick={() => {
//                   // Your click handler logic here
//                 }}
//               >
//                 Book a Demo
//               </Button>

//             </Box>

//           </Box>

//           <Box sx={{ display: "flex", gap: "20px", alignItems: "center", border: '2px solid #3C3C77', width:'120%',borderRadius:'20px',backgroundColor:'#15152E' }}>
//             <Box sx={{ flex: 1 ,marginLeft:'30px'}}>
//               <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff", fontSize: "19px" }}>
//                 Sea product Line <br /> MIRAS (Marine<br /> Reconnaissance System)
//               </Typography>
//               <Typography variant="body2" sx={{ color: "#fff", textAlign: "justify", maxWidth: "350px" }}>
//                 Uses cameras and radars to detect underwater and surface targets from CCTV cameras and radars, enhancing situational awareness for maritime operations. It features modules for maritime border monitoring, port and harbor security,illegal fishing detection, and search and rescue.TRL: 6+
//               </Typography>
//               <Button
//                 variant="contained"
//                 style={Demostyle}


//                 onClick={() => {
//                   // Your click handler logic here
//                 }}
//               >
//                 Book a Demo
//               </Button>
//             </Box>
//             <Box sx={{ flex: 1.2 ,marginTop:'20px',marginBottom:'20px'}}>
//               <img src=
//                 "images/card2.png" alt="" style={{ width: "500px", height: "auto"}} />
//             </Box>

//           </Box>

//           {/* Second Box */}
//           <Box sx={{ display: "flex", gap: "20px", alignItems: "center", border: '2px solid #3C3C77', width:'120%',borderRadius:'20px',backgroundColor:'#15152E' }}>
//             <Box sx={{ flex: 1.2 ,marginLeft:'30px',marginTop:'20px',marginBottom:'20px'}}>
//               <img src="images/card3.png" alt="" style={{ width: "490px", height: "auto"}} />
//             </Box>
//             <Box sx={{ flex: 1 }}>
//               <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff", fontSize: "19px" }}>
//                 Air Product Line <br /> AROS (Aerial Reconnaisance & <br /> Observation System)
//               </Typography>
//               <Typography variant="body2" sx={{ color: "#fff", textAlign: "justify", maxWidth: "350px" }}>
//                 Is a dual-capability system that monitors both airborne threats and empowers friendly airborne platforms to observe ground activities for situational awareness. It detects threats like rogue drones while also enabling aerial surveillance of ground spaces. Applicatiobs include counter-UAS, friend or foe drone identification, and monitoring drone flight patterns near bases and government buildings
//               </Typography>
//               <Button
//                 variant="contained"
//                 style={Demostyle}
//                 onClick={() => {
//                   // Your click handler logic here
//                 }}
//               >
//                 Book a Demo
//               </Button>
//             </Box>

//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default AboutPage;
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useEffect } from "react";
const AboutPage = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = process.env.PUBLIC_URL + "/assets/styles/About.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  
    return () => {
      document.head.removeChild(link); // Clean up on component unmount
    };
  }, []);
  return (
    <Box className="about-page-container">
      {/* Heading */}
      <Typography variant="h2" className="about-heading">
        About the Platform
      </Typography>
      <Typography variant="body1" className="about-description">
        Our platform offers a comprehensive suite of tools designed to enhance
        your productivity and streamline your workflow. With user-friendly
        interfaces and advanced functionalities, we aim to provide a seamless
        experience that meets your needs and exceeds your expectations.
      </Typography>

      {/* Container for the Cards */}
      <Box className="card-container">
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: "40px", mt: 5 }}
        >
          {/* First Box */}
          <Box className="card-box">
            <Box sx={{ flex: 1.2 }}>
              <img
                src="images/card1.png"
                alt=""
                className="card-image"
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" className="card-title">
                LAND PRODUCT LINE <br /> ETOS (Emerging Threat <br />
                Observation and detection System)
              </Typography>
              <Typography variant="body2" className="card-content">
                Detects land-based threats by integrating data from CCTV
                cameras, radars, and audio sensors to provide real-time
                situational awareness. It's designed for perimeter security at
                borders, military bases, and government buildings. TRL: 6+
              </Typography>
              <Button
                variant="contained"
                className="book-demo-button"
                onClick={() => {
                  // Your click handler logic here
                }}
              >
                Book a Demo
              </Button>
            </Box>
          </Box>

          {/* Second Box */}
          <Box className="card-box">
            <Box sx={{ flex: 1, marginLeft: "40px" }}>
              <Typography variant="h6" className="card-title">
                Sea product Line <br /> MIRAS (Marine
                <br /> Reconnaissance System)
              </Typography>
              <Typography variant="body2" className="card-content">
                Uses cameras and radars to detect underwater and surface targets
                from CCTV cameras and radars, enhancing situational awareness
                for maritime operations. It features modules for maritime border
                monitoring, port and harbor security, illegal fishing detection,
                and search and rescue. TRL: 6+
              </Typography>
              <Button
                variant="contained"
                className="book-demo-button"
                onClick={() => {
                  // Your click handler logic here
                }}
              >
                Book a Demo
              </Button>
            </Box>
            <Box sx={{ flex: 1.2, marginTop: "20px", marginBottom: "20px" }}>
              <img
                src="images/card2.png"
                alt=""
                className="card-image"
              />
            </Box>
          </Box>

          {/* Third Box */}
          <Box className="card-box">
            <Box
              sx={{ flex: 1.2, marginLeft: "30px", marginTop: "20px", marginBottom: "20px" }}
            >
              <img
                src="images/card3.png"
                alt=""
                className="card-image"
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" className="card-title">
                Air Product Line <br /> AROS (Aerial Reconnaissance & <br />
                Observation System)
              </Typography>
              <Typography variant="body2" className="card-content">
                Is a dual-capability system that monitors both airborne threats
                and empowers friendly airborne platforms to observe ground
                activities for situational awareness. It detects threats like
                rogue drones while also enabling aerial surveillance of ground
                spaces. Applications include counter-UAS, friend or foe drone
                identification, and monitoring drone flight patterns near bases
                and government buildings.
              </Typography>
              <Button
                variant="contained"
                className="book-demo-button"
                onClick={() => {
                  // Your click handler logic here
                }}
              >
                Book a Demo
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutPage;
