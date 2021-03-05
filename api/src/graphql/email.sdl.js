export const schema = gql`
  type Response {
    success: Boolean!
  }

  type Query {
    sendEmail(name: String!, from: String!, message: String!): Response!
  }
`
