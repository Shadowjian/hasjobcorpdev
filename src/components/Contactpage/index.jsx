import styled from "@emotion/styled";
import { Call,  Email,  Facebook,  Fax,  LocationOn } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import HeroImage from "../../assets/images/cover.png"

const StyledTypography = styled(Typography)({
  color:"white"

})
const TitleTypography = styled(Typography)({
  color:"white"

})
const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft:"200px",
  paddingRight:"200px",
  paddingTop:"30px",
  paddingBottom:"30px",

});

const ContactPage = () => {
  return (
    <Box
        sx={{
          backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${HeroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "90vh",
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}
      >
    <Container sx={{my:"50px"}}>
      <Box sx={{  borderRadius:"10px", backgroundColor:"#0b374975",boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px", px:"50px"}}>
      <TitleTypography variant="h2" align="center">For More Information</TitleTypography>
      <TitleTypography  variant="h5" align="center">If you wanna ask something more infomartion just contact us</TitleTypography>
      <StyledBox >
      <StyledTypography><LocationOn/></StyledTypography>
      <StyledTypography  sx={{fontSize:"30px"}}> 福岡市中央区荒戸3−2−4−１００３ </StyledTypography>
      </StyledBox>
      <StyledBox>
      <StyledTypography><Call/></StyledTypography>
      <StyledTypography sx={{fontSize:"30px"}}> 092-753-9522 </StyledTypography>
      </StyledBox>
      <StyledBox>
      <StyledTypography><Fax/></StyledTypography>
      <StyledTypography sx={{fontSize:"30px"}}> 092-753-9523 </StyledTypography>
      </StyledBox>
      <StyledBox>
      <StyledTypography><Email/></StyledTypography>
      <StyledTypography sx={{fontSize:"30px"}}> has.corp.job@gmail.com </StyledTypography>
      </StyledBox>
      <StyledBox>
      <StyledTypography><Facebook/></StyledTypography>
      <StyledTypography sx={{fontSize:"30px"}}> facebook.com/hascorpjob/ </StyledTypography>
      </StyledBox>
      </Box>

    </Container>
    </Box>
  );
};

export default ContactPage;
