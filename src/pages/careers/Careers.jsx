import * as React from "react"
import { Box, Container } from "@mui/material"
import { Stack } from "@mui/system"
import { Link, useLoaderData } from "react-router-dom"
import MediaCard from "./MediaCard"

export default function Careers() {
  const careers = useLoaderData()
  return (
    <Container sx={{marginTop:"50px"}}>
      <Box>
        <Stack
          mt={3}
          gap={3}
          direction="horizontal"
          flexWrap="wrap"
          justifyContent="center"
        >
          {careers.map(career => (
            <Link to={career.id.toString()} key={career.id}>
              <MediaCard career={career} />
            </Link>
          ))}
        </Stack>
      </Box>
    </Container>
  )
}

// function MediaCard({ career }) {
//   return (
//     <Container>
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 140, width: 300 }}
//         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEcnJt1Hw8ZrwezrdWT25ji8UGKUFMC77mI_vsGJxAddhKYVkMDKxsbtSGuwdbkYVQdM&usqp=CAU"
//       />
//       <CardContent  >
//         <Box sx={{display:"flex", gap:"30px"}}>
//         <Typography sx={{color:"gray"}}><Work/></Typography>
//         <Typography variant="h3" sx={{fontSize:"25px"}}>
//           {career.occupation_title}
//         </Typography>
//         </Box>
//         <Box sx={{display:"flex", gap:"30px"}}>
//         <Typography sx={{color:"gray"}}><Business/></Typography>
//         <Typography > 
//          {career.company_name}
//         </Typography>
//         </Box>
//         <Box sx={{display:"flex", gap:"30px"}}>
//         <Typography sx={{color:"gray"}}><AccessTime/></Typography>
//         <Typography > 
//          {career.job_type}
//         </Typography>
//         </Box>
//         <Box sx={{display:"flex", gap:"30px"}}>
//         <Typography sx={{color:"gray"}}><CurrencyYen/></Typography>
//         <Typography >
//           {career.salary} /hr
//         </Typography>
//         </Box>
//         <Box sx={{display:"flex", gap:"30px"}}>
//         <Typography sx={{color:"gray"}}><Place/></Typography>
//         <Typography >
//           {career.location}
//         </Typography>
//         </Box> 
//       </CardContent>
//       <Box align="center" marginBottom="20px">
//       <Button variant="contained">Apply Now</Button>
//       </Box>
  
//     </Card>
//     </Container>
//   )
// }
