import React from 'react';
import Header from './Header';
import Schedule from './Schedule';
import Seasonal from './Seasonal';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Schedule} />
        <Route path='/seasonal' component={Seasonal} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
