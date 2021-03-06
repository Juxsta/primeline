// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage
/// <reference path="react.d.ts" />

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/blog-home" page={BlogHomePage} name="blogHome" prerender />
      <Route path="/blog-post/{slug}" page={BlogPostPage} name="blogPost" />
      <Route path="/products" page={ProductsPage} name="products" prerender />
      <Route path="/" page={HomePage} name="home" prerender />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
