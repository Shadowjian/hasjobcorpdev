import React, { useEffect, useState } from "react"

import {
  Box,
  Button,
  Container,
  InputAdornment,
  TextField,
  Tooltip,
  Typography
} from "@mui/material"
import { Stack } from "@mui/system"
import {
  Link,
  useLoaderData,
  useNavigation,
  useOutletContext
} from "react-router-dom"
import MediaCard from "./MediaCard"
import SearchIcon from "@mui/icons-material/Search"
import ClearIcon from "@mui/icons-material/Clear"
import Loader from "../../components/loader"
import { Clear } from "@mui/icons-material"

export default function Careers() {
  const fetchedCareers = useLoaderData()
  const [searchInput, setSearchInput] = useState()
  const [careers, setCareers] = useOutletContext()
  // const [filters, setFilters] = useState({
  //   searchInput: "",
  //   salaryMin: "",
  //   salaryMax: "",
  //   jobType: "",
  //   showResult: false
  // })

  // useEffect(() => {
  //   !searchInput && setCareers(fetchedCareers)
  //   setFilters({ ...filters, showResult: false })
  // }, [searchInput])

  // const handleFilters = e => {
  //   const { name, value } = e.target
  //   setFilters({ ...filters, [name]: value })
  // }

  const searchCareers = e => {
    // setFilters({ ...filters, showResult: true })
    setSearchInput(e.target.value)

    setCareers(
      careers.filter(career =>
        // parseInt(career.salary_min) === filters.salaryMin &&
        // parseInt(career.salary_max) === filters.salaryMax &&
        career.job_tags.some(element =>
          element.toLowerCase().includes(searchInput.toLowerCase())
        )
      )
    )
  }

  // const cat = ["Health", "Cleaning", "Factory", "Warehouse"]

  function handleCategory(e) {
    const input = e.target.value

    setCareers(
      careers.filter(career =>
        career.job_tags.some(element =>
          element.toLowerCase().includes(input.toLowerCase())
        )
      )
    )
  }

  const resetFilter = () => {
    setCareers(fetchedCareers)
    setSearchInput("")
  }

  // setSellers(Sellers.filter((seller)=>{
  //   // chaining some and includes method to filter array
  //   return seller.skills.some((element)=>element.includes(searchInput.toLowerCase()))
  // }))

  // loading UI
  // const navigation = useNavigation()
  // if (navigation.state === "loading") {
  //   return <Loader />
  // }

  // console.log(filters.searchInput)

  // console.log(careers.map(career => career.salary_min))

  return (
    <Container sx={{ marginTop: "50px" }}>
      {/* <form> */}
      <Stack gap={2}>
        <TextField
          mx="auto"
          size="small"
          name="searchInput"
          value={searchInput}
          onChange={searchCareers}
          placeholder="Search careers"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon onClick={searchCareers} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="start">
                {searchInput && (
                  <Tooltip title="clear search">
                    <Clear
                      onClick={resetFilter}
                      sx={{
                        "&:hover": { cursor: "pointer", color: "red" },
                        color: "#0B3749",
                        size: ""
                      }}
                    />
                  </Tooltip>
                )}
              </InputAdornment>
            )
          }}
          sx={{ width: "90%", alignSelf: "center" }}
        />
        <Typography variant="h6" textAlign="center">
          Search by Categories
        </Typography>
        <Stack
          direction="horizontal"
          gap={2}
          justifyContent="center"
          alignItems="center"
        >
          {["HealthCare", "Manufacturing", "Housekeeping", "Warehouse"].map(
            el => (
              <Button
                variant="contained"
                size="small"
                onClick={handleCategory}
                value={el}
                sx={{
                  bgcolor: "#D8AE5E",
                  color: "#0B3749",
                  "&:hover": { bgcolor: "#0B3749", color: "#D8AE5E" }
                }}
              >
                {el}
              </Button>
            )
          )}
          <Button
            variant="contained"
            size="small"
            onClick={resetFilter}
            sx={{
              bgcolor: "#D8AE5E",
              color: "#0B3749",
              "&:hover": { bgcolor: "#0B3749", color: "#D8AE5E" }
            }}
          >
            All
          </Button>
        </Stack>
        {/* <Button onClick={searchCareers}>Search</Button> */}
        {/* <Stack>
        <InputLabel id="salaryMin">Minimum Salary</InputLabel>
        <Select
          size="small"
          labelId="salaryMin"
          id="salaryMin"
          name="salaryMin"
          label="Minimum"
          value={filters.salaryMin}
          onChange={handleFilters}
        >
          <MenuItem value={500}>500</MenuItem>
          <MenuItem value={1000}>1000</MenuItem>
          <MenuItem value={2000}>2000</MenuItem>
          <MenuItem value={3000}>3000</MenuItem>
        </Select>
        <InputLabel id="salaryMax">Maximum Salary</InputLabel>
        <Select
          size="small"
          labelId="salaryMax"
          name="salaryMax"
          id="salaryMax"
          value={filters.salaryMax}
          onChange={handleFilters}
        >
          <MenuItem value={500}>500</MenuItem>
          <MenuItem value={1000}>1000</MenuItem>
          <MenuItem value={2000}>2000</MenuItem>
          <MenuItem value={3000}>3000</MenuItem>
          <MenuItem value={4000}>4000</MenuItem>
          <MenuItem value={5000}>5000</MenuItem>
          <MenuItem value={6000}>6000</MenuItem>
        </Select>
      </Stack> */}
        {searchInput && (
          <Typography variant="h6" textAlign="center">
            Search Results for <i>({searchInput})</i> : {careers.length}
          </Typography>
        )}
        {/* <p>{filters.salaryMin}</p> */}
        {/* <p>{filters.salaryMax}</p> */}
        <Box>
          <Stack
            mt={3}
            gap={3}
            direction="horizontal"
            flexWrap="wrap"
            justifyContent="center"
          >
            {careers.map(career => (
              <Link to={career._id.toString()} key={career._id}>
                <MediaCard career={career} />
              </Link>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}
