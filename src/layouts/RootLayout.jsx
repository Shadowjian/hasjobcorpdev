import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Loader from "../components/loader"
import Navbar from "../components/Navbar/Navbar"

const RootLayout = () => {
  const navigation = useNavigation()
  return (
    <>
      <Navbar />
      <ScrollRestoration />
      {navigation.state === "loading" && <Loader />}
      <Outlet />
      <Footer />
    </>
  )
}

export default RootLayout
