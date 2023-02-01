import styled from "@emotion/styled";
import { Box, InputBase, Typography } from "@mui/material";
import React from "react";
import HeroImage from "../../assets/images/cover.jpg";

const Hero = () => {
  const SearchBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    gap: 5,
  });
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
   
        <Box sx={{display:"flex",justifyContent:"center", flexDirection:"column"}}>
        
          <Box >
        <Typography variant="h3" color="white"  >
              <p>HAソリューションへようこそ</p>
            </Typography>
        <Typography variant="h6" color="white" textAlign="center" >
               <p>求職者に力を与え, 雇用主をサポート</p>
            </Typography>
         </Box>

          <Box
            sx={{
              background: "#0B3749",
              opacity: "0.8",
              margin: "50px",
              width: "80%",
              borderRadius: "10px",
              padding: "30px 10px",
            }}
          >
            <Typography variant="h6" color="white" textAlign="center">
                <p>今すぐ仕事を検索!</p>
            </Typography>

            <SearchBox>
              <InputBase
                placeholder="検索 ..."
                sx={{
                  color: "Black",
                  border: "1px solid gray",
                  padding: "4px",
                  backgroundColor: "white",
                  margin: "30px",
                  width: "70%",
                }}
              />
            </SearchBox>
          </Box>
        </Box>

        
      </Box>
    </Box>
  );
};

export default Hero;
