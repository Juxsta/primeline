import { Link, routes } from '@redwoodjs/router'

const BlogHomePage = () => {
  return (
    <>
      <h1>BlogHomePage</h1>
      <p>
        Find me in <code>./web/src/pages/BlogHomePage/BlogHomePage.js</code>
      </p>
      <p>
        My default route is named <code>blogHome</code>, link to me with `
        <Link to={routes.blogHome()}>BlogHome</Link>`
      </p>
    </>
  )
}

export default BlogHomePage
