import { render } from '@redwoodjs/testing'

import BlogCard from './BlogCard'

describe('BlogCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlogCard />)
    }).not.toThrow()
  })
})
