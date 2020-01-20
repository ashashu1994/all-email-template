import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
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
