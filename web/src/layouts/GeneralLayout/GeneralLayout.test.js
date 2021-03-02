import { render } from '@redwoodjs/testing'

import GeneralLayout from './GeneralLayout'

describe('GeneralLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GeneralLayout />)
    }).not.toThrow()
  })
})
