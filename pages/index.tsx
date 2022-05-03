import type { NextPage } from 'next'

// Next
import Head from 'next/head'
import FullLayout from '../components/FullLayout'
import HomeComponent from '../components/Home'
import HomePage from '../components/HomePage'

// Components
// import FullLayout from 'components/layouts/FullLayout'
// import HomePage from 'components/HomePage'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kahu Lifescience</title>
        <meta name="description" content="DoubleDice is a patent-backed non - custodial gateway to the pooled betting multiverse" />
      </Head>
      <HomeComponent /> 

      {/* <FullLayout> */}
        {/* <HomePage /> */}
      {/* </FullLayout> */}
    </>
  )
}

export default Home
