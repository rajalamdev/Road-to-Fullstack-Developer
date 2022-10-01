import type { NextPage } from 'next'
import Head from 'next/head'
import FeaturedPost from '../components/FeaturedPost'
import Layout from '../components/Layout'
import Posts from '../components/Posts'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <FeaturedPost />
        <Posts />
      </Layout>
    </div>
  )
}

export default Home