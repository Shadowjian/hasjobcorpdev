import RootLayout from "./layouts/RootLayout"
import Home from "./pages/home/Home"
import Careers from "./pages/careers/Careers"
import Recruitment from "./pages/recruitment/Recruitment"
// import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import { ThemeProvider } from "@emotion/react"
import { createTheme, dividerClasses } from "@mui/material"

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
import AdminDashboard from "./pages/admin/AdminDashboard"
import AdminLayout from "./layouts/AdminLayout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="careers" element={<Careers />} />

        <Route path="recruitment" element={<Recruitment />} />
        <Route path="tab1" />

        <Route path="about" element={<AboutLayout />}>
          <Route path="profile" element={<CompanyProfile />} />
          <Route path="overview" element={<Overview />} />
          <Route path="whatwedo" element={<Whatcanwedo />} />
        </Route>

        <Route path="contact-us" element={<Contact />} />
      </Route>
      <Route path="admin" element={<AdminLayout />} />
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
