import React, { useState } from "react"
import { Link, useLoaderData } from "react-router-dom"
import CareerCard from "../careers/CareerCard"
import TextField from "@mui/material/TextField"

export default function AdminCareers() {
  const [loggedIn, setLoggedIn] = useState(true)
  const careers = useLoaderData()

  if (!loggedIn) {
    return (
      <form>
        <TextField label="UserName" />
        <TextField label="Password" />
      </form>
    )
  }

  return (
    <>
      <Link to="../addcareer">Add Career</Link>
      {careers.map(career => (
        <CareerCard career={career} key={career._id} />
      ))}
      {/* {careers.map(career => (
        <CareerCard career={career} key={career.id} />
      ))} */}
    </>
  )
}

export const careerLoader = async () => {
  const res = await fetch("https://hasjobcorp-api.vercel.app/api/careers")

  if (!res.ok) {
    throw Error("Could not fetch the careers")
  }

  return res.json()
}
