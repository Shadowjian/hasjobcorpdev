import React from "react"
import {
  Form,
  Link,
  redirect,
  useActionData,
  useLoaderData
} from "react-router-dom"
import TextField from "@mui/material/TextField"
import { Button, CardActions } from "@mui/material"
import { Container, Stack } from "@mui/system"

export default function AddCareerForm() {
  const career = useLoaderData()
  // const errors = useActionData()
  // console.log(errors)

  return (
    <Container>
      <Form method="post">
        <Stack gap={2}>
          <TextField
            size="small"
            label="Company Name"
            defaultValue={career.company_name}
            type="text"
            name="company_name"
            // required
          />
          <TextField
            size="small"
            label="Industry"
            defaultValue={career.cat_of_industry}
            type="text"
            name="cat_of_industry"
            // required
          />
          <TextField
            size="small"
            label="Job Title"
            defaultValue={career.occupation_title}
            type="text"
            name="occupation_title"
            // required
          />
          <TextField
            size="small"
            label="Job Description"
            defaultValue={career.job_desc}
            multiline
            type="text"
            name="job_desc"
            // required
          />
          <Stack gap={2} direction="horizontal">
            <TextField
              sx={{ flex: "1" }}
              size="small"
              label="Min Salary"
              defaultValue={career.salary_min}
              type="text"
              name="salary_min"
            />
            <TextField
              sx={{ flex: "1" }}
              size="small"
              label="Max Salary"
              defaultValue={career.salary_max}
              type="text"
              name="salary_max"
            />
          </Stack>
          <TextField
            size="small"
            label="No Of Employees"
            defaultValue={career.req_no_of_employees}
            type="number"
            InputProps={{
              inputProps: {
                min: 0
              }
            }}
            name="req_no_of_employees"
          />
          <TextField
            size="small"
            label="Location"
            defaultValue={career.location}
            type="text"
            name="location"
          />
          <TextField
            size="small"
            label="Employment Duration"
            defaultValue={career.duration_of_employment}
            type="text"
            name="duration_of_employment"
          />
          <TextField
            size="small"
            label="Qualifications"
            defaultValue={career.qualifications_work_exp}
            type="text"
            name="qualifications_work_exp"
          />
          <TextField
            size="small"
            label="Experience Level"
            defaultValue={career.experience_level}
            type="text"
            name="experience_level"
          />
          <TextField
            size="small"
            label="Language Proficiency"
            defaultValue={career.japanese_language_level}
            type="text"
            name="japanese_language_level"
          />
          <TextField
            size="small"
            label="Gender Preferrence"
            defaultValue={career.preferred_sex_or_gender}
            type="text"
            name="preferred_sex_or_gender"
          />
          <TextField
            size="small"
            label="Sector Vacancy"
            defaultValue={career.sector_of_vacancy}
            type="text"
            name="sector_of_vancancy"
          />
          <TextField
            size="small"
            label="Contact Number"
            defaultValue={career.contact_no}
            type="text"
            name="contact_no"
          />
          <TextField
            size="small"
            label="Job Type"
            defaultValue={career.job_type}
            type="text"
            name="job_type"
          />
          <TextField
            size="small"
            label="Job Tags"
            defaultValue={career.job_tags}
            type="text"
            name="job_tags"
          />
          <TextField
            size="small"
            label="Company Email"
            defaultValue={career.company_email}
            type="email"
            name="company_email"
          />
          <TextField
            size="small"
            label="Google Form"
            defaultValue={career.google_form_link}
            type="text"
            name="google_form_link"
          />
          <TextField
            size="small"
            label="Open"
            defaultValue={career.is_open}
            type="Boolean"
            name="is_open"
          />
          {/* {errors?.email && errors.email} */}
          <CardActions>
            <Link to="../admincareers">
              <Button>Cancel</Button>
            </Link>
            <Button type="submit">Update</Button>
          </CardActions>
        </Stack>
      </Form>
    </Container>
  )
}

export async function editAction({ request, params }) {
  const { id } = params
  console.log(id)
  const formData = await request.formData()
  const updates = Object.fromEntries(formData)
  console.log(updates)

  await fetch("https://hasjobcorp-api.vercel.app/api/careers/" + id, {
    method: "PATCH",
    body: JSON.stringify(updates),
    headers: {
      "Content-type": "application/json"
    }
  })

  // if all is well redirect to careers
  return redirect("../admincareers")
}
