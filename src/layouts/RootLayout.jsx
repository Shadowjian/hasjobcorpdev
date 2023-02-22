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

  const navigation = useNavigation()
  return (
    <>
      <Navbar />
      <ScrollRestoration />
      {navigation.state === "loading" && <Loader />}
      <Outlet context={[careers, setCareers]} />
      <Footer />
    </>
  )
}

export default RootLayout
