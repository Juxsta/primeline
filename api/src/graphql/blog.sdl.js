export const schema = gql`
  type Tags {
    name: String
    slug: String
  }

  type Categories {
    name: String
    slug: String
  }

  type Author {
    first_name: String
    last_name: String
    email: String
    slug: String
    bio: String
    title: String
    linkedin_url: String
    facebook_url: String
    pinterest_url: String
    instagram_url: String
    twitter_handle: String
    profile_image: String
  }

  type Post {
    url: String
    created: String
    updated: String
    published: String
    featured_image: String
    featured_image_alt: String
    slug: String
    title: String
    body: String
    summary: String
    seo_title: String
    meta_description: String
    status: String
    tags: [Tags]
    categories: [Categories]
    author: Author
  }

  type Meta {
    count: Int
    next_page: String
    previous_page: String
  }

  type ListResponse {
    data: [Post]
    meta: Meta
  }

  type RetrieveResponse {
    data: Post
    meta: Meta
  }
  type Query {
    listPosts(
      page: Int!
      page_size: Int!
      exclude_body: Boolean
      author_slug: String
      category_slug: String
      tag_slug: String
    ): ListResponse
  }
  type Query {
    retrievePost(slug: String!): RetrieveResponse
  }
`
