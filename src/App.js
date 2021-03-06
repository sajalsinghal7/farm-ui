import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import DegreeDay from './components/DegreeDay';
import UploadDegreeDay from './components/UploadDegreeDay';
import DayLength from './components/DayLength';
import Diapause from './components/Diapause';
import StageDiapause from './components/StageDiapause';
import Stress from './components/Stress';
import Egg from './components/Egg';
import UploadStress from './components/UploadStress';
import UploadEgg from './components/UploadEgg';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Welcome to Farm Model Analyser</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/degreeDay'} className="nav-link">Degree Day</Link></li>
            <li><Link to={'/uploadDegreeDay'} className="nav-link">Upload Degree Day File Records</Link></li>
            <li><Link to={'/dayLength'} className="nav-link">Day Length Viewer</Link></li>
            <li><Link to={'/diapause'} className="nav-link">Diapause Analysis</Link></li>
            <li><Link to={'/stageDiapause'} className="nav-link">Stage-Diapause Analysis</Link></li>
            <li><Link to={'/stress'} className="nav-link">Stress Analysis</Link></li>
            <li><Link to={'/egg'} className="nav-link">Egg Analysis</Link></li>
            <li><Link to={'/uploadStress'} className="nav-link">Upload Stress Analysis Data</Link></li>
            <li><Link to={'/uploadEgg'} className="nav-link">Upload Egg Analysis Data</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/degreeDay' component={DegreeDay} />
              <Route path='/uploadDegreeDay' component={UploadDegreeDay} />
              <Route path='/dayLength' component={DayLength} />
              <Route path='/diapause' component={Diapause} />
              <Route path='/stageDiapause' component={StageDiapause} />
              <Route path='/stress' component={Stress} />
              <Route path='/egg' component={Egg} />
              <Route path='/uploadStress' component={UploadStress} />
              <Route path='/uploadEgg' component={UploadEgg} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;