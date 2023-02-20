import React from "react"
import { useNavigation } from "react-router-dom"
import AboutUsPage from "../../components/Aboutpage"
import Loader from "../../components/loader"

const About = () => {
  const navigation = useNavigation()

  if (navigation.state === "loading") return <Loader />
  return <AboutUsPage />
}

export default About
