import React, { useEffect, useState } from "react"

import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@mui/material"
import { Stack } from "@mui/system"
import { Link, useLoaderData } from "react-router-dom"
import MediaCard from "./MediaCard"

export default function Careers() {
  const fetchedCareers = useLoaderData()
  // const [searchInput, setSearchInput] = useState()
  const [careers, setCareers] = useState([])
  const [filters, setFilters] = useState({
    searchInput: "",
    salaryMin: "",
    salaryMax: "",
    jobType: ""
  })

  useEffect(() => {
    !filters.searchInput && setCareers(fetchedCareers)
  }, [filters])

  const handleFilters = e => {
    const { name, value } = e.target
    setFilters({ ...filters, [name]: value })
  }

  const searchCareers = () => {
    // setSearchInput(e.target.value)
    setCareers(
      careers.filter(
        career =>
          parseInt(career.salary_min) === filters.salaryMin &&
          parseInt(career.salary_max) === filters.salaryMax &&
          career.occupation_title
            .toLowerCase()
            .includes(filters.searchInput.toLowerCase())
      )
    )
  }

  // console.log(careers.map(career => career.salary_min))

  return (
    <Container sx={{ marginTop: "50px" }}>
      {/* <form> */}
      <TextField
        type="text"
        size="small"
        name="searchInput"
        value={filters.searchInput}
        onChange={handleFilters}
        placeholder="Search careers"
      />
      <Button onClick={searchCareers}>Search</Button>
      <Stack>
        {/* <FormControl fullWidth> */}
        <InputLabel id="salaryMin">Minimum Salary</InputLabel>
        <Select
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
        {/* </FormControl> */}
      </Stack>
      {/* </form> */}
      {filters.searchInput && (
        <Typography variant="h6">
          Search Results for <i>({filters.searchInput})</i> : {careers.length}
        </Typography>
      )}
      <p>{filters.salaryMin}</p>
      <p>{filters.salaryMax}</p>
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
    </Container>
  )
}
