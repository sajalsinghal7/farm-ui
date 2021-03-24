import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import DegreeDay from './components/DegreeDay';
import UploadDegreeDay from './components/UploadDegreeDay';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/degreeDay'} className="nav-link">Degree Day</Link></li>
            <li><Link to={'/uploadDegreeDay'} className="nav-link">Upload Degree Day File Records</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/degreeDay' component={DegreeDay} />
              <Route path='/uploadDegreeDay' component={UploadDegreeDay} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;