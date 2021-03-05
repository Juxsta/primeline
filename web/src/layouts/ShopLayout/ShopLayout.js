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
import { Icon, IconButton } from '@material-ui/core'
class ShopLayout extends React.Component {
  client = client
  constructor() {
    super()

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
            <IconButton onClick={this.handleCartOpen}>
              <Icon className="fas fa-shopping-cart"></Icon>
              Cart
            </IconButton>
          }
        />
        <main>{this.props.children}</main>

        <Footer />
        <Cart
          checkout={this.props.checkout}
          isCartOpen={this.props.isCartOpen}
          handleCartClose={this.handleCartClose}
          updateQuantityInCart={this.updateQuantityInCart}
          removeLineItemInCart={this.removeLineItemInCart}
        />
      </>
    )
  }
}
export default connect((state) => state)(ShopLayout)
