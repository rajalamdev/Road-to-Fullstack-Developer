import type { NextPage } from 'next'
import Head from 'next/head'
import FeaturedPost from '../components/FeaturedPost'
import Layout from '../components/Layout'
import Posts from '../components/Posts'

export async function getStaticProps(){
  const reqFeatured = await fetch(process.env.apiUrl + "/api/posts?populate=*&filters[featuredPost][$eq]=true");
  const resFeatured = await reqFeatured.json();

  const reqPosts = await fetch(process.env.apiUrl + "/api/posts?populate=*&filters[featuredPost][$eq]=false");
  const resPosts = await reqPosts.json();

  return {
    props: {
      featured: resFeatured.data,
      posts: resPosts.data,
    }
  }
}

interface Props{
  featured: {},
  posts: {}
}

const Home: NextPage<Props> = ({featured, posts}) => {
  // const key:string = "0"
  // const featuredPostApi = featured[key as keyof typeof featured].attributes;

  const featuredPostApi = featured[0].attributes;
  const postsApi = posts

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
        <FeaturedPost {...featuredPostApi} />
        <Posts postsApi = {postsApi} />
      </Layout>
    </div>
  )
}

export default Home
