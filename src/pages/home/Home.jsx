import React from "react"
import Ads from "../../components/Homepage/Ads"
import Categories from "../../components/Homepage/Categories"
import Hero from "../../components/Homepage/Hero"
import Information from "../../components/Homepage/Information"
import OwnerGreeting from "../../components/Homepage/OwnerGreeting"
import AOS from "aos"
import "aos/dist/aos.css" // You can also use <link> for styles
import { useNavigation } from "react-router-dom"
import Loader from "../../components/loader"
// ..
AOS.init()

const Home = () => {
  // loading UI
  // const navigation = useNavigation()
  // if (navigation.state === "loading") {
  //   return <Loader />
  // }
  return (
    <>
      <Hero />
      <Categories />
      <Ads />
      <Information />
      <OwnerGreeting />
    </>
  )
}

export default Home
