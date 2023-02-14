import { Avatar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const OwnerGreeting = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Avatar
          sx={{ width: 200, height: 200 }}
          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
        />
      </Box>
      <Box>
        <Typography>
          我々はクライアントの皆様のニーズを、私たちの多種多様な雇用サービスによって実現致します。
          どのような形態(短期、長期、契約)の雇用であっても、適切な人材をご紹介致します。
          クライアントの皆様と一緒に活動出来る、経験豊かなリクルーターを有するチームもございます
        </Typography>
        <Typography>企業理念</Typography>
        <Typography>「人をつなぎ、笑顔と幸せをつくる」</Typography>
        <Typography>あなたを満足させる人材を供給できる、あなたの一番のパートナーです。</Typography> <br/>
        <Typography align="center">   代表取締役   牛島寛将</Typography>
      </Box>
    </Container>
  );
};

export default OwnerGreeting;
