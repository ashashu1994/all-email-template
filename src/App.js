import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Template from './_components/editor/template/template';
import Component from './_components/editor/component/component';
import CreateTemp from './_components/editor/component/createTemp';
function App() {
  return (
    <>
      <Router>
        <>
          <Route exact path="/" component={Component} />
          <Route exact path="/createTemp" component={CreateTemp} />
          <Route path="/template" component={Template} />
        </>
      </Router>
    </>
  );
}

export default App;
