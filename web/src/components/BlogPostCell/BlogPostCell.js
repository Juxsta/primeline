import moment from 'moment'
import { Helmet } from 'react-helmet'

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
    <article className="my-5">
      <Helmet>
        <title>{post.seo_title}</title>
        <meta name="description" content={post.meta_description} />
        <meta name="og:image" content={post.featured_image} />
      </Helmet>
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
      <hr className="border-0 bg-gray-500 text-gray-500 h-px" />

      <div
        className="unreset"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
      <hr className="border-0 bg-gray-500 text-gray-500 h-px my-6" />

      <div id="disqus_thread"></div>

      <script>
        {/* /**
         *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
         *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
        /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */}
        {(function () {
          // DON'T EDIT BELOW THIS LINE
          var d = document,
            s = d.createElement('script')
          s.src = 'https://primelineconcreteplus.disqus.com/embed.js'
          s.setAttribute('data-timestamp', +new Date())
          ;(d.head || d.body).appendChild(s)
        })()}
      </script>
      <noscript>
        Please enable JavaScript to view the{' '}
        <a href="https://disqus.com/?ref_noscript">
          comments powered by Disqus.
        </a>
      </noscript>
    </article>
  )
}
