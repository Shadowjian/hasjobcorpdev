import { useState } from "react"
import {
  Outlet,
  ScrollRestoration,
  useLoaderData,
  useNavigation
} from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Loader from "../components/loader"
import Navbar from "../components/Navbar/Navbar"

const RootLayout = () => {
  const fetchedCareers = useLoaderData()
  const [careers, setCareers] = useState(fetchedCareers)
  const [catFilter, setCatFilter] = useState("")

  const states = {
    careers,
    catFilter
  }

  const dispatchers = {
    setCareers,
    setCatFilter
  }

  const navigation = useNavigation()
  return (
    <>
      <Navbar />
      <ScrollRestoration />
      {navigation.state === "loading" && <Loader />}
      <Outlet context={{ states, dispatchers }} />
      <Footer />
    </>
  )
}

export default RootLayout
