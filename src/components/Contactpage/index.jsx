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
      <Box sx={{  borderRadius:"10px", backgroundColor:"#0b374975",boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px", p:"30px"}}>
      <TitleTypography variant="h2" align="center" sx={{fontSize:{xs:"25px", md:"50px "}}}>For More Information</TitleTypography>
      <TitleTypography  variant="h5" align="center" sx={{fontSize:"25px", mb:"30px"}}>If you wanna ask something more infomartion just contact us</TitleTypography>


      <Box sx={{display:"flex", alignContent:"center", justifyContent:{md:"space-between"}, px:{md:"150px", xs:"15px"}, gap:{xs:"10px"}, mb:"30px"}}>
      <StyledTypography  sx={{display:{xs:"block", md:"none"}}}><LocationOn sx={{ fontSize: 20 }}/></StyledTypography>
      <StyledTypography sx={{display:{xs:"none", md:"block"}}} >Location:</StyledTypography>
      <StyledTypography  sx={{fontSize:{md:"25px", xs:"14px"}}}> 福岡市中央区荒戸 3−2−4−１００３ </StyledTypography>
      </Box>


      <Box  sx={{display:"flex", alignContent:"center", justifyContent:{md:"space-between"}, px:{md:"150px", xs:"15px"}, gap:{xs:"10px" }, mb:"30px"}}>
      <StyledTypography sx={{display:{xs:"block", md:"none"}}}><Call sx={{ fontSize: 20 }}/></StyledTypography>
      <StyledTypography sx={{display:{xs:"none", md:"block"}}}>Telephone:</StyledTypography>
      <StyledTypography sx={{fontSize:{md:"25px", xs:"14px"}}}> 092-753-9522 </StyledTypography>
      </Box>


      <Box  sx={{display:"flex", alignContent:"center", justifyContent:{md:"space-between"}, px:{md:"150px", xs:"15px"}, gap:{xs:"10px"}, mb:"30px"}}>
      <StyledTypography sx={{display:{xs:"block", md:"none"}}}><Fax sx={{ fontSize: 20 }}/></StyledTypography>
      <StyledTypography sx={{display:{xs:"none", md:"block"}}}>Fax:</StyledTypography>
      <StyledTypography sx={{fontSize:{md:"25px", xs:"14px"}}}> 092-753-9523 </StyledTypography>
      
      </Box>


      <Box sx={{display:"flex", alignContent:"center", justifyContent:{md:"space-between"}, px:{md:"150px", xs:"15px"}, gap:{xs:"10px"} , mb:"30px"}}>
      <StyledTypography sx={{display:{xs:"block", md:"none"}}}><Email sx={{ fontSize: 20 }}/></StyledTypography>
      <StyledTypography sx={{display:{xs:"none", md:"block"}}}>Email:</StyledTypography>
      <StyledTypography sx={{fontSize:{md:"25px", xs:"14px"}}}> has.corp.job@gmail.com </StyledTypography>
      </Box>
      <Box sx={{display:"flex", alignContent:"center", justifyContent:{md:"space-between"}, px:{md:"150px", xs:"15px"}, gap:{xs:"10px"}, mb:"30px"}}>
      <StyledTypography sx={{display:{xs:"block", md:"none"}}}><Facebook sx={{ fontSize: 20 }}/></StyledTypography>
      <StyledTypography sx={{display:{xs:"none", md:"block"}}}>Telephone:</StyledTypography>
      <StyledTypography sx={{fontSize:{md:"25px", xs:"14px"}}}> facebook.com/hascorpjob/ </StyledTypography>
      </Box>
      </Box>

    </Container>
    </Box>
  );
};

export default ContactPage;
