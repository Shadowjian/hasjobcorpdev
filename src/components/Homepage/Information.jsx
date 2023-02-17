import { ArrowCircleRight } from "@mui/icons-material"
import { Button, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import React from "react"
import { Link } from "react-router-dom"

const Information = () => {
  return (
    <Container sx={{ display: { md: "flex", sm: "row", xs: "row" } }}>
      <Box data-aos="fade-up"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
        backgroundColor="#D8AE5E"
        padding="30px"
        borderRadius="10px"
        mb="100px"
      >
        <Typography
          padding=" 20px 0"
          variant="h2"
          fontSize={{ xs: "30px", sm: "40px" }}
        >
          会社について
        </Typography>
        <Typography
          variant="p"
          lineHeight={{ xs: "10px", sm: "40px" }}
          fontSize={{ xs: "12px", sm: "24px" }}
        >
         私たちは、求職者とその分野のトップ雇用者をつなぐことに専念している会社です。私たちは、ここ日本での求職プロセスを可能な限りシームレスでストレスのないものにすることを目指しています.お客様のニーズに合わせた様々な人材紹介サービスをご用意しております。一時的、正社員、または契約のポジションを探しているかどうかにかかわらず、私たちはあなたの会社に適した候補者を見つけるお手伝いをします。また、あなたと一緒に働くことを約束する経験豊富な採用担当者のチームもあります。
        </Typography>
        <Box align="center">
          <Link to="about">
            <Button
              sx={{
                borderColor: "#D8AE5E",
                color: "#0B3749",
                "&:hover": {
                  backgroundColor: "#0B3749",
                  borderColor: "#D8AE5E",
                  color: "#D8AE5E"
                }
              }}
              variant="outlined"
              endIcon={<ArrowCircleRight />}
            >
              詳しくは
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  )
}

export default Information
