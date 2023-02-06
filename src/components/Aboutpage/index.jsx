
import {  Container } from "@mui/system";
import React from "react";
import AboutNavbar from "./components/AboutNavbar";
import CompanyProfile from "./components/CompanyProfile";
import Overview from "./components/Overview";
import Whatcanwedo from "./components/Whatcanwedo";


const AboutUsPage = () => {
  return (

    <Container sx={{mt:"80px"}}>
     <AboutNavbar/>
     <Overview/>
     <CompanyProfile/>
     <Whatcanwedo/>
    </Container>
  );
};

export default AboutUsPage;

