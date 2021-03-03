import GeneralLayout from 'src/layouts/GeneralLayout'
import Icon from '@material-ui/core/Icon'
import { Link, routes } from '@redwoodjs/router'

const HomePage = (props) => {
  return (
    <GeneralLayout>
      <div
        className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 w-full bg-yellow-500"
        strength={300}
      >
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
            className="absolute left-0 hidden h-full text-yellow-500 transform -translate-x-1/2 lg:block"
          >
            <path d="M50 0H100L50 100H0L50 0Z"></path>
          </svg>
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-none">
              The foundation of your construction.
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-800 md:text-lg">
              The best quality materials to get the job done right and with
              confidence.
            </p>
            <div className="flex items-center">
              <Link
                to={routes.products()}
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-600 focus:shadow-outline focus:outline-none"
              >
                Get a quote today!
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 bg-gray-300 mx-auto w-full md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col max-w-4xl mx-auto mb-6 lg:flex-row md:mb-10">
          <div className="lg:w-1/2">
            <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-none xl:max-w-lg">
              Safe and secure building blocks.
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-base text-gray-800 md:text-lg">
              Hollow Blocks offer a lightweight alternative to traditional
              bricks and mortar for any project, big or small.
            </p>
          </div>
        </div>
        <div className="grid max-w-4xl gap-20 row-gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-2">
          <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-red-100">
              <Icon
                className="fas fa-chimney  text-red-600 mb-1"
                fontSize="medium"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-gray-800">
              Long lasting strength with low maintenance costs.
            </h6>
            <p className="mb-3 text-sm text-gray-800">
              They can last up to 50 years of heavy use before needing
              replacement which is less than traditional concrete building
              materials like block, brick or stone which will only last 20-30
              years on average under the same conditions."
            </p>
            <Link
              to={routes.products()}
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-red-600 hover:text-red-600"
            >
              Learn more
            </Link>
          </div>
          <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-red-100">
              <svg
                stroke="currentColor"
                viewBox="0 0 52 52"
                className="w-12 h-12 text-red-600"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="red"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-gray-800">
              Hassle-free installation process.
            </h6>
            <p className="mb-3 text-sm text-gray-800">
              With our hollow blocks, you don&apos;t need to worry about
              foundation or footing problems because they act as a solid base
              for your walls and floors without requiring costly excavations in
              hard terrain like rocky hillsides or wetlands.
            </p>
            <Link
              to={routes.products()}
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-red-600 hover:text-red-600"
            >
              Learn more
            </Link>
          </div>
          <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-red-100">
              <Icon
                className="fas fa-hard-hat  text-red-600 mb-1"
                fontSize="medium"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-gray-800">
              Safety first.
            </h6>
            <p className="mb-3 text-sm text-gray-800">
              Our loadbearing hollow blocks can be used for anything from
              residential homes to high rise buildings. We use only the best
              quality materials, all of which are lab certified and fully tested
              to ensure safety when constructing your project.
            </p>
            <Link
              to={routes.products()}
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-red-600 hover:text-red-600"
            >
              Learn more
            </Link>
          </div>
          <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-red-100">
              <Icon className="fas fa-building  text-red-600 mb-1" />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-gray-800">
              Your Project's Successful Foundation Starts Here!
            </h6>
            <p className="mb-3 text-sm text-gray-800">
              Need help? Reach out to us anytime at
              hello@hollowblocksphilippines or on social media @HollowBlocksPH
            </p>
            <Link
              to={routes.products()}
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-red-600 hover:text-red-600"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20 w-full bg-gray-300">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-red-600">
              Brand new
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-800 sm:text-4xl md:mx-auto">
            Hollow Blocks for All Your Building Needs
          </h2>
          <p className="text-base text-gray-800 md:text-lg">
            Our hollow blocks are fully capable of safe, secure, and quality
            material. We make load-bearing hollow blocks from scratch with the
            best quality materials starting from 4" to 6" and ranging from 500
            PSI to 1000 PSI
          </p>
        </div>
        <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
          <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
            <div className="relative w-full h-48">
              <img
                src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Plan"
                className="object-cover w-full h-full rounded-t"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
              <div>
                <div className="text-lg font-semibold">
                  Concrete Hollow Block 4"
                </div>
                <p className="text-sm text-gray-700">
                  These blocks are great for use small house plans or bungalows.
                </p>

                <div className="mt-3 mb-4 mr-1 text-4xl font-bold sm:text-4xl">
                  13.50 PHP
                </div>
              </div>
              <Link
                to={routes.products()}
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-600 focus:shadow-outline focus:outline-none"
              >
                Buy Basic Blocks
              </Link>
            </div>
          </div>
          <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
            <div className="relative w-full h-48">
              <img
                src="https://images.pexels.com/photos/3183181/pexels-photo-3183181.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Plan"
                className="object-cover w-full h-full rounded-t"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
              <div>
                <div className="text-lg font-semibold">
                  Concrete Hollow Block 5"
                </div>
                <p className="text-sm text-gray-700">
                  This size of hollow blocks can be used for residential and
                  commercial building
                </p>
                <div className="mt-3 mb-4 mr-1 text-4xl font-bold sm:text-4xl">
                  14.50 PHP
                </div>
              </div>
              <Link
                to={routes.products()}
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-600 focus:shadow-outline focus:outline-none"
              >
                Buy Advanced Blocks
              </Link>
            </div>
          </div>
          <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
            <div className="relative w-full h-48">
              <img
                src="https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Plan"
                className="object-cover w-full h-full rounded-t"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
              <div>
                <div className="text-lg font-semibold">
                  Concrete Hollow Block 6"
                </div>
                <p className="text-sm text-gray-700">
                  Preffered for large house plans and commercial buildings
                </p>
                <div className="mt-3 mb-4 mr-1 text-4xl font-bold sm:text-4xl">
                  15 PHP
                </div>
              </div>
              <Link
                to={routes.products()}
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-600 focus:shadow-outline focus:outline-none"
              >
                Buy Pro Blocks
              </Link>
            </div>
          </div>
        </div>
      </div>
    </GeneralLayout>
  )
}

export default HomePage
