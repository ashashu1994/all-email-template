import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Fasenra from './_components/fasenra/fasenra';
import Forxiga from './_components/forxiga/forxiga';
import Template from './_components/template/template';
function App() {
  return (
    <>
      <Router>
        <>
          <Route exact path="/" component={Template} />
        </>
      </Router>
    </>
  );
}

export default App;
