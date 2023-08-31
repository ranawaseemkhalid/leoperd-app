import React from 'react'
import TopSection from '../../components/home/TopSection'
import WhyChooseUs from '../../components/home/WhyChooseUs'
import AllServices from '../../components/home/AllServices'

const Home = () => {
  return (
    <main>
      <article>
        <TopSection />
        <WhyChooseUs />
        <AllServices />
      </article>
    </main>
  )
}

export default Home