import { Button, Container, Typography } from "@mui/material"
import { Box, Stack } from "@mui/system"
import { Link, useLoaderData, useParams } from "react-router-dom"

export default function CareerDetails() {
  const { id } = useParams()
  console.log(id)
  const career = useLoaderData()
  return (
    <Container>
      <Link to="../careers">--Back</Link>
      {/* career details */}
      <Stack>
        <Typography variant="h4">{career.occupation_title}</Typography>
        <Typography>posting date</Typography>
      </Stack>
      <Button>Apply Now</Button>
      <Stack>
        <hr />
        <Box>company image here</Box>
        <hr />
        <Typography>Industry: {career.cat_of_industry}</Typography>
        <Typography>Job Level: {career.job_level}</Typography>
        <Typography>Salary: {career.salary}</Typography>
        <Typography>Experience: {career.experienced_level}</Typography>
        <Typography>Job Level: {career.job_type}</Typography>
        <Typography>Updated: to fix the TS</Typography>
        <Typography>Location: {career.location}</Typography>
      </Stack>
      <hr />
      {/* employer details */}
      <Stack>
        <Typography>{career.company_name}</Typography>
        <Typography>{career.req_no_of_employees} Open Job</Typography>
        <Typography>{career.location}</Typography>
        <Typography>{career.company_contact_no}</Typography>
        <Typography>{career.company_email}</Typography>
      </Stack>
      <hr />
      <Stack>
        <Typography>{career.job_desc}</Typography>
      </Stack>
      <Button>Apply Now</Button>
    </Container>
  )
}

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params

  const res = await fetch("https://hasjobcorp-api.vercel.app/api/careers/" + id)

  if (!res.ok) {
    throw Error("Could not find that career")
  }

  return res.json()
}
