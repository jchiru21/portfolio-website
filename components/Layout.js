// components/Layout.js
// Shared shell: fixed chrome + sticky nav + framed content + footer.
import ScrollChrome from "./ScrollChrome"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ScrollToTop from "./ScrollToTop"

export default function Layout({ children }) {
  return (
    <>
      <ScrollChrome />
      <div className="shell">
        <Navbar />
        <div className="frame">{children}</div>
        <Footer />
      </div>
      <ScrollToTop />
    </>
  )
}
