import App from 'next/app'
import Layout from '@/components/Layout'
import '@/styles/globals.css'

export default function MyApp({ Component, pageProps, currentUser }) {

  return (
    <Layout currentUser={currentUser}>
      <Component {...pageProps} currentUser={currentUser} />
    </Layout>
  )
}

MyApp.getInitialProps = async (ctx) => {
  const token = ctx.ctx.req.cookies.token

  const appProps = await App.getInitialProps(ctx);
  const reqMyProfile = await fetch(`${process.env.PUBLIC_API_URL}/api/users/me`, {
    headers: {
        "Authorization": "Bearer " + token
    }
  })

  const resMyProfile = await reqMyProfile.json()

  return { ...appProps, currentUser: {id: resMyProfile.id, username: resMyProfile.username}}
}