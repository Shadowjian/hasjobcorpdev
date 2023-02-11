import React from "react"
import { Link, useLoaderData } from "react-router-dom"
import CareerCard from "../careers/CareerCard"

export default function AdminCareers() {
  const careers = useLoaderData()

  return (
    <>
      <Link to="../addcareers">Add Career</Link>
      {careers.map(career => (
        <CareerCard career={career} key={career.id} />
      ))}
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
