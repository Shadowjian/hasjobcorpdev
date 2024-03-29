import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"

import Typography from "@mui/material/Typography"
import { Box, Button, Container } from "@mui/material"
import {
  AccessTime,
  Business,
  CurrencyYen,
  Place,
  Work
} from "@mui/icons-material"

function MediaCard({ career }) {
  return (
    <Container>
      <Card
        sx={{
          maxWidth: 345,
          "&:hover": { boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" },
          marginBottom: "50px"
        }}
      >
        <CardMedia
          sx={{ height: 140, width: 300 }}
          image={
            career.company_image
              ? `${career.company_image}`
              : "https://placeholder.pics/svg/300/115573"
          }
        />
        <CardContent>
          <Box sx={{ display: "flex", gap: "30px", alignContent: "center" }}>
            <Typography sx={{ color: "gray", margin: "5px" }}>
              <Work fontSize="small" />
            </Typography>
            <Typography variant="h3" sx={{ fontSize: "25px" }}>
              {career.occupation_title}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "30px", alignContent: "center" }}>
            <Typography sx={{ color: "gray", margin: "5px" }}>
              <Business fontSize="small" />
            </Typography>
            <Typography sx={{ color: "gray", fontSize: "20px" }}>
              {career.company_name}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "30px", alignContent: "center" }}>
            <Typography sx={{ color: "gray", margin: "5px" }}>
              <AccessTime fontSize="small" />
            </Typography>
            <Typography sx={{ color: "gray" }}>{career.job_type}</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "30px", alignContent: "center" }}>
            <Typography sx={{ color: "gray", margin: "5px" }}>
              <CurrencyYen fontSize="small" />
            </Typography>
            <Typography sx={{ color: "gray" }}>
              {career.salary_min} - {career.salary_max}/ hr
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "30px", alignContent: "center" }}>
            <Typography sx={{ color: "gray", margin: "5px" }}>
              <Place fontSize="small" />
            </Typography>
            <Typography sx={{ color: "gray" }}>{career.location}</Typography>
          </Box>
        </CardContent>
        <Box align="center" marginBottom="20px">
          <Button>See More Info</Button>
        </Box>
      </Card>
    </Container>
  )
}

export default MediaCard
