import { AppBar, Typography } from "@mui/material"
import React from "react"
import { NavLink } from "react-router-dom"

const AboutNavbar = () => {
//   let activeStyle = { backgroundColor: "#d8ae5e" }
  // let activeClassName = "nav-link"
  const navlinkStyles = ({isActive}) =>{
    return {
      backgroundColor: isActive ? 'orange' : '',
      borderRadius: isActive ? '10px' : '',
      padding: isActive ? '5px 15px' : '',
    }
  }

  return (
    <AppBar
      sx={{
        backgroundColor: "#0B3749",
        p: "10px 15px",
        mt: "105px",
        flexDirection: "row",
        justifyContent: "center",
        gap: "100px",
        display:{xs:"none", md:"flex", sm:"flex"}
      }}
    >
      <NavLink to="profile" style={navlinkStyles}>
        <Typography color="white">Company Profile</Typography>
      </NavLink>
      <NavLink
        to="" >
        <Typography color="white">Overview</Typography>
      </NavLink>
      <NavLink to="whatwedo" style={navlinkStyles}>

        <Typography color="white">What Can We Do</Typography>
      </NavLink>
    </AppBar>
  )
}

export default AboutNavbar

//TODO onload should set class' company profile to active
