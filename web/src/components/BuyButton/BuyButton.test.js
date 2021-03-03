import { render } from '@redwoodjs/testing'

import BuyButton from './BuyButton'

describe('BuyButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BuyButton />)
    }).not.toThrow()
  })
})
