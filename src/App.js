import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Navbar from './components/shared/Navbar';
import Profile from './components/account/Profile';

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        {/* <Route exact path='/' component={Home} />
        <Route exact path='/' render={() => <Home /> } /> */}
        <Route exact path='/' render={() => <h1>Home</h1>} />
        <Route exact path='/profile' component={Profile} />
        <Route render={() => <h1>404 page</h1>} />
      </Switch>
    </Container>
  </>
)

export default App;
