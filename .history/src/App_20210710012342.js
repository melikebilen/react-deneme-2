import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home.js';
import AboutUs from './components/pages/AboutUs.js';
import AboutRobot from './components/pages/AboutRobot.js';
import Resources from './components/pages/Resources.js';

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="App--header">
        <>
        <Router>
          <Navbar/>
          <Switch>
            <Route path = '/react-deneme-2' exact component={Home}/>
            <Route path = '/react-deneme-2/aboutus' exact component={AboutUs}/>
            <Route path = '/react-deneme-2/aboutrobot' exact component={AboutRobot}/>
            <Route path = '/react-deneme-2/resources' exact component={Resources}/>
          </Switch>
        </Router>
          
        </>
        </div>
      </div>
    );
  }
}

export default App;