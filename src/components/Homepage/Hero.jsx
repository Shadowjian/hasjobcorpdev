import styled from "@emotion/styled"
import { ArrowForward } from "@mui/icons-material"
import { Box, Button, Typography } from "@mui/material"
import React from "react"
import HeroImage from "../../assets/images/cover.png"

const Hero = () => {
  const SearchButton = styled(Button)({
    backgroundColor: "#D8AE5E",
    color: "black",
    padding: "11px",
    "&:hover": {
      color: "#D8AE5E",
      backgroundColor: "#0B3749"
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
          <Box>
            <Typography
              variant="h3"
              color="white"
              textAlign="center"
              sx={{ fontSize: { xs: "2rem", sm: "3rem", md: "4rem" } }}
            >
              Welcome to HA Solution
            </Typography>

            <Typography
              variant="h6"
              color="white"
              textAlign="center"
              sx={{ fontSize: { xs: ".9rem", sm: "2rem" } }}
            >
              Empower Job Seekers, Support Employers
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
            <Button
              variant="contained"
              endIcon={<ArrowForward />}
              sx={{
                backgroundColor: "#0B3749",
                color: "#fff",
                "&:hover": { backgroundColor: "#D8AE5E", color: "#0B3749" }
              }}
            >
              Employers Information
            </Button>
            <Button
              variant="contained"
              endIcon={<ArrowForward />}
              sx={{
                backgroundColor: "#0B3749",
                color: "#fff",
                "&:hover": { backgroundColor: "#D8AE5E", color: "#0B3749" }
              }}
            >
              Recruitment Information
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Hero
