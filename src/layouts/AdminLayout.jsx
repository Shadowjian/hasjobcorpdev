// import { Button, Container, TextField, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import React, { Suspense, useState } from "react"
import { NavLink, Outlet, useNavigation } from "react-router-dom"
import AdminPortal from "../pages/admin/AdminPortal"

import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import AppBar from "@mui/material/AppBar"
import CssBaseline from "@mui/material/CssBaseline"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import LogoutIcon from "@mui/icons-material/Logout"
import WorkIcon from "@mui/icons-material/Work"
import AddCardIcon from "@mui/icons-material/AddCard"
import HomeIcon from "@mui/icons-material/Home"
import MailIcon from "@mui/icons-material/Mail"
import { AlignVerticalBottom } from "@mui/icons-material"
import { Backdrop, CircularProgress } from "@mui/material"
import Loader from "../components/loader"

const drawerWidth = 240

export default function AdminLayout() {
  const [loggedIn, setLoggedIn] = useState(false)
  let active = { backgroundColor: "#D8AE5E", color: "#0B3749" }

  if (!loggedIn) {
    return <AdminPortal loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ color: "#D8AE5E", background: "#0B3749" }}>
          <Typography variant="h6" noWrap component="div">
            HA Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box"
          }
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {[
              { name: "Careers", icon: <WorkIcon />, link: "admincareers" },
              { name: "Add Career", icon: <AddCardIcon />, link: "addcareer" }
            ].map(nav => (
              <ListItem key={nav.name} disablePadding>
                <NavLink
                  to={nav.link}
                  style={({ isActive }) => (isActive ? active : undefined)}
                >
                  <ListItemButton sx={{ width: "239px" }}>
                    <ListItemIcon>{nav.icon}</ListItemIcon>
                    <ListItemText primary={nav.name} />
                    {/* </Stack> */}
                  </ListItemButton>
                </NavLink>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {[
              { name: "Home", icon: <HomeIcon />, link: "/" },
              { name: "Log Out", icon: <LogoutIcon />, link: "/admin" }
            ].map(nav => (
              <ListItem key={nav.name} disablePadding>
                <ListItemButton to={nav.link}>
                  {/* <Stack direction="horizontal" alignItems="center"> */}
                  <ListItemIcon>{nav.icon}</ListItemIcon>
                  <ListItemText primary={nav.name} />
                  {/* </Stack> */}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Stack gap={2} direction="horizontal" flexWrap="wrap">
          <Outlet />
        </Stack>
      </Box>
    </Box>
  )
}

{
  /* <Container sx={{ mt: "40px" }}>
  <Stack
    direction="row"
    sx={{
      border: "solid 1px #0B3749",
      padding: "20px"
    }}
  >
    <Stack
      sx={{
        height: "100vh",
        width: "200px",
        background: "#0B3749"
      }}
    >
      <NavLink
        to="admincareers"
        style={({ isActive }) => (isActive ? active : undefined)}
      >
        <Button fullWidth>Careers</Button>
      </NavLink>
      <NavLink
        to="addcareer"
        style={({ isActive }) => (isActive ? active : undefined)}
      >
        <Button fullWidth>Add Career</Button>
      </NavLink>
      <Link to="">
        <Button
          fullWidth
          onClick={() => {
            setLoggedIn(false)
          }}
        >
          Logout
        </Button>
      </Link>
    </Stack>
    <Container sx={{ bgcolor: "white" }}>
      <Stack gap={2}>
        <Outlet />
      </Stack>
    </Container>
  </Stack>
</Container> */
}
