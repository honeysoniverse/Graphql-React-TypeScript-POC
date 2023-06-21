import { ApolloClient, ApolloLink, DefaultOptions, HttpLink, InMemoryCache, TypedDocumentNode, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import gql from 'graphql-tag'

//Extending the User type
const typeDefs = gql`
  extend type User {
    height: Int
  }
`
const resolvers = {
  User: {
    height() {
      return 35
    }
  }
}

const authLink = setContext((_, {headers, token}) => {
return {
  headers: {
    ...headers,
    Authorization: "eyJraWQiOiIzZ1U3bzFFVkg2bTJKY3AxXC9TVWpMYTlIQUJFelluQUx6QXNPS0lLNDE4Zz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI0YzliODNhNy1hZmEzLTQ3NTEtYjYzNi0yNjE3MWNhOGU5ZDEiLCJjb2duaXRvOmdyb3VwcyI6WyJhZG1pbl82OTI2MjdlZi1mZGE4LTQyMDMtYjEwOC1lOGU5ZjUyYWQ0MTAiLCJ0ZW5hbnRfNjkyNjI3ZWYtZmRhOC00MjAzLWIxMDgtZThlOWY1MmFkNDEwIiwidGVuYW50Xzk0MGU4ZWRmLWVkZDktNDAxZC1hMjFhLTEwZjg2NmZiZGIzZiJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9VYXFsdUxPaHEiLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiIxcDNoNG1rc2ZhdWU0cThqbjQ3dWZlYm9yIiwib3JpZ2luX2p0aSI6IjIyNDZmOTNlLTNlOGEtNGZhYS1iNWZjLThkM2FkOWY2N2QwMSIsImV2ZW50X2lkIjoiMjMwZTdiYWUtODZlMS00NmM3LThkOGUtNDY3Y2FhNDY4MTc3IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJwaG9uZSBncmF2aXR5XC9ncmFwaHFsIG9wZW5pZCBlbWFpbCIsImF1dGhfdGltZSI6MTY4NzA4MDgzNSwiZXhwIjoxNjg3NDMyODA1LCJpYXQiOjE2ODczNDY0MDUsImp0aSI6IjRmOGE0ZGRiLTE0MDQtNDYwNy05ZjRhLWZkYjgyMTBmNTI3NCIsInVzZXJuYW1lIjoiY29kZXRlc3QtdXNlciJ9.AApfqLh9rbhUUPzjl6xddEFjR3xWppY55fCuqgWVKre4pZZDR4UMRPJYUCFtiL-GJt9ONJ7ytn3qtF4XBzDA9kWv6_lgdpsX3skIRmGGMNWv1eWETaiGTNGGqIKyfcYo1ymWGqwma2ZtP--e_34gpXnIarMBhfA2ZUS06vradTrdaonSapnwWOVH6pSZ2InUWoTCQndL1PjQOLeee0PoIkOdy1_WqSaeHgsuA41dgfhhSJxFGmvfne5FG70c9HfrOztmfq3mjIraNbjuJ7i8yokpxTClkwI_Zz9dUzc2zFXVRJg-oZGHjmMD2m_nkxm4EbgJT_6eAoO0B33coivtlg",
  }
}
})

// const httpLink = createHttpLink({
//   fetch,
//   uri: ""
// })

const cache = new InMemoryCache()
const http = new HttpLink({
  uri: 'https://graph.dev.jit.care/graphql',
})
const link = ApolloLink.from([
  http
])

const client = new ApolloClient({
  link: ApolloLink.from([authLink, link]),
  cache,
  typeDefs,
  resolvers
})
export default client