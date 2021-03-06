import { Link, routes } from '@redwoodjs/router'
import BlogPostCell from 'src/components/BlogPostCell'
import GeneralLayout from 'src/layouts/GeneralLayout'

const BlogPostPage = ({ slug }) => {
  return (
    <GeneralLayout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <BlogPostCell slug={slug} />
      </div>
    </GeneralLayout>
  )
}

export default BlogPostPage
