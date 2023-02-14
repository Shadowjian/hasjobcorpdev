import {
  AccessTime,
  ArrowBack,
  BeachAccess,
  Business,
  CurrencyYen,
  Image,
  Language,
  People,
  PeopleAlt,
  Place,
  Wc,
  Work,
  WorkspacePremium,
  Workspaces
} from "@mui/icons-material"
import { Avatar, Button, Container, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import { Box, Stack } from "@mui/system"
import { Link, useLoaderData, useParams } from "react-router-dom"
import HeroImage from "../../assets/images/jobcoverdetails.png"
import AdsImage from "../../assets/images/img.png"

export default function CareerDetails() {
  // const { id } = useParams()
  const career = useLoaderData()

  

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${HeroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "20vh",
          width: "100%",
          paddingTop: "30px",
          paddingLeft: { md: "370px" },
          color: "#fff"
        }}
      >
        <Typography variant="h2">{career.occupation_title}</Typography>
        <Box
          display="flex"
          marginLeft="10px"
          sx={{ gap: "5px", alignContent: "center" }}
        >
          <Link to="../careers">
         <Box sx={{display:"flex"}}>
         <ArrowBack sx={{color:"white", "&:hover":{color:"#D8AE5E"}}} />

          
            <Typography sx={{ color: "#fff" }}>Careers</Typography>
            </Box>
          </Link>
       
        
          <Typography sx={{ color: "gray" }}>/Job Details</Typography>
        </Box>
      </Box>

      <Container sx={{ marginTop: "50px", display:"flex", gap:"30px" }}>
        <Box maxWidth="80%" width="100%">
          <Box
            sx={{
              backgroundImage: `url(${AdsImage})`,
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              height: "30vh",
              width: "100%",
              borderRadius: "10px",
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          ></Box>

          <Box sx={{ display: "flex", marginTop: "30px" }}>
            <Container>
              <Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "30px" }}
                >
                  <Typography variant="h5" sx={{ color: "gray" }}>
                    <Business fontSize="small" />
                  </Typography>
                  <Typography
                    variant="h5"
                    fontSize="24px"
                    sx={{ color: "gray" }}
                  >
                    Company Name:
                  </Typography>
                </Box>
                <Typography variant="h5" fontSize="20px" paddingLeft="55px">
              
                  {career.company_name}
                </Typography>
              </Box>
              <Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "30px" }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "gray", marginTop: "10px" }}
                  >
                    <Work fontSize="small" />
                  </Typography>
                  <Typography
                    variant="h5"
                    fontSize="24px"
                    sx={{ color: "gray" }}
                  >
                    Job Type:
                  </Typography>
                </Box>
                <Typography variant="h5" fontSize="20px" paddingLeft="55px">
       
                  {career.job_type}
                </Typography>
              </Box>
              <Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "30px" }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "gray", marginTop: "10px" }}
                  >
                    <Place fontSize="small" />
                  </Typography>
                  <Typography
                    variant="h5"
                    fontSize="24px"
                    sx={{ color: "gray" }}
                  >
                    Location:
                  </Typography>
                </Box>
                <Typography variant="h5" fontSize="20px" paddingLeft="55px">
                  {" "}
                  {career.location}
                </Typography>
              </Box>
              <Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "30px" }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "gray", marginTop: "10px" }}
                  >
                    <CurrencyYen fontSize="small" />
                  </Typography>
                  <Typography
                    variant="h5"
                    fontSize="24px"
                    sx={{ color: "gray" }}
                  >
                    Salary:
                  </Typography>
                </Box>
                <Typography variant="h5" fontSize="20px" paddingLeft="55px">
             
                  {career.salary_min} - {career.salary_max} / hour
                </Typography>
              </Box>
            </Container>

            <Container>
              <Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "30px" }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "gray", marginTop: "10px" }}
                  >
                    <Language fontSize="small" />
                  </Typography>
                  <Typography
                    variant="h5"
                    fontSize="24px"
                    sx={{ color: "gray" }}
                  >
                    Japanese Language Level:
                  </Typography>
                </Box>
                <Typography variant="h6" fontSize="16px" paddingLeft="55px">
                  {career.japanese_language_level}
                </Typography>
              </Box>

              <Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "30px" }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "gray", marginTop: "10px" }}
                  >
                    <WorkspacePremium fontSize="small" />
                  </Typography>
                  <Typography
                    variant="h5"
                    fontSize="24px"
                    sx={{ color: "gray" }}
                  >
                    Years of Experience:
                  </Typography>
                </Box>
                <Typography variant="h6" fontSize="16px" paddingLeft="55px">
                  {career.experienced_level}
                </Typography>
              </Box>
              <Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "30px" }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "gray", marginTop: "10px" }}
                  >
                    <Wc fontSize="small" />
                  </Typography>
                  <Typography
                    variant="h5"
                    fontSize="24px"
                    sx={{ color: "gray" }}
                  >
                    Preferred Gender:
                  </Typography>
                </Box>
                <Typography variant="h6" fontSize="16px" paddingLeft="55px">
                  {career.preferred_sex_or_gender}
                </Typography>
              </Box>
              <Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "30px" }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "gray", marginTop: "10px" }}
                  >
                    <People fontSize="small" />
                  </Typography>
                  <Typography
                    variant="h5"
                    fontSize="24px"
                    sx={{ color: "gray" }}
                  >
                    Required # of Employees:
                  </Typography>
                </Box>
                <Typography variant="h6" fontSize="16px" paddingLeft="55px">
                  {career.req_no_of_employees}
                </Typography>
              </Box>
            </Container>
          </Box>
          <Box>
            <Typography variant="h4">Job Description</Typography>
            <Typography component="p">{career.job_desc}</Typography>
          </Box>

          <Button href="https://forms.gle/HdafsVVzWQ418cXv8" target="_blank" variant="contained"  sx={{width:"100%", height:"8%"}}>Apply Now!</Button>
        </Box>
{/* rightPane */}
        <Box maxWidth="25%" width="100%" sx={{  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding:"20px"}}>
          <Button href="https://forms.gle/HdafsVVzWQ418cXv8" target="_blank" variant="contained" align="center"  sx={{width:"100%", height:"8%"}}>Apply Now!</Button>
        <List>
          <Typography variant="h5">Job Overview</Typography>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Work />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Occupation Title" secondary={
            <>
              <Typography
                sx={{ display: 'inline', fontSize:"20px" }}
                component="span"
                variant="h5"
                color="text.primary"
              >
               {career.occupation_title}
              </Typography>
            </>
          }/>
        
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Place />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Location" secondary={
            <>
              <Typography
                sx={{ display: 'inline', fontSize:"20px" }}
                component="span"
                variant="h5"
                color="text.primary"
              >
               {career.location}
              </Typography>
            </>
          }/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CurrencyYen />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Salary" secondary={
            <>
              <Typography
                sx={{ display: 'inline', fontSize:"17px" }}
                component="span"
                variant="h5"
                color="text.primary"
              >
                {career.salary_min} ~ {career.salary_max} / hr
              </Typography>
            </>
          }/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccessTime />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Job Type" secondary={
            <>
              <Typography
                sx={{ display: 'inline', fontSize:"17px" }}
                component="span"
                variant="h5"
                color="text.primary"
              >
                {career.job_type}
              </Typography>
            </>
          }/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Wc />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Gender" secondary={
            <>
              <Typography
                sx={{ display: 'inline', fontSize:"17px" }}
                component="span"
                variant="h5"
                color="text.primary"
              >
                {career.preferred_sex_or_gender}
              </Typography>
            </>
          }/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Language />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Japanese Language" secondary={
            <>
              <Typography
                sx={{ display: 'inline', fontSize:"17px" }}
                component="span"
                variant="h5"
                color="text.primary"
              >
                {career.japanese_language_level}
              </Typography>
            </>
          }/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkspacePremium />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Experience" secondary={
            <>
              <Typography
                sx={{ display: 'inline', fontSize:"17px" }}
                component="span"
                variant="h5"
                color="text.primary"
              >
                {career.experienced_level}
              </Typography>
            </>
          }/>
      </ListItem>
    </List>

        </Box>
      </Container>
    </Box>
  )
}

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params

  const res = await fetch("https://hasjobcorp-api.vercel.app/api/careers/" + id)

  if (!res.ok) {
    throw Error("Could not find that career")
  }

  return res.json()
}
