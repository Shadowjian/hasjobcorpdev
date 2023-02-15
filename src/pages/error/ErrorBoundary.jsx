import { Container, Typography } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"

export default function ErrorBoundary() {
  return (
    <Container>
      <Typography variant="h1">Page not found</Typography>
      <Link to="/">Go back home</Link>
    </Container>
  )
}
