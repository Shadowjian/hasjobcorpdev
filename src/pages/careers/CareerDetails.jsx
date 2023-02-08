import { Button, Container, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Link, useLoaderData, useParams } from "react-router-dom"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"

export default function CareerDetails() {
  // const { id } = useParams()
  const career = useLoaderData()
  return (
    <Container>
      <Link to="../careers">
        <ArrowBackIosIcon />
        Careers
      </Link>
      <Typography variant="h4">{career.title}</Typography>
      <Typography>Salary: {career.salary}</Typography>
      <Typography>Location: {career.location}</Typography>
      <Box className="details">
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
          similique!
        </Typography>
      </Box>
      <Button>Apply</Button>
    </Container>
  )
}

// loader function

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params

  const res = await fetch("http://localhost:4000/careers/" + id)

  if (!res.ok) {
    throw Error("Could not find that career")
  }

  return res.json()
}
