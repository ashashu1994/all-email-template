import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Editor from './_components/editor/editor/editor';
import Template from './_components/editor/template/template';
function App() {
  return (
    <>
      <Router>
        <>
          <Route exact path="/" component={Editor} />
          <Route path="/template" component={Template} />
        </>
      </Router>
    </>
  );
}

export default App;
