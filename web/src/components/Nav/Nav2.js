import { useLocation, Link, routes } from '@redwoodjs/router'
const Nav = (props) => {
  const { pathname } = useLocation()
  const ActionItem = props.actionitem || (
    <Link
      to={routes.products()}
      aria-label="Shop Now"
      title="Shop Now"
      className={`inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-600 focus:shadow-outline focus:outline-none ${
        pathname === '/' ? 'visible' : 'invisible'
      }`}
    >
      Shop Now
    </Link>
  )
  return (
    <div className="w-full px-4 py-5 mx-auto md:px-24 lg:px-8 bg-yellow-500 z-50 shadow-md ">
      <div className="relative flex items-center justify-between max-w-6xl mx-auto  ">
        <div className="flex items-center">
          <Link
            to={routes.home()}
            href="/"
            aria-label="Primeline Hollow Blocks"
            title="Primeline Hollow Blocks"
            className="inline-flex items-center mr-8"
          >
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              <img src="/Primeline Logo.svg" height="400" width="400" />
            </span>
          </Link>
        </div>
        <ul className={`flex items-center hidden space-x-8 lg:flex `}>
          <li>{ActionItem}</li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
