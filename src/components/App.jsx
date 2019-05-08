import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Results from './Results/Results';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import '../scss/styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsArray: []
    };
  }
  
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Results' component={Results} />
          <Route component={Error404}/>
        </Switch>
        <Navbar/>
      </div>
    );
  }
}

export default App;
