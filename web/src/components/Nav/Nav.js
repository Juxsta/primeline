import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import { useLocation, Link, routes } from '@redwoodjs/router'
import { Button } from '@material-ui/core'

function HideOnScroll(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

export default function Nav(props) {
  const Body = props.body
  const { pathname } = useLocation()

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar className=" flex items-center justify-between bg-yellow-500 ">
            <div className="flex flex-row">
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
              <ul className="flex items-center hidden space-x-8 lg:flex">
                <li>
                  <Link
                    to={routes.blogHome()}
                    aria-label="Blog"
                    title="Blog"
                    className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-gray-800"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <ul
              className={`flex items-center hidden space-x-8 lg:flex ${
                pathname === 'shop' ? 'invisible' : 'visible'
              }`}
            >
              <li>
                <Link
                  to={routes.products()}
                  aria-label="Shop Now"
                  title="Shop Now"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-600 focus:shadow-outline focus:outline-none"
                >
                  Shop Now
                </Link>
              </li>
            </ul>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      {Body}
    </React.Fragment>
  )
}
