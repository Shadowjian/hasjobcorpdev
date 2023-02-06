import { AppBar, Typography } from "@mui/material"
import React from "react"
import { NavLink } from "react-router-dom"

const AboutNavbar = () => {
  let activeStyle = { backgroundColor: "#d8ae5e" }
  // let activeClassName = "nav-link"

  return (
    <AppBar
      sx={{
        backgroundColor: "#0B3749",
        p: "10px",
        mt: "105px",
        flexDirection: "row",
        justifyContent: "center",
        gap: "100px"
      }}
    >
      <NavLink to="profile" className="nav-link">
        <Typography>Company Profile</Typography>
      </NavLink>
      {/* <NavLink to="overview" className="nav-link"> */}
      <NavLink
        to="overview"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <Typography>Overview</Typography>
      </NavLink>
      <NavLink to="whatwedo" className="nav-link">
        {/* <NavLink
        to="whatwedo"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      > */}
        <Typography>What Can We Do</Typography>
      </NavLink>
    </AppBar>
  )
}

export default AboutNavbar
