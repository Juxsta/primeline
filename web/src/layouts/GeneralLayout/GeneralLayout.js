import Nav from 'src/components/Nav'
import Footer from 'src/components/Footer'
const GeneralLayout = ({ children }) => {
  return <>
    <Nav />
    <main>
      {children}
    </main>
    <Footer />
  </>
}

export default GeneralLayout
