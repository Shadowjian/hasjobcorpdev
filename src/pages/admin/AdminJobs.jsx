import { Container } from "@mui/material"
import React from "react"
import { useLoaderData } from "react-router-dom"
import CareerCard from "../careers/CareerCard"

export default function AdminJobs() {
  const careers = useLoaderData()

  return (
    <>
      {careers.map(career => (
        <CareerCard career={career} key={career.id} />
      ))}
    </>
  )
}

export const careerLoader = async () => {
  const res = await fetch("http://localhost:4000/careers")

  if (!res.ok) {
    throw Error("Could not fetch the careers")
  }

  return res.json()
}
