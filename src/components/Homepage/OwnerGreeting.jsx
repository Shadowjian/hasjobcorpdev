import { Avatar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const OwnerGreeting = () => {
  return (
    <Container sx={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
      <Box >
        <Avatar sx={{ width: 200 , height: 200 }} src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"  />
      </Box>
      <Box>
        <Typography>
          幅広い人材派遣サービスでお客様のニーズにお応えします。
          雇用形態（短期・契約）を問わず、最適な人材をご紹介いたします。
          また、クライアントと協力できる経験豊富な採用担当者のチームもいます
        </Typography>
        <Typography>企業理念</Typography>
        <Typography>「人をつなぎ、笑顔と幸せをつくる」</Typography>
      </Box>
    </Container>
  );
};

export default OwnerGreeting;
