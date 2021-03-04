import { AuthProvider } from '@redwoodjs/auth'
import netlifyIdentity from 'netlify-identity-widget'
import { isBrowser } from '@redwoodjs/prerender/browserUtils'
import { FatalErrorBoundary } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'
import Client from 'shopify-buy'

isBrowser && netlifyIdentity.init()

class App extends React.Component {
  client = Client.buildClient({
    storefrontAccessToken: 'dd4d4dc146542ba7763305d71d1b3d38',
    domain: 'graphql.myshopify.com',
  })
  constructor() {
    super()

    this.state = {
      isCartOpen: false,
      checkout: { lineItems: [] },
      products: [],
      shop: {},
    }

    this.handleCartClose = this.handleCartClose.bind(this)
    this.addVariantToCart = this.addVariantToCart.bind(this)
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this)
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this)
  }

  UNSAFE_componentWillMount() {
    this.client.checkout.create().then((res) => {
      this.setState({
        checkout: res,
      })
    })

    this.client.product.fetchAll().then((res) => {
      this.setState({
        products: res,
      })
    })

    this.client.shop.fetchInfo().then((res) => {
      this.setState({
        shop: res,
      })
    })
  }

  addVariantToCart(variantId, quantity) {
    this.setState({
      isCartOpen: true,
    })

    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }]
    const checkoutId = this.state.checkout.id

    return this.client.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then((res) => {
        this.setState({
          checkout: res,
        })
      })
  }

  updateQuantityInCart(lineItemId, quantity) {
    const checkoutId = this.state.checkout.id
    const lineItemsToUpdate = [
      { id: lineItemId, quantity: parseInt(quantity, 10) },
    ]

    return this.client.checkout
      .updateLineItems(checkoutId, lineItemsToUpdate)
      .then((res) => {
        this.setState({
          checkout: res,
        })
      })
  }

  removeLineItemInCart(lineItemId) {
    const checkoutId = this.state.checkout.id

    return this.client.checkout
      .removeLineItems(checkoutId, [lineItemId])
      .then((res) => {
        this.setState({
          checkout: res,
        })
      })
  }

  handleCartClose() {
    this.setState({
      isCartOpen: false,
    })
  }

  render() {
    return (
      <FatalErrorBoundary page={FatalErrorPage}>
        <AuthProvider client={netlifyIdentity} type="netlify">
          <RedwoodApolloProvider>
            <Routes />
          </RedwoodApolloProvider>
        </AuthProvider>
      </FatalErrorBoundary>
    )
  }
}

export default App
