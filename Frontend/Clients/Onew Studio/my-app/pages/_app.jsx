import '../styles/globals.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { faTrashCan, faPen, faCalendarCheck, faTriangleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons'
import {faMoon, faSun} from '@fortawesome/free-regular-svg-icons'
import {faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { config } from "@fortawesome/fontawesome-svg-core";
import { AppProvider } from '../context/AppContext';
import Layout from '../components/Layout';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

library.add(faTrashCan, faPen, faCalendarCheck, faMoon, faTriangleExclamation, faXmark, faSun, faInstagram, faWhatsapp)

function MyApp({ Component, pageProps }) {
  return (
      <>
        <AppProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppProvider>
      </>
    )
}

export default MyApp
