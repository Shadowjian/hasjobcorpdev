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
import { careerLoader } from "./pages/admin/AdminCareers"
import CareerDetails, {
  careerDetailsLoader
} from "./pages/careers/CareerDetails"

import AddCareerForm, { careerFormAction } from "./pages/admin/AddCareerForm"
import AdminCareers from "./pages/admin/AdminCareers"

import EmployersInfo from "./pages/employersInfo/EmployersInfo"
import EditCareerForm, { editAction } from "./pages/admin/AdminEditForm"
import { destroyAction } from "./pages/admin/CareerCard"
import ErrorPage from "./pages/error/ErrorPage"
import AdminSandbox from "./pages/admin/AdminSandbox"
import { useEffect } from "react"
import NoticeOfWork from "./components/Employerspage/pdf/NoticeOfWork"
import HasContract from "./components/Employerspage/pdf/HasContract"


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<RootLayout />}
        errorElement={<ErrorPage />}
        loader={careerLoader}
      >
        <Route index element={<Home />} />
        <Route path="careers" element={<Careers />} loader={careerLoader} />
        <Route
          path="careers/:id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />

        <Route path="recruitment" element={<Recruitment />} />
        <Route path="employers" element={<EmployersInfo />} />
        <Route path="noticeOfWork" element={<NoticeOfWork />} />
        <Route path="hascontract" element={<HasContract />} />
      

        <Route path="about" element={<AboutLayout />}>
          <Route index element={<Overview />} />
          <Route path="profile" element={<CompanyProfile />} />
          <Route path="whatwedo" element={<Whatcanwedo />} />
        </Route>

        <Route path="contact-us" element={<Contact />} />
      </Route>

      <Route
        path="admin"
        element={<AdminLayout />}
        errorElement={<ErrorPage />}
      >
        <Route index element={<AdminCareers />} loader={careerLoader} />
        <Route
          path="admincareers"
          element={<AdminCareers />}
          loader={careerLoader}
        />
        <Route
          path="/admin/admincareers/:id/edit"
          element={<EditCareerForm />}
          loader={careerDetailsLoader}
          action={editAction}
        />
        <Route path="/admin/admincareers/:id/destroy" action={destroyAction} />
        <Route
          path="addcareer"
          element={<AddCareerForm />}
          action={careerFormAction}
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
