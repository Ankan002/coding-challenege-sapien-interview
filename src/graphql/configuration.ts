import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client";

let client: ApolloClient<NormalizedCacheObject>;

export const getApolloClient = () => {
    if(client) return client;

    client = new ApolloClient({
        uri: `${process.env.REACT_APP_URL}/graphql`,
        cache: new InMemoryCache()
    });

    return client;
}
