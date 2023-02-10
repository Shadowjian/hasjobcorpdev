import { AccessTime, ArrowBack, Business, CurrencyYen, Language, People, PeopleAlt, Place, Wc, Work, WorkspacePremium, Workspaces } from "@mui/icons-material";
import { Button, Container, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { Link, useLoaderData, useParams } from "react-router-dom";
import HeroImage from "../../assets/images/jobcoverdetails.png";
import AdsImage from "../../assets/images/img.png";

export default function CareerDetails() {
  // const { id } = useParams()
  const career = useLoaderData();
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
          paddingTop:"30px",
          paddingLeft:{md:"370px"},
          color: "#fff",
        }}
      >
        <Typography variant="h2" >{career.occupation_title}</Typography>
        <Box display="flex" marginLeft="10px"  sx={{gap:"5px", alignContent:"center"}}>
        <Link to="../careers">
          <Typography sx={{color:"#fff"}}>Careers</Typography>
        </Link>
        <Typography  sx={{color:"gray"}}>/Job Details</Typography>
        </Box>
      </Box>
     
      <Container sx={{ marginTop: "50px" }}>

        <Box maxWidth="80%"> 
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
          >
          </Box>

          <Box sx={{display:"flex",marginTop:"30px"}}>
        <Container>
          <Box>
          <Box sx={{display:"flex", alignItems:"center", gap:"30px"}}>
          <Typography variant="h5" sx={{color:"gray"}}><Business fontSize="small"/></Typography>
          <Typography variant="h5" fontSize="24px" sx={{color:"gray"}}>Company Name:</Typography>
          </Box>
          <Typography variant="h5" fontSize="20px" paddingLeft="55px"> {career.company_name}</Typography>
          </Box>
          <Box>
          <Box sx={{display:"flex", alignItems:"center", gap:"30px"}}>
          <Typography variant="h5" sx={{color:"gray", marginTop:"10px"}}><Work fontSize="small"/></Typography>
          <Typography variant="h5" fontSize="24px" sx={{color:"gray"}}>Job Type:</Typography>
          </Box>
          <Typography variant="h5" fontSize="20px" paddingLeft="55px"> {career.job_type}</Typography>
          </Box>
          <Box>
          <Box sx={{display:"flex", alignItems:"center", gap:"30px"}}>
          <Typography variant="h5" sx={{color:"gray", marginTop:"10px"}}><Place fontSize="small"/></Typography>
          <Typography variant="h5" fontSize="24px" sx={{color:"gray"}}>Location:</Typography>
          </Box>
          <Typography variant="h5" fontSize="20px" paddingLeft="55px"> {career.location}</Typography>
          </Box>
          <Box>
          <Box sx={{display:"flex", alignItems:"center", gap:"30px"}}>
          <Typography variant="h5" sx={{color:"gray", marginTop:"10px"}}><CurrencyYen fontSize="small"/></Typography>
          <Typography variant="h5" fontSize="24px" sx={{color:"gray"}}>Salary:</Typography>
          </Box>
          <Typography variant="h5" fontSize="20px" paddingLeft="55px"> {career.salary}</Typography>
          </Box>
          </Container>

          <Container>
          <Box>
          <Box sx={{display:"flex", alignItems:"center", gap:"30px"}}>
          <Typography variant="h5" sx={{color:"gray", marginTop:"10px"}}><Language fontSize="small"/></Typography>
          <Typography variant="h5" fontSize="24px" sx={{color:"gray"}}>Japanese Language Level:</Typography>
          </Box>
          <Typography variant="h6" fontSize="16px" paddingLeft="55px">{career.job_level}</Typography>
          </Box>



          <Box>
          <Box sx={{display:"flex", alignItems:"center", gap:"30px"}}>
          <Typography variant="h5" sx={{color:"gray", marginTop:"10px"}}><WorkspacePremium fontSize="small"/></Typography>
          <Typography variant="h5" fontSize="24px" sx={{color:"gray"}}>Years of Experience:</Typography>
          </Box>
           <Typography variant="h6" fontSize="16px" paddingLeft="55px">{career.experienced_level}</Typography>
          </Box>
          <Box>

          <Box sx={{display:"flex", alignItems:"center", gap:"30px"}}>
          <Typography variant="h5" sx={{color:"gray", marginTop:"10px"}}><Wc fontSize="small"/></Typography>
          <Typography variant="h5" fontSize="24px" sx={{color:"gray"}}>Preferred Gender:</Typography>
          </Box>
          <Typography variant="h6" fontSize="16px" paddingLeft="55px">{career.preferred_sex_or_gender}</Typography>
          </Box>
          <Box>
          <Box sx={{display:"flex", alignItems:"center", gap:"30px"}}>
          <Typography variant="h5" sx={{color:"gray", marginTop:"10px"}}><People fontSize="small"/></Typography>
          <Typography variant="h5" fontSize="24px" sx={{color:"gray"}}>Required # of Employees:</Typography>
          </Box>
          <Typography variant="h6" fontSize="16px" paddingLeft="55px">{career.req_no_of_employees}</Typography>
          </Box>

          </Container>
          </Box>
          <Box>
            <Typography variant="h4">Job Description</Typography>
            <Typography component="p">{career.job_desc}</Typography>
            
          </Box>
          </Box>


        <Box maxWidth="20%"></Box>
        

        {/* career details */}
        {/* <Stack>
          <Typography variant="h4">{career.occupation_title}</Typography>
          <Typography>posting date</Typography>
        </Stack>
        <Button>Apply Now</Button>
        <Stack>
          <hr />
          <Box>company image here</Box>
          <hr />
          <Typography>Industry: {career.cat_of_industry}</Typography>
          <Typography>Job Level: {career.job_level}</Typography>
          <Typography>Salary: {career.salary}</Typography>
          <Typography>Experience: {career.experienced_level}</Typography>
          <Typography>Job Level: {career.job_type}</Typography>
          <Typography>Updated: to fix the TS</Typography>
          <Typography>Location: {career.location}</Typography>
        </Stack>
        <hr /> */}
        {/* employer details */}
        {/* <Stack>
          <Typography>{career.company_name}</Typography>
          <Typography>{career.req_no_of_employees} Open Job</Typography>
          <Typography>{career.location}</Typography>
          <Typography>{career.company_contact_no}</Typography>
          <Typography>{career.company_email}</Typography>
        </Stack> */}
        {/* <hr /> */}
        {/* <Stack>
          <Typography>{career.job_desc}</Typography>
        </Stack>
        <Button>Apply Now</Button> */}
      </Container>
    </Box>
  );
}

// <Link to="../careers">
//         <ArrowBackIosIcon />
//         Careers
//       </Link>
//       <Typography variant="h4">{career.company_name}</Typography>
//       <Typography variant="h4">{career.occupation_title}</Typography>
//       <Typography>Salary: {career.salary}</Typography>
//       <Typography>Location: {career.location}</Typography>
//       <Box className="details">
//         <Typography>{career.job_desc}</Typography>
//       </Box>
//       <Button>Apply</Button>

// loader function

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:4000/careers/" + id);

  if (!res.ok) {
    throw Error("Could not find that career");
  }

  return res.json();
};
