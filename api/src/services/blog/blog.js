/* eslint-disable camelcase */
import Butter from 'buttercms'

const butter = Butter(process.env.BUTTER_API_KEY)

export const listPosts = async ({
  page,
  page_size,
  exclude_body,
  author_slug,
  category_slug,
  tag_slug,
}) => {
  const response = await butter.post.list({
    page,
    page_size,
    exclude_body,
    author_slug,
    category_slug,
    tag_slug,
  })
  return response.data
}

export const retrievePost = async ({ slug }) => {
  const response = await butter.post.retrieve(slug)
  return response.data
}
