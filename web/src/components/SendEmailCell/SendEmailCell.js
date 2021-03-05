export const QUERY = gql`
  query($name: String!, $from: String!, $message: String!) {
    success: sendEmail(name: $name, from: $from, message: $message) {
      success
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Send</div>

export const Failure = ({ error }) => (
  <div className="text-red-500">Error: {error.message}</div>
)

export const Success = () => {
  return <div>Sent!</div>
}
