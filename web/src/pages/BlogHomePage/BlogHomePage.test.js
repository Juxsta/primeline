import { render } from '@redwoodjs/testing'

import BlogHomePage from './BlogHomePage'

describe('BlogHomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlogHomePage />)
    }).not.toThrow()
  })
})
