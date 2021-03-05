import Nav from 'src/components/Nav'
import Footer from 'src/components/Footer'

const GeneralLayout = ({ children }) => (
  <>
    <Nav
      body={
        <div>
          <main className="">{children}</main>
          <Footer />
        </div>
      }
    />
  </>
)
export default GeneralLayout
