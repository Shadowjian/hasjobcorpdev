import * as React from "react"

import { Box, Container } from "@mui/material"
import { Stack } from "@mui/system"
import { Link, useLoaderData } from "react-router-dom"
import MediaCard from "./MediaCard"

export default function Careers() {
  const careers = useLoaderData()
  return (
    <Container sx={{ marginTop: "50px" }}>
      <Box>
        <Stack
          mt={3}
          gap={3}
          direction="horizontal"
          flexWrap="wrap"
          justifyContent="center"
        >
          {careers.map(career => (
            <Link to={career._id.toString()} key={career._id}>
              <MediaCard career={career} />
            </Link>
          ))}
        </Stack>
      </Box>
    </Container>
  )
}
