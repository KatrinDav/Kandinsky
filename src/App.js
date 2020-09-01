import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/App.scss';

import Home from './pages/Home';
import About from './pages/About';
import Bio from './pages/Bio';
import Arts from './pages/Arts';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/bio" exact component={Bio} />
        <Route path="/arts" exact component={Arts} />

      </BrowserRouter>

    </div>
  );
}


export default App;
