import { AppBar, Typography } from '@mui/material'
import React from 'react'

const AboutNavbar = () => {
  return (
    <AppBar sx={{backgroundColor:"#0B3749", p:"10px",mt:"105px", flexDirection:"row", justifyContent:"center", gap:"100px"}} >
        <Typography>
            Company Profile
        </Typography>
        <Typography>
            Overview
        </Typography>
        <Typography>
            What Can We DO
        </Typography>
    </AppBar>
  )
}

export default AboutNavbar