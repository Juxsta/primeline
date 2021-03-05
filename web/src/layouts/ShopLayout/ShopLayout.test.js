import { render } from '@redwoodjs/testing'

import ShopLayout from './ShopLayout'

describe('ShopLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ShopLayout />)
    }).not.toThrow()
  })
})
