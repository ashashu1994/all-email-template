import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Fasenra from './_components/fasenra/fasenra';
// import Forxiga from './_components/forxiga/forxiga';
function App() {
  return (
    <>
      <Router>
        <>
          <Route path="/fasenra" component={Fasenra} />
          {/* <Route path="/forxiga" component={Forxiga} /> */}
        </>
      </Router>
    </>
  );
}

export default App;
