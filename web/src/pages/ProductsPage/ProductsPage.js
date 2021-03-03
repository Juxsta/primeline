import { Link, routes } from '@redwoodjs/router'

const ProductsPage = () => {
  return (
    <>
      <h1>ProductsPage</h1>
      <p>
        Find me in <code>./web/src/pages/ProductsPage/ProductsPage.js</code>
      </p>
      <p>
        My default route is named <code>products</code>, link to me with `
        <Link to={routes.products()}>Products</Link>`
      </p>
    </>
  )
}

export default ProductsPage
