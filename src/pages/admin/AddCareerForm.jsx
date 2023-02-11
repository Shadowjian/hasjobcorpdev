import React from "react"
import { Form, Link, redirect, useActionData } from "react-router-dom"
import TextField from "@mui/material/TextField"
import { Button, CardActions } from "@mui/material"
import { Container, Stack } from "@mui/system"

export default function AddCareerForm() {
  const errors = useActionData()

  return (
    <Container>
      <Form method="post" action="/admin/addcareers">
        <Stack gap={2}>
          <TextField
            label="Company Name"
            type="text"
            name="company_name"
            required
          />
          <Stack direction="horizontal" justifyContent="space-between">
            <TextField label="Min Salary" type="number" name="salary_min" />
            <TextField label="Max Salary" type="number" name="salary_max" />
          </Stack>

          <TextField label="Location" type="text" name="location" />
          <TextField label="Email" type="text" name="email" />
          <TextField type="file" name="image" />
          {errors?.email && errors.email}
          <CardActions>
            <Link to="../admincareers">
              <Button>Cancel</Button>
            </Link>
            <Button type="submit">Submit</Button>
          </CardActions>
        </Stack>
      </Form>
    </Container>
  )
}

export async function careerFormAction({ request }) {
  const careerFom = await request.formData()
  const errors = {}
  const newCareer = {
    company_name: careerFom.get("company_name"),
    salary: careerFom.get("salary"),
    location: careerFom.get("location"),
    email: careerFom.get("email")
  }

  //career form validation

  if (typeof newCareer.email !== "string" || !newCareer.email.includes("@")) {
    errors.email = "fix your email"
  }

  if (Object.keys(errors).length) {
    return errors
  }

  // will add career to db
  await fetch("https://hasjobcorp-api.vercel.app/api/careers", {
    method: "POST",
    body: JSON.stringify(newCareer),
    headers: {
      "Content-type": "application/json"
    }
  })

  // if all is well redirect to jobs
  return redirect("../admincareers")
}

//
