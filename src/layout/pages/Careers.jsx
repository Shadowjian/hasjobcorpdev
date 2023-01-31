import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { Container } from "@mui/material"
import { Stack } from "@mui/system"

export default function Careers() {
  return (
    <Container>
      <Stack alignItems="center" m={4}>
        <Stack gap={3} direction="horizontal" flexWrap="wrap">
          <MediaCard />
          <MediaCard />
          <MediaCard />
        </Stack>
      </Stack>
    </Container>
  )
}

function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://static.vecteezy.com/system/resources/thumbnails/001/829/377/small/agents-who-find-jobs-for-job-seekers-and-companies-that-need-professional-workers-for-career-interview-flat-illustration-concept-for-landing-page-web-ui-banner-flyer-poster-template-background-free-vector.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
