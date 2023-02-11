import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Box, Container } from "@mui/material"
import { Stack } from "@mui/system"
import { Link, useLoaderData } from "react-router-dom"

export default function Careers() {
  const careers = useLoaderData()
  return (
    <Container>
      <Box>
        <Stack
          mt={3}
          gap={3}
          direction="horizontal"
          flexWrap="wrap"
          justifyContent="center"
        >
          {careers.map(career => (
            <Link to={career._id.toString()} key={career._id}>
              <MediaCard career={career} />
            </Link>
          ))}
        </Stack>
      </Box>
    </Container>
  )
}

function MediaCard({ career }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140, width: 300 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEcnJt1Hw8ZrwezrdWT25ji8UGKUFMC77mI_vsGJxAddhKYVkMDKxsbtSGuwdbkYVQdM&usqp=CAU"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {career.company_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {career.salary}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {career.location}
        </Typography>
      </CardContent>
    </Card>
  )
}
