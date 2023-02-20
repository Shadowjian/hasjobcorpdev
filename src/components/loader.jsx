import Backdrop from "@mui/material/Backdrop"
import CircularProgress from "@mui/material/CircularProgress"

import { Container, Typography } from "@mui/material"

export default function Loader() {
  return (
    <LoadingProgress />
    // <Container sx={{ height: "70vh", pt: 2 }}>
    //   <Typography variant="h5" sx={{ color: "#D8AE5E" }}>
    //     Loading...
    //   </Typography>
    // </Container>
  )
}

function LoadingProgress() {
  return (
    <div>
      <Backdrop open={true} sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
        <CircularProgress sx={{ color: "#D8AE5E" }} />
      </Backdrop>
    </div>
  )
}

// sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}
