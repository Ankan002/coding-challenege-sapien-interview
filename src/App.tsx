import { ApolloProvider } from "@apollo/client";
import { getApolloClient } from "./graphql/configuration";
import Routes from "./Routes";

const client = getApolloClient()

function App() {
  return (
    <ApolloProvider client={client}>
        <Routes/>
    </ApolloProvider>
  );
}

export default App;