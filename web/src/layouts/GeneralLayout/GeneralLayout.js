import Nav from 'src/components/Nav'
import Footer from 'src/components/Footer'

import { useEffect } from 'react'

const GeneralLayout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
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
}
export default GeneralLayout
