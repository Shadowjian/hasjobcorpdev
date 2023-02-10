import { Menu as MenuIcon } from "@mui/icons-material"
import { AppBar, Toolbar, Typography, styled, Menu, Avatar } from "@mui/material"
import { Box } from "@mui/system"
import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import LogoGif from "../../assets/images/hasolution.png";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
  })

  const MenuBox = styled(Box)({
    display: "flex",
    justifyContent: "space-even",
    gap: "50px"
  })

  const MenuTypeItem = styled(Typography)({
    color: "white",

    "&:hover": {
      color: "#D8AE5E"
    },
    fontWeight: "100"
  })
  const MenuLogo = styled(Typography)({
    color: "white",
    fontWeight: "100"
  })
  const MenuTypeItem2 = styled(Typography)({
    color: "#0B3749",
    "&:hover": {
      color: "#D8AE5E",
      padding: "5px",
      backgroundColor: "#0B3749",
      borderRadius: "5px"
    },
    fontWeight: "bold",
    margin: "50px"
  })

  const [open, SetOpen] = useState(false)

  const navlinkStyles = ({isActive}) =>{
    return {
      backgroundColor: isActive ? 'orange' : '',
      borderRadius: isActive ? '10px' : '',
      padding: isActive ? '5px 15px' : '',
      
    }
  }

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "#0B3749", padding: "20px", opacity: "1"}}
      >
        <StyledToolbar>
          <Box>
            <NavLink to="/" >
              <Box sx={{display:"flex", flexDirection:"row", alignItems:"center"}}>
               <Avatar alt="hasolution" src={LogoGif} sx={{ width: 60, height: 60 }}/>
              <MenuLogo>ソリューション株式会社</MenuLogo>
              </Box>
             
            </NavLink>
          </Box>
          <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            <NavLink style={navlinkStyles} to="/">
              <MenuTypeItem>Home</MenuTypeItem>
            </NavLink>
            <NavLink style={navlinkStyles} to="careers">
              <MenuTypeItem>Career</MenuTypeItem>
            </NavLink>
            <NavLink style={navlinkStyles} to="recruitment">
              <MenuTypeItem>Recruitment Information</MenuTypeItem>
            </NavLink>
            <NavLink style={navlinkStyles} to="employers">
              <MenuTypeItem>Employers Information</MenuTypeItem>
            </NavLink>
            <NavLink style={navlinkStyles} to="about">
              <MenuTypeItem>About Company</MenuTypeItem>
            </NavLink>
            <NavLink style={navlinkStyles} to="contact-us">
              <MenuTypeItem>Inquiry</MenuTypeItem>
            </NavLink>
          </MenuBox>
          <MenuIcon
            sx={{
              color: "white",
              display: { xs: "block", sm: "block", md: "none" }
            }}
            onClick={() => SetOpen(!open)}
          />
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={() => SetOpen(!open)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
        >
          <Box sx={{ width: 350, height: "50vh", backgroundColor: "white" }}>
            <NavLink  to="/">
              <MenuTypeItem2>Home</MenuTypeItem2>
            </NavLink>
            <NavLink  to="careers">
              <MenuTypeItem2>Career</MenuTypeItem2>
            </NavLink>
            <NavLink  to="recruitment">
              <MenuTypeItem2>Recruitment Information</MenuTypeItem2>
            </NavLink>
            <NavLink  to="employers">
              <MenuTypeItem2>Employers Information</MenuTypeItem2>
            </NavLink>
            <NavLink  to="about">
              <MenuTypeItem2>About Company</MenuTypeItem2>
            </NavLink>
            <NavLink  to="contact-us">
              <MenuTypeItem2>Inquiry</MenuTypeItem2>
            </NavLink>
          </Box>
        </Menu>
      </AppBar>
    </>
  )
}

export default Navbar
