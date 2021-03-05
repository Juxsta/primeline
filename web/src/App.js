import { AuthProvider } from '@redwoodjs/auth'
import netlifyIdentity from 'netlify-identity-widget'
import { isBrowser } from '@redwoodjs/prerender/browserUtils'
import { FatalErrorBoundary } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'
import client from 'src/shopify'
import { connect } from 'react-redux'

store.dispatch({ type: 'CLIENT_CREATED', payload: client })
client.product.fetchAll().then((res) => {
  store.dispatch({ type: 'PRODUCTS_FOUND', payload: res })
})
client.checkout.create().then((res) => {
  store.dispatch({ type: 'CHECKOUT_FOUND', payload: res })
})
client.shop.fetchInfo().then((res) => {
  store.dispatch({ type: 'SHOP_FOUND', payload: res })
})
isBrowser && netlifyIdentity.init()

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <FatalErrorBoundary page={FatalErrorPage}>
          <AuthProvider client={netlifyIdentity} type="netlify">
            <RedwoodApolloProvider>
              <Routes className="App" />
            </RedwoodApolloProvider>
          </AuthProvider>
        </FatalErrorBoundary>
      </Provider>
    )
  }
}

export default App
