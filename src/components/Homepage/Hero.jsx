import { ArrowForward } from "@mui/icons-material"
import { Box, Button, Typography } from "@mui/material"
import React from "react"
import HeroImage from "../../assets/images/cover.png"
import { NavLink } from "react-router-dom"

const Hero = () => {
  return (
    <Box sx={{ overflow: "hidden"}}>
    
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center  "
          }}
        >
          <Box data-aos="fade-up"data-aos-duration="500">
            <Typography
              variant="h3"
              color="white"
              textAlign="center"
              sx={{ fontSize: { xs: "2rem", sm: "3rem", md: "4rem" } }}
            >
              HAソリューションへようこそ
            </Typography>
          </Box>
          <Box  data-aos="fade-down" data-aos-duration="500" >
            <Typography
              variant="h6"
              color="white"
              textAlign="center"
              sx={{ fontSize: { xs: ".9rem", sm: "2rem" } }}
            >
              求職者に力を与え, 雇用主をサポート
            </Typography>
          </Box>

          <Box 
            align="center"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "column" },
              gap: "30px",
              margin: "30px"
            }}
          >
            <Box data-aos="fade-right"  data-aos-duration="500">
            <NavLink to="employers">
            <Button
              variant="contained"
              endIcon={<ArrowForward />}
              sx={{
                fontSize:"25px",
                padding:" 10px 50px",
                backgroundColor: "#0B3749",
                color: "#fff",
                "&:hover": { backgroundColor: "#D8AE5E", color: "#0B3749" }
              }}
            >
            雇用主の情報
            </Button>
            </NavLink>
            </Box>
            <Box data-aos="fade-left"  data-aos-duration="500">
            <NavLink to="recruitment">
            <Button
              variant="contained"
              endIcon={<ArrowForward />}
              sx={{
                fontSize:"25px",
                padding:" 10px 50px",
                backgroundColor: "#0B3749",
                color: "#fff",
                "&:hover": { backgroundColor: "#D8AE5E", color: "#0B3749" }
              }}
            >
              採用情報
            </Button>
            </NavLink>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Hero
