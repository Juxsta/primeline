import BuyButton from 'src/components/BuyButton'
import GeneralLayout from 'src/layouts/GeneralLayout'
import Contact from 'src/components/Contact'

import { Link, routes } from '@redwoodjs/router'

const ProductsPage = () => {
  return (
    <>
      <GeneralLayout>
        <div className="container px-5 pt-24 pb-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-red-500 tracking-widest font-medium title-font mb-1">
              BUILD WITH CONFIDENCE
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
        </div>
        <BuyButton></BuyButton>
        <Contact></Contact>
      </GeneralLayout>
    </>
  )
}

export default ProductsPage
