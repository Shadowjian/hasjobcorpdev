import { AppBar, Stack, Toolbar, Typography } from "@mui/material"
import { Container } from "@mui/system"
import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ backgroundColor: "white" }}>
        <Container>
          <Stack direction="horizontal" justifyContent="space-between">
            <Typography color="gray">Logo</Typography>
            <Stack direction="horizontal" gap={2} justifyContent="flex-end">
              <Link to="/">
                <Typography>Home</Typography>
              </Link>
              <Link to="careers">
                <Typography>Careers</Typography>
              </Link>
              <Link to="recruitment">
                <Typography>Recruitment Information</Typography>
              </Link>
              <Link to="about">
                <Typography>About Us</Typography>
              </Link>
              <Link to="contact-us">
                <Typography>Contact Us</Typography>
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  )
}
