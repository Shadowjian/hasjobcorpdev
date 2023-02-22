import React from "react"
import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigation
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
import Loader from "../../components/loader"

export default function AddCareerForm() {
  // const errors = useActionData()
  // console.log(errors)

  // const navigation = useNavigation()
  // if (navigation.state === "loading") return <Loader />

  return (
    <Container>
      <Form method="post">
        <Stack gap={2}>
          <TextField
            size="small"
            label="Company Name"
            type="text"
            name="company_name"
            required
          />

          <FormControl size="small">
            <InputLabel>Industry</InputLabel>
            <Select label="Industry" name="cat_of_industry">
              <MenuItem value="Manufacturing">Manufacturing</MenuItem>
              <MenuItem value="HealthCare">Healthcare</MenuItem>
              <MenuItem value="Housekeeping">Housekeeping</MenuItem>
              <MenuItem value="Warehouse">Warehouse</MenuItem>
            </Select>
          </FormControl>
          <TextField
            size="small"
            label="Job Title"
            type="text"
            name="occupation_title"
            required
          />
          <TextField
            multiline
            rows={10}
            size="small"
            label="Job Description"
            type="text"
            name="job_desc"
            // required
          />
          <Stack gap={2} direction="horizontal">
            <TextField
              sx={{ flex: "1" }}
              size="small"
              label="Min Salary"
              type="text"
              name="salary_min"
            />
            <TextField
              sx={{ flex: "1" }}
              size="small"
              label="Max Salary"
              type="text"
              name="salary_max"
            />
          </Stack>
          <TextField
            size="small"
            label="No Of Employees"
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
            type="text"
            name="location"
          />
          <TextField
            size="small"
            label="Employment Duration"
            type="text"
            name="duration_of_employment"
          />
          <TextField
            size="small"
            label="Qualifications"
            type="text"
            name="qualifications_work_exp"
          />
          <TextField
            size="small"
            label="Experience Level"
            type="text"
            name="experience_level"
          />

          <FormControl size="small">
            <InputLabel>Japanese Proficiency</InputLabel>
            <Select label="Japanese Proficiency" name="japanese_language_level">
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
            <Select label="Preferred Gender" name="preferred_sex_or_gender">
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="No Preference">No Preference</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small">
            <InputLabel>Sector Vacancy</InputLabel>
            <Select label="Sector Vacancy" name="sector_of_vancancy">
              <MenuItem value="Available">Available</MenuItem>
              <MenuItem value="Not Available">Not Available</MenuItem>
            </Select>
          </FormControl>
          <TextField
            size="small"
            label="Contact Number"
            type="text"
            name="contact_no"
          />

          <FormControl size="small">
            <InputLabel>Job Type</InputLabel>
            <Select label="Job Type" name="job_type">
              <MenuItem value="Full Time">Full Time</MenuItem>
              <MenuItem value="Part Time">Part Time</MenuItem>
            </Select>
          </FormControl>
          <Tooltip title="separate tags by comma (,)">
            <TextField
              size="small"
              label="Job Tags"
              type="text"
              name="job_tags"
              required
            />
          </Tooltip>
          <TextField
            size="small"
            label="Company Email"
            type="email"
            name="company_email"
          />
          <TextField
            size="small"
            label="Google Form"
            type="text"
            name="google_form_link"
            // required
          />
          <TextField
            size="small"
            label="Open"
            type="Boolean"
            defaultValue={true}
            name="is_open"
          />
          {/* {errors?.email && errors.email} */}
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
  const careerForm = await request.formData()
  // const errors = {}
  const newCareer = {
    company_name: careerForm.get("company_name"),
    cat_of_industry: careerForm.get("cat_of_industry"),
    occupation_title: careerForm.get("occupation_title"),
    job_desc: careerForm.get("job_desc"),
    salary_min: careerForm.get("salary_min"),
    salary_max: careerForm.get("salary_max"),
    req_no_of_employees: careerForm.get("req_no_of_employees"),
    location: careerForm.get("location"),
    duration_of_employment: careerForm.get("duration_of_employment"),
    qualifications_work_exp: careerForm.get("qualifications_work_exp"),
    experience_level: careerForm.get("experience_level"),
    japanese_language_level: careerForm.get("japanese_language_level"),
    preferred_sex_or_gender: careerForm.get("preferred_sex_or_gender"),
    sector_of_vacancy: careerForm.get("sector_of_vancancy"),
    contact_no: careerForm.get("contact_no"),
    job_type: careerForm.get("job_type"),
    job_tags: careerForm.get("job_tags"),
    company_email: careerForm.get("company_email"),
    google_form_link: careerForm.get("google_form_link"),
    is_open: careerForm.get("is_open")
  }

  //career form validation

  // if (
  //   typeof newCareer.company_email !== "string" ||
  //   !newCareer.company_email.includes("@")
  // ) {
  //   errors.email = "fix your email"
  // }

  // if (Object.keys(errors).length) {
  //   return errors
  // }

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
