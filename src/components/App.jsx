import React from 'react';
import Header from './Header';
import Schedule from './Schedule';
import Seasonal from './Seasonal';

function App(){
  return (
    <div>
      <Header/>

      <div>
        <Schedule/>
        <Seasonal/>
      </div>

    </div>
  );
}

export default App;
