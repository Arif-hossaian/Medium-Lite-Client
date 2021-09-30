import { Container } from '@mui/material';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Alert from './components/Alert/Alert';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PageRender from './PageRender';

const App = () => {
  return (
    <>
      <Router>
        <Alert />
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={PageRender} />
            <Route exact path="/:page" component={PageRender} />
            <Route exact path="/:page/:slug" component={PageRender} />
          </Switch>
          <Footer />
        </Container>
      </Router>
    </>
  );
};

export default App;
