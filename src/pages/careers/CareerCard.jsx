import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { Form, redirect } from "react-router-dom"

export default function CareerCard({ career }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography>{career.company_name}</Typography>
        <Typography>{career.salary}</Typography>
        <Typography>{career.location}</Typography>
      </CardContent>
      <CardActions>
        <Form action={`${career._id.toString()}/edit`}>
          <Button size="small" type="submit">
            Edit
          </Button>
        </Form>
        <Form
          method="post"
          action={`${career._id.toString()}/destroy`}
          onSubmit={event => {
            if (
              !window.confirm("Please confirm you want to delete this record.")
            ) {
              event.preventDefault()
            }
          }}
        >
          <Button size="small" type="submit">
            Delete
          </Button>
        </Form>
      </CardActions>
    </Card>
  )
}

// params gets access to (:string) on the url
export async function destroyAction({ params }) {
  const { id } = params

  await fetch("https://hasjobcorp-api.vercel.app/api/careers/" + id, {
    method: "DELETE"
  })

  // if all is well redirect to careers page
  return redirect("../admincareers")
}
