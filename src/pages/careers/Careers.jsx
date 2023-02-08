import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
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
            <Link to={career.id.toString()} key={career.id}>
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
          {career.title}
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
