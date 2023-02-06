import { Container } from "@mui/material"
import React from "react"
import { Outlet } from "react-router-dom"
import AboutNavbar from "./components/AboutNavbar"

const AboutUsPage = () => {
  return (
    <Container sx={{ mt: "80px" }}>
      <AboutNavbar />
      <Outlet />
    </Container>
  )
}

export default AboutUsPage
