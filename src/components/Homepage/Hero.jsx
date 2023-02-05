import styled from "@emotion/styled";
import { Search } from "@mui/icons-material";
import { Box, Button, InputBase, Typography } from "@mui/material";
import React from "react";
import HeroImage from "../../assets/images/cover.png";

const Hero = () => {
  const SearchBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin:"30px 30px"

  });

  const SearchButton = styled(Button)({
    backgroundColor:"#D8AE5E",
    color:"black",
    padding:"11px",
    "&:hover": {
      color:"#D8AE5E"
    }
  })
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${HeroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: '90vh',
          width: "100%",
          display: "flex",
          justifyContent: "center",
          
        }}
      >
   
        <Box sx={{display:"flex",justifyContent:"center", flexDirection:"column", alignItems:"center  "}}>  
          <Box >
        <Typography variant="h3" color="white" textAlign="center" sx={{fontSize: {xs: "2rem", sm:"3rem", md:"4rem"}}} >
             Welcome to HA Solution
            </Typography>
        <Typography variant="h6" color="white" textAlign="center" sx={{fontSize: {xs: ".9rem", sm:"2rem"}}}>
        Empower Job Seekers, Support Employers
            </Typography>
         </Box>

          <Box
            sx={{
              background: "#0B3749",
              opacity: "0.8",
              margin:"50px 30px",
              width: {md:"70%", sm:"100%", xs:"100%"},
              borderRadius: "10px",
              padding: "30px 10px",
            
            }}
          >
            <Typography variant="h6" color="white" textAlign="center">
            Search for jobs now!
            </Typography>

            <SearchBox>
              <InputBase
                placeholder="Search ..."
                sx={{
                  color: "Black",
                  padding: "2px",
                  backgroundColor: "white",
                  width: "70%",
                  borderRadius:"5px 0px 0px 5px",
                }}  
              />
                  <SearchButton startIcon={<Search/>}  sx= {{borderRadius:"0px 5px 5px 0px"}}></SearchButton>
            </SearchBox>
          </Box>
        </Box>

        
      </Box>
    </Box>
  );
};

export default Hero;
