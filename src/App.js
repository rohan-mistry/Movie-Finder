import React, { Component } from 'react';

import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Movies from './components/Movies';
import searchMovie from './components/searchMovie';


console.log(process.env.REACT_APP_API_KEY);


class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={

    }
  }
  
  render()
  {
      return (
        <Router>
          <div className="App">

            
            <Switch>
              {/* <Route exact path="/" component={Trending} /> */}
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/movie/:id" component={Movies} />
              <Route exact path="/search/:term" component={searchMovie} />
              
            </Switch>
              

          </div>
        </Router>
      
    );
  }
  
}

export default App;
