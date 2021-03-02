import { Link, routes } from '@redwoodjs/router'
import Button from '@material-ui/core/Button';
import GeneralLayout from 'src/layouts/GeneralLayout'
const HomePage = (props) => {
  const { ...rest } = props;

  return (
    <GeneralLayout>


      <div
        class="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 w-full bg-yellow-500"
      >
        <div
          class="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0"
        >
          <svg
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
            class="absolute left-0 hidden h-full text-yellow-500 transform -translate-x-1/2 lg:block"
          >
            <path d="M50 0H100L50 100H0L50 0Z"></path>
          </svg>
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
            class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          />
        </div>
        <div
          class="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl"
        >
          <div class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <h2
              class="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-none"
            >
              The foundation of your construction.
          </h2>
            <p class="pr-5 mb-5 text-base text-gray-800 md:text-lg">
              The best quality materials to get the job done right and with
              confidence.
          </p>
            <div class="flex items-center">
              <a
                href="/"
                class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-600 focus:shadow-outline focus:outline-none"
              >
                Get a quote today!
            </a>
              <a
                href="/"
                aria-label=""
                class="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-gray-800"
              >Learn more</a
              >
            </div>
          </div>
        </div>
      </div>





      <div
        class="px-4 py-16 bg-gray-300 mx-auto w-full md:px-24 lg:px-8 lg:py-20"
      >
        <div class="flex flex-col max-w-4xl mx-auto mb-6 lg:flex-row md:mb-10">
          <div class="lg:w-1/2">
            <h2
              class="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-none xl:max-w-lg"
            >
              Safe and secure building blocks.
          </h2>
          </div>
          <div class="lg:w-1/2">
            <p class="text-base text-gray-800 md:text-lg">
              Hollow Blocks offer a lightweight alternative to traditional bricks
              and mortar for any project, big or small.
          </p>
          </div>
        </div>
        <div
          class="grid max-w-4xl gap-8 row-gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-2"
        >
          <div class="max-w-md">
            <div
              class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-red-100"
            >
              <svg
                stroke="currentColor"
                viewBox="0 0 52 52"
                class="w-12 h-12 text-red-600"
              >
                <polygon
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </div>
            <h6 class="mb-2 font-semibold leading-5 text-gray-800">
              Lightweight and strong materials.
          </h6>
            <p class="mb-3 text-sm text-gray-800">
              Hollow Blocks are made from 100% high quality polypropylene that is
              durable, safe, eco-friendly, and light weight enough to be lifted by
              one person.
          </p>
            <a
              href="/"
              aria-label=""
              class="inline-flex items-center font-semibold transition-colors duration-200 text-red-600 hover:text-red-600"
            >Learn more</a
            >
          </div>
          <div class="max-w-md">
            <div
              class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-red-100"
            >
              <svg
                stroke="currentColor"
                viewBox="0 0 52 52"
                class="w-12 h-12 text-red-600"
              >
                <polygon
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </div>
            <h6 class="mb-2 font-semibold leading-5 text-gray-800">
              Eco-Friendly construction material.
          </h6>
            <p class="mb-3 text-sm text-gray-800">
              It's also environmentally friendly - hollow blocks contain no heavy
              metals or other toxic chemicals like cement, which means it won't
              pollute the ground when they're broken down in the future!
          </p>
            <a
              href="/"
              aria-label=""
              class="inline-flex items-center font-semibold transition-colors duration-200 text-red-600 hover:text-red-600"
            >Learn more</a
            >
          </div>
        </div>
      </div>





      <div
        class="px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20 w-full bg-gray-300"
      >
        <div
          class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
        >
          <div>
            <p
              class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-red-600"
            >
              Brand new
          </p>
          </div>
          <h2
            class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-800 sm:text-4xl md:mx-auto"
          >
            Hollow Blocks for All Your Building Needs
        </h2>
          <p class="text-base text-gray-800 md:text-lg">
            Our hollow blocks are fully capable of safe, secure, and quality
            material. We make load-bearing hollow blocks from scratch with the
            best quality materials.
        </p>
        </div>
        <div
          class="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto"
        >
          <div
            class="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow"
          >
            <div class="relative w-full h-48">
              <img
                src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Plan"
                class="object-cover w-full h-full rounded-t"
              />
            </div>
            <div
              class="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b"
            >
              <div>
                <div class="text-lg font-semibold">Basic</div>
                <p class="text-sm text-gray-700">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  doloremque.
              </p>
                <div class="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
                  $12
              </div>
              </div>
              <a
                href="/"
                class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-600 focus:shadow-outline focus:outline-none"
              >
                Buy Basic
            </a>
            </div>
          </div>
          <div
            class="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow"
          >
            <div class="relative w-full h-48">
              <img
                src="https://images.pexels.com/photos/3183181/pexels-photo-3183181.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Plan"
                class="object-cover w-full h-full rounded-t"
              />
            </div>
            <div
              class="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b"
            >
              <div>
                <div class="text-lg font-semibold">Advanced</div>
                <p class="text-sm text-gray-700">
                  A flower in my garden, a mystery in my panties. Heart attack
                  never was so close.
              </p>
                <div class="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
                  $38
              </div>
              </div>
              <a
                href="/"
                class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-600 focus:shadow-outline focus:outline-none"
              >
                Buy Advanced
            </a>
            </div>
          </div>
          <div
            class="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow"
          >
            <div class="relative w-full h-48">
              <img
                src="https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Plan"
                class="object-cover w-full h-full rounded-t"
              />
            </div>
            <div
              class="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b"
            >
              <div>
                <div class="text-lg font-semibold">Pro</div>
                <p class="text-sm text-gray-700">
                  We never had the chance to. Maybe it was the eleven months he
                  spent in the womb.
              </p>
                <div class="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
                  $78
              </div>
              </div>
              <a
                href="/"
                class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-600 focus:shadow-outline focus:outline-none"
              >
                Buy Pro
            </a>
            </div>
          </div>
        </div>
      </div>

    </GeneralLayout>
  )
}

export default HomePage
