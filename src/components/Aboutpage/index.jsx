import { Container } from "@mui/material"
import React from "react"
import { Outlet } from "react-router-dom"
import AboutNavbar from "./components/AboutNavbar"
import CompanyProfile from "./components/CompanyProfile"
import Overview from "./components/Overview"
import Whatcanwedo from "./components/Whatcanwedo"

const AboutUsPage = () => {
  return (
    <Container sx={{ mt: "80px" }}>
      <AboutNavbar />
      <Outlet />
    </Container>
  )
}

export default AboutUsPage
