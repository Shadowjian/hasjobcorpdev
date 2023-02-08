import RootLayout from "./layouts/RootLayout"
import Home from "./pages/home/Home"
import Careers from "./pages/careers/Careers"
import Recruitment from "./pages/recruitment/Recruitment"
// import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import { ThemeProvider } from "@emotion/react"
import { createTheme } from "@mui/material"

// Setting up new Router
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom"
import AboutLayout from "./layouts/AboutLayout"
import CompanyProfile from "./components/Aboutpage/components/CompanyProfile"
import Overview from "./components/Aboutpage/components/Overview"
import Whatcanwedo from "./components/Aboutpage/components/Whatcanwedo"
import AdminLayout from "./layouts/AdminLayout"
import AdminJobs, { careerLoader } from "./pages/admin/AdminJobs"
import CareerDetails, {
  careerDetailsLoader
} from "./pages/careers/CareerDetails"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="careers" element={<Careers />} loader={careerLoader} />
        <Route
          path="careers/:id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />

        <Route path="recruitment" element={<Recruitment />} />

        <Route path="about" element={<AboutLayout />}>
          <Route index element={<Overview />} />
          <Route path="profile" element={<CompanyProfile />} />
          <Route path="whatwedo" element={<Whatcanwedo />} />
        </Route>

        <Route path="contact-us" element={<Contact />} />
      </Route>
      <Route path="admin" element={<AdminLayout />}>
        <Route
          path="/admin/adminjobs"
          element={<AdminJobs />}
          loader={careerLoader}
        />
      </Route>
    </>
  )
)

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Zen Old Mincho", "serif"].join(",")
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
