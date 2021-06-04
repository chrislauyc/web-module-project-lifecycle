import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Page from './components/Page';
class App extends React.Component{
  render(){
    return(
      <div>
        <header>
          <h1>Welcome To GitHub Cards</h1>
        </header>
        <main>
          <Switch>
            <Route exact path='/'>
              <div>Home</div>
            </Route>
            <Route path='/:userName'>
              <Page />
            </Route>
          </Switch>
        </main>
      </div>
    );
  }
};

export default App;
