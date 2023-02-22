import { Box, Button, Stack, styled, Typography } from "@mui/material"
import { Link, redirect, useOutletContext } from "react-router-dom"
import React from "react"
import HealthCare from "../../assets/images/careworker.jpg"
import Warehouse from "../../assets/images/warehouse.jpg"
import Manufacturing from "../../assets/images/manufacturing.jpg"
import JobOffer from "../../assets/images/joboffer.svg"
import Housekeeping from "../../assets/images/housekeeping.jpg"
import { useNavigate } from "react-router-dom"

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 300,
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "320px",
  borderRadius: "10px",
  "&:hover": {
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
  }
})
const StyledButton = styled(Button)({
  // margin: "35% 50px 25% 50px",
  backgroundColor: "#D8AE5E",
  opacity: "0.8",
  padding: "10px",
  width: "50%",
  "&:hover": {
    color: "white",
    backgroundColor: "#D8AE5E"
  }
})

const Categories = () => {
  const { states, dispatchers } = useOutletContext()
  const { careers, catFilter } = states
  const { setCareers, setCatFilter } = dispatchers
  const navigate = useNavigate()

  function handleCategory(e) {
    const input = e.target.value
    setCatFilter(input)

    setCareers(
      careers.filter(career =>
        career.job_tags.some(element =>
          element.toLowerCase().includes(input.toLowerCase())
        )
      )
    )
    navigate("careers")
    console.log(careers)
    // redirect("careers")
  }

  console.log(careers)
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${JobOffer}) `,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
        mt: "50px",
        overflow: "hidden"
      }}
    >
      <Box data-aos="fade-up">
        <Typography variant="h3" align="center">
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
        {[
          {
            cat: "HealthCare",
            jap: "介護者",
            bg: HealthCare,
            animate: "fade-right"
          },
          {
            cat: "Manufacturing",
            jap: "工場内作業",
            bg: Manufacturing,
            animate: "fade-right"
          },
          {
            cat: "Housekeeping",
            jap: "清掃",
            bg: Housekeeping,
            animate: "fade-left"
          },
          {
            cat: "Warehouse",
            jap: "倉庫内作業",
            bg: Warehouse,
            animate: "fade-left"
          }
        ].map(el => (
          <StyledBox
            data-aos={el.animate}
            data-aos-duration="500"
            sx={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${el.bg})`
            }}
          >
            <StyledButton
              align="center"
              variant="h6"
              value={el.cat}
              onClick={handleCategory}
              // onClick={handleCategory}
            >
              {el.jap}
              {/* <Link to="careers"
              >
              </Link> */}
              {/* 介護者 */}
            </StyledButton>
          </StyledBox>
        ))}
      </Stack>
      <Box data-aos="fade-up" align="center" data-aos-duration="500">
        <Link to="careers">
          <Button
            variant="outlined"
            sx={{
              borderColor: "#0B3749",
              color: "#0B3749",
              "&:hover": {
                backgroundColor: "#0B3749",
                borderColor: "white",
                color: "#D8AE5E"
              }
            }}
          >
            もっと求人を見る
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

export default Categories
