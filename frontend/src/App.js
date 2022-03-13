import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import Competency from "./pages/Competency";
import Insights from "./pages/Insights";
//page and layout imports
import Skills from "./pages/Skills";

//appolo client
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <SiteHeader />
          <Routes>
            <Route exact path="/" element={<Skills />} />
            <Route path="/insight/:id" element={<Insights />} />
            <Route path="/competency" element={<Competency />} />
          </Routes>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
