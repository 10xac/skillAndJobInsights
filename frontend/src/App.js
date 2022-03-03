import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'

//page and layout imports
import Skills from './pages/Skills';
import Insights from './pages/Insights';
import SiteHeader from './components/SiteHeader'

//appolo client
const client =new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
    <div className="App">
      <SiteHeader/>
      <Routes>
      <Route exact path='/' element={<Skills/>}/>
      <Route path='/insight/:id' element={<Insights />} />
      </Routes>
    </div>
    </ApolloProvider>
    </Router>
  );
}

export default App;
