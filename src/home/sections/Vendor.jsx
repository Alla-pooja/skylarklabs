
import React from 'react';
import { Button, List, ListItem, Typography, Box, Grid, Link } from '@mui/material';
const spanFirstWordStyle= {
  background: 'linear-gradient(50deg, #714dff, #9c83ff 31.28%, #2EA3FF 77.97%, #2EA3FF 95.64%)',
  WebkitBackgroundClip: "text", // Clip the gradient to the text
  WebkitTextFillColor: "transparent", // Make the rest of the text transparent
}
const wrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color:'black',
  background:'#080110',
};

const Vendor = () => {
  return (
    <div style={wrapperStyle}>
    <Box
      display="flex"
      justifyContent="space-between"
      color={'white'}
      p={4}
      width={'67%'}
      sx={{
        background: 'linear-gradient(45deg,black, #0E0319)', // Mixed color background
      }}
    >
      {/* Left Side with Button and List */}
      <Box display="flex" flexDirection="column" alignItems="flex-start" width="50%"  paddingLeft={'30px'}>
        {/* Modified Button with increased width and link style */}
        <Button
          variant="text" // Use text variant for link style
          style={{
            marginBottom: '20px',
            borderRadius: '50px',
            color: 'white',
            width: '200px', // Increase button width
            border : '1px solid white',
          }}
        >
          <Link href="/" underline="none" color="inherit" style={{fontSize:'19px'}}>
           <span style={spanFirstWordStyle}>Vendor</span> Profile
          </Link>
        </Button>

        {/* List Items with Bullet Points */}
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>
            <Typography variant="body1">UEI: XLP2EG2GALY1</Typography>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <Typography variant="body1">UEI: XLP2EG2GALY1

CAGE: 9JJV8

</Typography>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <Typography variant="body1">Primary NAICS: 561621 - Security Systems Services (except Locksmiths)</Typography>
          </ListItem>
        </List>
      </Box>

      {/* Right Side with Logo */}
      <Box display="flex" justifyContent="flex-end" alignItems="center" width="50%" pr={2}>
        <Grid container alignItems="center" justifyContent="flex-end">
          <Grid item>
            <Link to="/" style={{ display: "flex", alignItems: "center", paddingRight: "160px" }}>
              <img
                src="/images/sam-logo.png"
                alt="Src Logo"
                style={{ width: "180px" }}
              />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
    </div>
  );
};

export default Vendor;
