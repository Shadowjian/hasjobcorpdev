import { useRouteError } from "react-router-dom"
import { Container, Typography } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"
import { Box } from "@mui/system"

export default function ErrorPage() {
  const error = useRouteError()
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px"
        }}
      >
        <Typography variant="h5">Oops!</Typography>
        <Typography variant="p">
          Sorry, an unexpected error has occured
        </Typography>
        <Typography variant="h4">
          <i>
            {error.statusText} {error.message}
          </i>
        </Typography>
        <Link to="/">{`<< Go back home`}</Link>
      </Box>
    </Container>
  )
}
