import ShopLayout from 'src/layouts/ShopLayout'
import Products from 'src/components/shopify/Products'
import store from 'src/store'
import { addVariantToCart } from 'src/shopifyActions'
import { connect } from 'react-redux'
const ProductsPage = () => {
  const state = store.getState() // state from redux store

  return (
    <>
      <ShopLayout>
        <div className="container px-5 pt-24 pb-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">
              Build With Confidence
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Primeline Professional Hollowblocks
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-5">
              You don't want to take any risks when it comes to building or
              foundation work. That's why you have these safe, secure, sturdy
              load-bearing hollow blocks on your side. Comprised of the densest
              and best quality ingredients in our highly certified lab, we've
              taken countless safety measurements for your peace of mind so that
              every project can go smoothly from start to finish with no worries
              attached at all. So invest in a trusty construction partner
              without hesitation - you won't regret it one little bit!
            </p>
          </div>
          <Products
            products={state.products}
            client={state.client}
            addVariantToCart={addVariantToCart}
          />
        </div>
      </ShopLayout>
    </>
  )
}

export default connect((state) => state)(ProductsPage)
