import { Box, Button, Stack, styled, Typography } from "@mui/material";

import React from "react";
import HealthCare from "../../assets/images/careworker.jpg";
import Warehouse from "../../assets/images/warehouse.jpg";
import Manufacturing from "../../assets/images/manufacturing.jpg";
import JobOffer from "../../assets/images/joboffer.svg";
import Housekeeping from "../../assets/images/housekeeping.jpg";

const StyledBox = styled(Box)({
  height: 300,
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize:"cover",
  width: "320px",
  borderRadius: "10px",
  "&:hover": {
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  },
});
const StyledTypography = styled(Typography)({
  margin: "35% 50px 25% 50px",
  backgroundColor: "#D8AE5E",
  opacity: "0.8",
  padding: "5px",
  "&:hover": {
    color: "white",
  },
});


const Categories = () => {
  return (
    <Box sx={{ backgroundImage:`linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${JobOffer}) `, backgroundRepeat:"no-repeat",backgroundPosition: "right bottom", mt:"50px" }} >
      <Box>
        <Typography variant="h3" margin="100px" align="center">
          職種
        </Typography>
      </Box>
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={{ xs: 1, sm: 2, md: 10 }}
        justifyContent="center"
        alignItems="center"
        mt={5}
        mb={5}
      >
        <StyledBox
          sx={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${HealthCare})`,
          }}
        >
          <StyledTypography align="center" variant="h6">
          介護
          </StyledTypography>
        </StyledBox>
        <StyledBox
          sx={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${Manufacturing})`,
          }}
        >
          <StyledTypography align="center" variant="h6">
          工場内作業
          </StyledTypography>
        </StyledBox>

        <StyledBox
          sx={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${Housekeeping})`,
          }}
        >
          <StyledTypography align="center" variant="h6">
          清掃
          </StyledTypography>
        </StyledBox>
        <StyledBox
          sx={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${Warehouse})`,
          }}
        >
          <StyledTypography align="center" variant="h6">
          倉庫内作業
          </StyledTypography>
        </StyledBox>
      </Stack>
      <Box align="center">
        <Button
          variant="outlined"
          sx={{
            borderColor: "#0B3749",
            color: "#0B3749",
            "&:hover": {
              backgroundColor: "#0B3749",
              borderColor: "white",
              color: "#D8AE5E",
            },
          }}
        >
          もっと求人を見る
        </Button>
      </Box>
    </Box>
  );
};

export default Categories;
