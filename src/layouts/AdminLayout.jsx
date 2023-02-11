import { Container, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function AdminLayout() {
  let active = { backgroundColor: "red" }

  return (
    <Container>
      <Stack direction="row">
        <Stack
          sx={{
            bgcolor: "gray",
            height: "100vh",
            flex: 1,
            px: 2
          }}
        >
          <NavLink
            to="/admin/admincareers"
            style={({ isActive }) => (isActive ? active : undefined)}
          >
            <Typography variant="h5">Careers</Typography>
          </NavLink>
          {/* <NavLink
            to="adminjobs"
            style={({ isActive }) => (isActive ? active : undefined)}
          >
            <Typography variant="h5">Jobs</Typography>
          </NavLink> */}
        </Stack>
        <Container sx={{ bgcolor: "green", flex: 4 }}>
          <Outlet />
        </Container>
      </Stack>
    </Container>
  )
}
