import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavPanel from './components/NavPanel';
import Resume from './components/Resume';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Portfolio from './components/Portfolio';



function App() {
  return (

    <Router>
      <div>
        <NavPanel />
        <Route exact path='/' component={Portfolio} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/aboutme' component={AboutMe} />
        <Route exact path='/projects' component={Projects} />
      </div>
    </Router>

  );
}

export default App;
