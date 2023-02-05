
import {  Menu as MenuIcon } from "@mui/icons-material";
import {AppBar, Toolbar, Typography, styled, Menu  } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const MenuBox = styled(Box)({
    display: "flex",
    justifyContent: "space-even",
    gap: "50px",
  })

  const MenuTypeItem = styled(Typography)({
    color:"white",
      "&:hover": {
        color: '#D8AE5E'
      },
      "&:active": {
        color: '#D8AE5E'
      },  
    fontWeight: '100',
   
  })
  const MenuTypeItem2 = styled(Typography)({
    color:"#0B3749",
      "&:hover": {
        color: '#D8AE5E',
        padding:'5px',
        backgroundColor: '#0B3749',
        borderRadius: '5px',
      },
      "&:active": {
        color: '#D8AE5E'
      },  
    fontWeight: 'bold',
    margin: "50px"
   
  })

  const [open, SetOpen] = useState(false)

  return (
    <AppBar position="sticky" sx={{backgroundColor:"#0B3749", padding:"20px",  opacity: "1",}}>
      <StyledToolbar>
        <Box >
          <Typography>
          ＨＡソリューション株式会社
        </Typography>
        </Box>
        <MenuBox sx={{display:{xs:'none', sm:'none', md:'flex'}}}>
        <Link to="/">
         <MenuTypeItem>Home</MenuTypeItem>
         </Link>
         <Link to="careers">
         <MenuTypeItem>Career</MenuTypeItem>
         </Link>
         <Link to="recruitment">
         <MenuTypeItem>Recruitment Information</MenuTypeItem>
         </Link>
         <Link to="about">
         <MenuTypeItem>About Company</MenuTypeItem>
         </Link>
         <Link to="contact-us">
         <MenuTypeItem>Inquiry</MenuTypeItem>   
         </Link>   
        </MenuBox>
        <MenuIcon sx={{color: "white", display:{xs:'block', sm:'block', md:'none'}, }} onClick={() => SetOpen(!open)} />       
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={()=>SetOpen(!open)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box sx={{width:350, height:"50vh", backgroundColor:"white"}}>
        <Link to="/">
         <MenuTypeItem2>Home</MenuTypeItem2>
         </Link>
         <Link to="careers">
         <MenuTypeItem2>Career</MenuTypeItem2>
         </Link>
         <Link to="recruitment">
         <MenuTypeItem2>Recruitment Information</MenuTypeItem2>
         </Link>
         <Link to="about">
         <MenuTypeItem2>About Company</MenuTypeItem2>
         </Link>
         <Link to="contact-us">
         <MenuTypeItem2>Inquiry</MenuTypeItem2>   
         </Link>   
        
        </Box>  
    
      </Menu>
    </AppBar>
  );
};

export default Navbar;

// import { AppBar, Stack, Toolbar, Typography  } from "@mui/material"
// import { Container } from "@mui/system"
// import React from "react"
// import { Link } from "react-router-dom"

// export default function Navbar() {
//   return (
//     <AppBar position="sticky">
//       <Toolbar sx={{ backgroundColor: "white" }}>
//         <Container >
//           <Stack color="primary" direction="horizontal" justifyContent="space-between">
//             <Typography color="gray">Logo</Typography>
//             <Stack direction="horizontal" gap={2} justifyContent="flex-end">
//               <Link to="/">
//                 <Typography>Home</Typography>
//               </Link>
//               <Link to="careers">
//                 <Typography>Careers</Typography>
//               </Link>
//               <Link to="recruitment">
//                 <Typography>Recruitment Information</Typography>
//               </Link>
//               <Link to="about">
//                 <Typography>About Us</Typography>
//               </Link>
//               <Link to="contact-us">
//                 <Typography>Contact Us</Typography>
//               </Link>
//             </Stack>
//           </Stack>
//         </Container>
//       </Toolbar>
//     </AppBar>
//   )
// }
