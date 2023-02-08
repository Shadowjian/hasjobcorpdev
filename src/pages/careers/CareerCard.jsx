import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

export default function CareerCard({ career }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography>{career.company_name}</Typography>
        <Typography>{career.salary}</Typography>
        <Typography>{career.location}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Delete</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  )
}
