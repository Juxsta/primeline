import Nav from 'src/components/Nav'
import Footer from 'src/components/Footer'

const GeneralLayout = ({ children }) => (
  <>
    <div className="flex flex-col h-screen">
      <Nav />
      <div className="flex-1 overflow-y-auto">
        <main className="">{children}</main>
        <Footer />
      </div>
    </div>
  </>
)
export default GeneralLayout
