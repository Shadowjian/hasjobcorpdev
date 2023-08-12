import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { Form, redirect } from "react-router-dom"
import { CurrencyYen } from "@mui/icons-material"
import CardMedia from "@mui/material/CardMedia"

export default function CareerCard({ career }) {
  return (
    <Card sx={{ minWidth: "300px", maxWidth: "335px" }}>
        <CardMedia
          sx={{ height: 140, width: 300 }}
          image={
            career.company_image
              ? `${career.company_image}`
              : "https://placeholder.pics/svg/300/115573"
          }
        />
      <CardContent>
        <Typography>
          Company:{" "}
          <Typography variant="p" component="i">
            {career.company_name}
          </Typography>
        </Typography>
        <Typography>
          Job Opening: <i>{career.occupation_title}</i>
        </Typography>
        <Typography>
          Openings: <i>{career.req_no_of_employees}</i>
        </Typography>
        <Typography>
          Salary Range: <CurrencyYen />
          <i>
            {career.salary_min} - {career.salary_min} / hr
          </i>
        </Typography>
        <Typography>
          Location: <i>{career.location}</i>
        </Typography>
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
