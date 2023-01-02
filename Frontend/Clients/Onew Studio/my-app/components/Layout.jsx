import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
