import React from "react"
import {
  Form,
  Link,
  redirect,
  useActionData,
  useLoaderData
} from "react-router-dom"
import TextField from "@mui/material/TextField"
import {
  Button,
  CardActions,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tooltip
} from "@mui/material"
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
            label="Company Image URL"
            defaultValue={career.company_image}
            type="text"
            name="company_image"
            // required
          />
          <FormControl size="small">
            <InputLabel>Industry</InputLabel>
            <Select
              label="Industry"
              name="cat_of_industry"
              defaultValue={career.cat_of_industry}
            >
              <MenuItem value="Manufacturing">Manufacturing</MenuItem>
              <MenuItem value="HealthCare">Healthcare</MenuItem>
              <MenuItem value="Housekeeping">Housekeeping</MenuItem>
              <MenuItem value="Warehouse">Warehouse</MenuItem>
            </Select>
          </FormControl>

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

          <FormControl size="small">
            <InputLabel>Japanese Proficiency</InputLabel>
            <Select
              label="Japanese Proficiency"
              name="japanese_language_level"
              defaultValue={career.japanese_language_level}
            >
              <MenuItem value="Basic Japanese">Basic Japanese</MenuItem>
              <MenuItem value="N1">N1</MenuItem>
              <MenuItem value="N2">N2</MenuItem>
              <MenuItem value="N3">N3</MenuItem>
              <MenuItem value="N4">N4</MenuItem>
              <MenuItem value="N5">N5</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small">
            <InputLabel>Preferred Gender</InputLabel>
            <Select
              label="Preferred Gender"
              name="preferred_sex_or_gender"
              defaultValue={career.preferred_sex_or_gender}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="No Preference">No Preference</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small">
            <InputLabel>Sector Vacancy</InputLabel>
            <Select
              label="Sector Vacancy"
              name="sector_of_vancancy"
              defaultValue={career.sector_of_vacancy}
            >
              <MenuItem value="Available">Available</MenuItem>
              <MenuItem value="Not Available">Not Available</MenuItem>
            </Select>
          </FormControl>
          <TextField
            size="small"
            label="Contact Number"
            defaultValue={career.contact_no}
            type="text"
            name="contact_no"
          />
          <FormControl size="small">
            <InputLabel>Job Type</InputLabel>
            <Select
              label="Job Type"
              name="job_type"
              defaultValue={career.job_type}
            >
              <MenuItem value="Full Time">Full Time</MenuItem>
              <MenuItem value="Part Time">Part Time</MenuItem>
            </Select>
          </FormControl>
          <Tooltip title="separate tags by comma (,)">
            <TextField
              size="small"
              label="Job Tags"
              defaultValue={career.job_tags}
              type="text"
              name="job_tags"
            />
          </Tooltip>
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
