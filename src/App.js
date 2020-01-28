import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Template from './_components/template/template';
import Home from './_components/home/home';
import FasenraAll from './_components/home/fasenraAll';
import ForxigaAll from './_components/home/forxigaAll';
import LynparzaAll from './_components/home/lynparzaAll';
import SymbicortAll from './_components/home/symbicortAll';
function App() {
  return (
    <>
      <Router>
        <>
          <Route exact path="/" component={Home} />
          <Route exact path="/home/fasenra" component={FasenraAll} />
          <Route exact path="/home/forxiga" component={ForxigaAll} />
          <Route exact path="/home/lynparza" component={LynparzaAll} />
          <Route exact path="/home/symbicort" component={SymbicortAll} />
          <Route exact path="/template/:brand/:template" component={Template} />
        </>
      </Router>
    </>
  );
}

export default App;
