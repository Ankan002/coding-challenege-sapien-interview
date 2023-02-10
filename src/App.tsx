import { ApolloProvider } from "@apollo/client";
import { getApolloClient } from "./graphql/configuration";
import { Toaster } from "react-hot-toast";
import Routes from "./Routes";

const client = getApolloClient()

function App() {
  return (
    <ApolloProvider client={client}>
        <Routes/>
        <Toaster />
    </ApolloProvider>
  );
}

export default App;