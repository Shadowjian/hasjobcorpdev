import { Avatar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Owner from "../../assets/images/owner_has.png"

const OwnerGreeting = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: {md:"row",sm:"column",xs:"column"},
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "100px",
        overflow: "hidden"
      }}
    >
     <Box sx={{display:{md:"none", xs:"block", sm:"block"}}} data-aos="fade-right"data-aos-duration="500">
        <Avatar
          sx={{ width: 400, height: 300, }}
          src={Owner}
          variant="square"
        />
         
      </Box>
     
      <Box data-aos="fade-left"data-aos-duration="500">
        <Typography>
          我々はクライアントの皆様のニーズを、私たちの多種多様な雇用サービスによって実現致します。
          どのような形態(短期、長期、契約)の雇用であっても、適切な人材をご紹介致します。
          クライアントの皆様と一緒に活動出来る、経験豊かなリクルーターを有するチームもございます
        </Typography>
        <Typography>企業理念</Typography>
        <Typography>「人をつなぎ、笑顔と幸せをつくる」</Typography>
        <Typography>あなたを満足させる人材を供給できる、あなたの一番のパートナーです。</Typography> <br/>
        <Typography align="right">   代表取締役   牛島寛将</Typography>

        
        
      </Box>
      <Box sx={{display:{md:"block", xs:"none", sm:"none"}}} data-aos="fade-right"data-aos-duration="500">
        <Avatar
          sx={{ width: 400, height: 300, }}
          src={Owner}
          variant="square"
        />
         
      </Box>
    </Container>
  );
};

export default OwnerGreeting;
