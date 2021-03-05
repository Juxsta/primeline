import client from 'src/shopify'
import Nav from 'src/components/Nav'
import Footer from 'src/components/Footer'
import Cart from 'src/components/shopify/Cart'
import { connect } from 'react-redux'
import store from 'src/store'

import {
  handleCartClose,
  addVariantToCart,
  updateQuantityInCart,
  removeLineItemInCart,
  handleCartOpen,
} from 'src/shopifyActions'
class ShopLayout extends React.Component {
  client = client
  constructor() {
    super()

    this.state = store.getState() // state from redux store

    this.handleCartClose = handleCartClose.bind(this)
    this.addVariantToCart = addVariantToCart.bind(this)
    this.updateQuantityInCart = updateQuantityInCart.bind(this)
    this.removeLineItemInCart = removeLineItemInCart.bind(this)
    this.handleCartOpen = handleCartOpen.bind(this)
  }

  render() {
    return (
      <>
        <Nav
          actionitem={
            !this.state.isCartOpen && (
              <div className="App__view-cart-wrapper">
                <button
                  className="App__view-cart"
                  onClick={this.handleCartOpen}
                >
                  Cart
                </button>
              </div>
            )
          }
        />
        <main>{this.props.children}</main>

        <Footer />
        <Cart
          checkout={this.state.checkout}
          isCartOpen={this.state.isCartOpen}
          handleCartClose={this.handleCartClose}
          updateQuantityInCart={this.updateQuantityInCart}
          removeLineItemInCart={this.removeLineItemInCart}
        />
      </>
    )
  }
}
export default connect((state) => state)(ShopLayout)
