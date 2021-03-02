const Nav = () => {
  return (
    <div class="w-full px-4 py-5 mx-auto md:px-24 lg:px-8 bg-yellow-500">
    <div class="relative flex items-center justify-between max-w-6xl mx-auto">
      <div class="flex items-center">
        <a
          href="/"
          aria-label="Company"
          title="Company"
          class="inline-flex items-center mr-8"
        ><svg
          viewBox="0 0 24 24"
          stroke-linejoin="round"
          stroke-width="2"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke="currentColor"
          fill="none"
          class="w-8 text-gray-800"
        >
            <rect x="3" y="1" width="7" height="12"></rect>
            <rect x="3" y="17" width="7" height="6"></rect>
            <rect x="14" y="1" width="7" height="6"></rect>
            <rect x="14" y="11" width="7" height="12"></rect>
          </svg>
          <span
            class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase"
          >Company</span
          ></a
        >
        <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              class="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-gray-800"
            >About</a
            >
          </li>
          <li>
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              class="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-gray-800"
            >Products</a
            >
          </li>
          <li>
            <a
              href="/"
              aria-label="Product pricing"
              title="Product pricing"
              class="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-gray-800"
            >Contact</a
            >
          </li>
        </ul>
      </div>
      <ul class="flex items-center hidden space-x-8 lg:flex">
        <li>
          <a
            href="/"
            aria-label="Sign in"
            title="Sign in"
            class="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-gray-800"
          ></a>
        </li>
        <li>
          <a
            href="/"
            aria-label="Sign up"
            title="Sign up"
            class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-600 focus:shadow-outline focus:outline-none"
          >
          </a>
        </li>
      </ul>
      <div class="lg:hidden">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
        >
          <svg viewBox="0 0 24 24" class="w-5 text-gray-600">
            <path
              fill="currentColor"
              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            ></path>
            <path
              fill="currentColor"
              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            ></path>
            <path
              fill="currentColor"
              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
  )
}

export default Nav
