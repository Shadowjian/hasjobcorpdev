import React, { useState } from "react"
import { Link, useLoaderData, useNavigation } from "react-router-dom"
import CareerCard from "./CareerCard"
import TextField from "@mui/material/TextField"
import Loader from "../../components/loader"

export default function AdminCareers() {
  const [loggedIn, setLoggedIn] = useState(true)
  const careers = useLoaderData()

  const navigation = useNavigation()
  if (navigation.state === "loading") return <Loader />

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
