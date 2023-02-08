import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";

let client: ApolloClient<NormalizedCacheObject>;

export const getApolloClient = () => {
    if(client) return client;

    client = new ApolloClient({
        uri: `${process.env.REACT_APP_URL}/graphql`,
        cache: new InMemoryCache({
            typePolicies: {
                Query: {
                    fields: {
                        leads: offsetLimitPagination(),
                    }
                }
            }
        })
    });

    return client;
}
