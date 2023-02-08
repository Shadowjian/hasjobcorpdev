import React from 'react'
import Ads from '../../components/Homepage/Ads'
import Categories from '../../components/Homepage/Categories'
import Hero from '../../components/Homepage/Hero'
import Information from '../../components/Homepage/Information'
import OwnerGreeting from '../../components/Homepage/OwnerGreeting'


const Home = () => {
  return (
    <>
  <Hero/>
  <Categories/>
  <Ads/>
  <Information/>
  <OwnerGreeting/>
    </>
  )
}

export default Home