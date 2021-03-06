import moment from 'moment'
import { DiscussionEmbed } from 'disqus-react'

export const QUERY = gql`
  query BlogPostQuery($slug: String!) {
    blogPost: retrievePost(slug: $slug) {
      data {
        title
        body
        created
        updated
        slug
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ blogPost }) => {
  const post = blogPost.data
  return (
    <article className="divide-y divide-gray-200 my-5">
      <header>
        <div className="space-y-1 text-center my-6">
          <dl className="space-y-10">
            <div>
              <dt className="sr-only">Published on</dt>
              <dd className="text-base leading-6 font-medium text-gray-500">
                <time dateTime="2021-02-16T16:05:00.000Z">
                  {moment(post.created).format('MMMM Do YYYY')}
                </time>
              </dd>
            </div>
          </dl>
          <div>
            <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              {post.title}
            </h1>
          </div>
        </div>
      </header>
      <div
        className=" xl:pb-0 xl:col-span-3 xl:row-span-2"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
      <DiscussionEmbed
        shortname="example"
        config={{
          url: window.location.href,
          identifier: post.slug,
          title: post.title,
          language: 'en-us', //e.g. for Traditional Chinese (Taiwan)
        }}
      />
    </article>
  )
}
