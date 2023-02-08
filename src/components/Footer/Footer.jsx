
import { Facebook } from '@mui/icons-material'
import { Box, Container, Link, Paper,  Typography } from '@mui/material'
import { NavLink } from "react-router-dom"
import React from 'react'

const Footer = () => {

  const navlinkStyle = ()=>{
    return {
      color:"white"
    }
}




  return (
    <Paper sx={{marginTop: 'calc(10% + 60px)',
    width: '100%',
    position: 'relative',
    bottom: 0,
    backgroundColor: "#0B3749" }} component="footer" square variant="outlined">
      <Container maxWidth="lg" >
        <Box sx={{display: 'flex', justifyContent:'space-between',flexDirection:{xs:"column", sm:"column", md:"row"},textAlign:"center" }}  my="30px" color="#fff">
          
          <Box width="300px">
            <Typography>ＨＡソリューション株式会社</Typography>
            <Typography>私たちは、求職者とその分野のトップ雇用者をつなぐことに専念している会社です。</Typography>
            

          </Box>
    
          <Box>
            <NavLink style={navlinkStyle} to="careers">
            <Typography>Careers</Typography>
            </NavLink>
            <NavLink style={navlinkStyle} to="recruitment">
            <Typography>Recruitment Information</Typography>
            </NavLink>
            <NavLink style={navlinkStyle} to="contact-us">
            <Typography>Inquiries</Typography>
            </NavLink>
          </Box>
          <Box>
            <NavLink style={navlinkStyle} to="about">
          <Typography>About the Company</Typography>
          </NavLink>
          <Box marginLeft="20px">
            <NavLink style={navlinkStyle} to="about/profile">
            <Typography>Company Profile</Typography>
            </NavLink>
            <NavLink style={navlinkStyle} to="about/whatwedo">
            <Typography>What can we do?</Typography>
            </NavLink>
            </Box>
          </Box>
          <Box >
            <Typography>Socials</Typography>
            <Box display="flex" justifyContent="center" gap={1}>
            <Link  href="https://www.facebook.com/profile.php?id=100089559129010"><Facebook/></Link>
            </Box>
          </Box>
        </Box>
        <Typography align='center' fontSize="15px" color="#fff">
            Copyright ©2023. ＨＡソリューション株式会社
          </Typography>
      
      </Container>
    </Paper>
  )
}


export default Footer





