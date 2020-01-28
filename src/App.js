import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Editor from './_components/editor/editor';
function App() {
  return (
    <>
      <Router>
        <>
          <Route path="/" component={Editor} />
        </>
      </Router>
    </>
  );
}

export default App;
