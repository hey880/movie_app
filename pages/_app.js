import '../styles/globals.css'
import Nav from "./Nav";
import Footer from "./Footer";

function MyApp({ Component, pageProps }) {
  return <>
    <Nav/> 
    <Component {...pageProps} />
    <Footer/>
  </>
}

export default MyApp
