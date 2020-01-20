import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Template from './_components/template/template';
import Editor from './_components/editor/editor';
function App() {
  return (
    <>
      <Router>
        <>
          <Route exact path="/" component={Template} />
          <Route exact path="/editor" component={Editor} />
        </>
      </Router>
    </>
  );
}

export default App;
