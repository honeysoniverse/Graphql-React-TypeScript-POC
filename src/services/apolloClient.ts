import { ApolloClient, ApolloLink, DefaultOptions, InMemoryCache, TypedDocumentNode, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import fetch from "cross-fetch";

const httpLink = createHttpLink({
    fetch,
    uri: "https://graph.dev.jit.care/graphql"
})