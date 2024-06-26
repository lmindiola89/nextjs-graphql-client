"use client";

import { ApolloProvider } from "@apollo/client";
import createApolloClient from "@/libs/apollo.client";

const client = createApolloClient();

export function ApolloWrapper({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
