import { Button, Container, TextField, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import React, { useState } from "react"
import { Form, Link, NavLink, Outlet, redirect } from "react-router-dom"

export default function AdminLayout() {
  const [loggedIn, setLoggedIn] = useState(true)
  let active = { backgroundColor: "lightGray" }

  if (!loggedIn) {
    return <AdminPortal loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
  }

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
            to="admincareers"
            style={({ isActive }) => (isActive ? active : undefined)}
          >
            <Typography variant="h5">Careers</Typography>
          </NavLink>
          <Link to="/">
            <Typography
              variant="h5"
              onClick={() => {
                setLoggedIn(false)
              }}
            >
              Logout
            </Typography>
          </Link>
        </Stack>
        <Container sx={{ bgcolor: "white", flex: 4 }}>
          <Stack gap={2}>
            <Outlet />
          </Stack>
        </Container>
      </Stack>
    </Container>
  )
}

function AdminPortal({ loggedIn, setLoggedIn }) {
  const [logins, setLogins] = useState({
    userName: "",
    password: ""
  })

  const admin = {
    userName: "admin",
    password: "123"
  }

  const handleSubmit = () => {
    logins.userName === admin.userName && logins.password === admin.password
      ? setLoggedIn(true)
      : setLoggedIn(false)
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          placeholder="User Name"
          value={logins.userName}
          onChange={e => setLogins({ ...logins, userName: e.target.value })}
        />

        <TextField
          type="password"
          placeholder="Password"
          value={logins.password}
          onChange={e => setLogins({ ...logins, password: e.target.value })}
        />
        <Button variant="primary" type="submit">
          Log In
        </Button>
      </form>
    </Container>
  )
}
