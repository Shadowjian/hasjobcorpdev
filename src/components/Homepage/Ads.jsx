import styled from "@emotion/styled"
import { Button, Container, Typography } from "@mui/material"
import { Box, Stack } from "@mui/system"
import React from "react"
import AdsImage from "../../assets/images/ads.png"
import { Link } from "react-router-dom"

const StyledTypography = styled(Typography)({
  padding: "10px"
})

const Ads = () => {
  return (
    <Container sx={{ mt: "100px", mb: "50px", padding: "50px" }}>
      <Box sx={{ width: "100%" }}>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 1, sm: 2, md: 15 }}
        >
          <Box
            sx={{
              backgroundImage: `url(${AdsImage})`,
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              height: { md: "500px", xs: "300px", sm: "500px" },
              width: { md: "500px", xs: "270px", sm: "500px" },
              borderRadius: "10px",
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          ></Box>
          <Box>
            <StyledTypography
              textAlign="center"
              variant="h3"
              sx={{ fontSize: { xs: "25px", sm: "50px", md: "50px" } }}
            >
              Find a Job that is{" "}
            </StyledTypography>
            <StyledTypography
              textAlign="center"
              variant="h4"
              sx={{ fontSize: { xs: "20px", sm: "45px", md: "45px" } }}
            >
              Perfect for you
            </StyledTypography>
            <Box align="center" mt="30px">
              <Link to="/careers">
                <Button
                  variant="contained"
                  sx={{
                    borderColor: "#0B3749",
                    color: "#0B3749",
                    backgroundColor: "#D8AE5E",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    "&:hover": {
                      backgroundColor: "#0B3749",
                      borderColor: "white",
                      color: "#D8AE5E"
                    }
                  }}
                >
                  Apply Now
                </Button>
              </Link>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Container>
  )
}

export default Ads
