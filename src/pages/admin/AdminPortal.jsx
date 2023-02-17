import { Button, Container, Stack, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import { Link } from "react-router-dom"

export default function AdminPortal({ loggedIn, setLoggedIn }) {
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
    <Container
      sx={{
        mt: "40px",
        border: "solid 1px",
        padding: "20px",
        borderRadius: "10px",
        borderColor: "#0B3749"
      }}
      maxWidth="xs"
    >
      <form onSubmit={handleSubmit}>
        <Stack gap={2}>
          <Typography variant="h5" textAlign="center" sx={{ color: "#0B3749" }}>
            HA Admin
          </Typography>
          <TextField
            size="small"
            type="text"
            label="User Name"
            value={logins.userName}
            onChange={e => setLogins({ ...logins, userName: e.target.value })}
          />

          <TextField
            size="small"
            type="password"
            label="Password"
            placeholder="Password"
            value={logins.password}
            onChange={e => setLogins({ ...logins, password: e.target.value })}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              background: "#0B3749",
              color: "#D8AE5E",
              "&:hover": { background: "#D8AE5E", color: "#0B3749" }
            }}
          >
            Log In
          </Button>
          <Link to="/">
            <Button
              variant="text"
              size="small"
              sx={{ color: "#0B3749", "&:hover": { background: "#D8AE5E" } }}
            >
              Go to Homepage
            </Button>
          </Link>
        </Stack>
      </form>
    </Container>
  )
}
