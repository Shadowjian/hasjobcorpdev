import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { Form, Link } from "react-router-dom"

export default function CareerCard({ career }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography>{career.company_name}</Typography>
        <Typography>{career.salary}</Typography>
        <Typography>{career.location}</Typography>
      </CardContent>
      <CardActions>
        <Link to={`${career._id.toString()}/edit`}>
          <Button size="small">Edit</Button>
        </Link>
        <Form
          method="post"
          action="destroy"
          // onSubmit={event => {
          //   if (!confirm("Please confirm you want to delete this record.")) {
          //     event.preventDefault()
          //   }
          // }}
        >
          <Link to={career._id.toString()}>
            <Button size="small">Delete</Button>
          </Link>
        </Form>
      </CardActions>
    </Card>
  )
}
