import Client from 'shopify-buy'
import store from 'src/store'
const client = Client.buildClient({
  storefrontAccessToken: '2c1be0f9a2645daaa23c3dd82bf9300f',
  domain: 'primeline-concrete-plus.myshopify.com',
})

export default client
export function updateQuantityInCart(lineItemId, quantity) {
  const state = store.getState() // state from redux store
  const checkoutId = state.checkout.id
  const lineItemsToUpdate = [
    { id: lineItemId, quantity: parseInt(quantity, 10) },
  ]
  state.client.checkout
    .updateLineItems(checkoutId, lineItemsToUpdate)
    .then((res) => {
      store.dispatch({
        type: 'UPDATE_QUANTITY_IN_CART',
        payload: { checkout: res },
      })
    })
}
export function removeLineItemInCart(lineItemId) {
  const state = store.getState() // state from redux store
  const checkoutId = state.checkout.id
  state.client.checkout
    .removeLineItems(checkoutId, [lineItemId])
    .then((res) => {
      store.dispatch({
        type: 'REMOVE_LINE_ITEM_IN_CART',
        payload: { checkout: res },
      })
    })
}
export function handleCartClose() {
  store.dispatch({ type: 'CLOSE_CART' })
}
export function handleCartOpen() {
  store.dispatch({ type: 'OPEN_CART' })
}
