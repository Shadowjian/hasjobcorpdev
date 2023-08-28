import { Menu as MenuIcon } from "@mui/icons-material"
import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  Menu,
  Avatar
} from "@mui/material"
import { Box } from "@mui/system"
import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import LogoGif from "../../assets/images/hasolution.png"

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
  })

  const MenuBox = styled(Box)({
    display: "flex",
    justifyContent: "space-even",
    gap: "50px"
  })

  const MenuTypeItem = styled(Typography)({
    color: "white",

    "&:hover": {
      color: "#D8AE5E"
    },
    fontWeight: "100"
  })
  const MenuLogo = styled(Typography)({
    color: "white",
    fontWeight: "100"
  })
  const MenuTypeItem2 = styled(Typography)({
    color: "#0B3749",
    "&:hover": {
      color: "#D8AE5E",
      padding: "5px",
      backgroundColor: "#0B3749",
      borderRadius: "5px"
    },
    fontWeight: "bold",
    margin: "50px"
  })

  const [open, setOpen] = useState(false)

  const navlinkStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "orange" : "",
      borderRadius: isActive ? "10px" : "",
      padding: isActive ? "5px 15px" : ""
    }
  }

  const handleClose = () => {
    setOpen(!open)
  }

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "#0B3749", padding: "20px", opacity: "1" }}
      >
        <StyledToolbar>
          <Box>
            <NavLink to="/">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <Avatar
                  alt="hasolution"
                  src={LogoGif}
                  sx={{ width: 60, height: 60 }}
                />
                <MenuLogo>ソリューション株式会社</MenuLogo>
              </Box>
            </NavLink>
          </Box>
          <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            <NavLink style={navlinkStyles} to="/">
              <MenuTypeItem>ホームページ</MenuTypeItem>
            </NavLink>
            <NavLink style={navlinkStyles} to="careers">
              <MenuTypeItem>キャリア</MenuTypeItem>
            </NavLink>
            <NavLink style={navlinkStyles} to="recruitment">
              <MenuTypeItem>採用情報</MenuTypeItem>
            </NavLink>
            {/* <NavLink style={navlinkStyles} to="employers">
              <MenuTypeItem>派遣の流れ</MenuTypeItem>
            </NavLink> */}
            <NavLink style={navlinkStyles} to="about">
              <MenuTypeItem>会社について</MenuTypeItem>
            </NavLink>
            <NavLink style={navlinkStyles} to="contact-us">
              <MenuTypeItem>お問い合わせ</MenuTypeItem>
            </NavLink>
          </MenuBox>
          <MenuIcon
            sx={{
              color: "white",
              display: { xs: "block", sm: "block", md: "none" }
            }}
            onClick={() => setOpen(!open)}
          />
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
        >
          <Box sx={{ width: 350, height: "60vh", backgroundColor: "white" }}>
            {[
              { path: "/", link: "ホームページ" },
              { path: "careers", link: "キャリア" },
              { path: "recruitment", link: "採用情報" },
              // { path: "employers", link: "派遣の流れ" },
              { path: "about", link: "会社について" },
              { path: "contact-us", link: "お問い合わせ" }
            ].map(el => (
              <NavLink to={el.path} onClick={handleClose}>
                <MenuTypeItem2>{el.link}</MenuTypeItem2>
              </NavLink>
            ))}
          </Box>
        </Menu>
      </AppBar>
    </>
  )
}

export default Navbar
