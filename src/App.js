import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Page from './components/Page';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <main>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/:userName'>
              <Page />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
};

export default App;
