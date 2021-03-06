import Skeleton from '@material-ui/lab/Skeleton'
import moment from 'moment'
import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query BlogCardQuery(
    $page: Int!
    $page_size: Int!
    $exclude_body: Boolean
    $author_slug: String
    $category_slug: String
    $tag_slug: String
  ) {
    posts: listPosts(
      page: $page
      page_size: $page_size
      exclude_body: $exclude_body
      author_slug: $author_slug
      category_slug: $category_slug
      tag_slug: $tag_slug
    ) {
      data {
        slug
        title
        body
        summary
        featured_image
        updated
      }
    }
  }
`

export const Loading = () => (
  <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 py-24 mx-auto">
      <div className="-my-8 divide-y-2 divide-gray-100">
        <div className="py-8 flex flex-wrap md:flex-nowrap md:shadow md:px-8 mx-auto">
          <div className="md:flex-grow">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  </section>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  console.log(posts)
  const BlogCard = posts.data.map((post) => (
    <div
      className=" flex flex-wrap lg:flex-nowrap shadow justify-center my-2 bg-white"
      key={post.slug}
    >
      <Link
        to={routes.blogPost({ slug: post.slug })}
        className=" md:w-full  md:mr-2 flex justify-center lg:max-w-sm"
      >
        <img src={post.featured_image} className="object-cover"></img>
      </Link>
      <div className="md:flex-grow py-4 px-4">
        <Link to={routes.blogPost({ slug: post.slug })}>
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
            {post.title}
          </h2>
        </Link>
        <p className="leading-relaxed">{post.summary}</p>
        <div className="flex flex-row gap-x-4">
          <Link
            to={routes.blogPost({ slug: post.slug })}
            className="text-red-600 inline-flex items-center mt-4"
          >
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
          <span className="mt-1 text-gray-500 text-sm self-end">
            {moment(post.created).format('MMMM Do YYYY')}
          </span>
        </div>
      </div>
    </div>
  ))
  return (
    <section className="text-gray-600 body-font overflow-hidden bg-gray-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {BlogCard}
          {/*  */}
        </div>
      </div>
    </section>
  )
}
