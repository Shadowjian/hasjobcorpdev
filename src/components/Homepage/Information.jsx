import { ArrowCircleRight } from '@mui/icons-material'
import { Button, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const Information = () => {
  return (
    <Container sx={{display:{md:"flex", sm:"row", xs:"row"}}} >
        <Box backgroundColor="#D8AE5E" padding="30px" borderRadius="10px" mb="100px">
            <Typography padding=" 20px 0" variant="h2" fontSize={{xs:"30px", sm:"40px"}}>About the Company</Typography>
            <Typography variant="p" lineHeight={{xs:"10px", sm:"40px"}} fontSize={{xs:"12px", sm:"24px"}}>We are a company dedicated to connecting job seekers with the top employers in their field. We aim to make the job search process here in Japan as seamless and stress-free as possible.We offer a variety of recruitment services to suit your needs. Whether you're looking for a temporary, permanent, or contract position, we can help find the right candidate for your company. We also have a team of experienced recruiters who are committed to working with you.</Typography>
            <Box align="center">
            <Link to="about" >
            <Button sx={{
                borderColor:"#D8AE5E",
                color:"#0B3749",
                "&:hover":{
                    backgroundColor:"#0B3749",
                borderColor:"#D8AE5E",
                color: "#D8AE5E",
                
                }

            }} variant='outlined' endIcon={<ArrowCircleRight/>}>For More Information</Button>

            </Link>

            </Box>
        </Box>
    </Container>
  )
}

export default Information