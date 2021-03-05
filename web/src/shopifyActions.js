import store from 'src/store'
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

export function addVariantToCart(variantId, quantity) {
  console.log(variantId)

  const state = store.getState() // state from redux store
  console.log(state)
  const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }]
  const checkoutId = state.checkout.id
  state.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then((res) => {
    store.dispatch({
      type: 'ADD_VARIANT_TO_CART',
      payload: { isCartOpen: true, checkout: res },
    })
    console.log(state)
  })
}
