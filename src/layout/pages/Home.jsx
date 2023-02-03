import React from 'react'
import Ads from '../../components/Homepage/Ads'
import Categories from '../../components/Homepage/Categories'
import Hero from '../../components/Homepage/Hero'
import Information from '../../components/Homepage/Information'


const Home = () => {
  return (
    <>
  <Hero/>
  <Categories/>
  <Ads/>
  <Information/>
    </>
  )
}

export default Home