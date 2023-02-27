import Backdrop from "@mui/material/Backdrop"
import loaderGif from "../assets/images/HA2-2.gif"
import CircularProgress from "@mui/material/CircularProgress"

import { Container, Typography } from "@mui/material"

export default function Loader() {
  return (
    // <Container sx={{ height: "70vh", pt: 2 }}>
    //   <Typography variant="h5" sx={{ color: "#D8AE5E" }}>
    //     Loading...
    //   </Typography>
    <LoadingProgress />
    // </Container>
  )
}

function LoadingProgress() {
  return (
    <div>
      <Backdrop open={true} sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
        {/* <CircularProgress sx={{ color: "#D8AE5E" }} /> */}
        <img src={loaderGif} width="800px" />
      </Backdrop>
    </div>
  )
}

// sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}
