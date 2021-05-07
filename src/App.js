import './App.css';
import Nav from './components/Navbar';
import Home from './components/Home';
import Alert from './components/Alert';
import About from './components/About';
import User from './components/User';
import NotFound from './components/NotFound';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';


const App= ()=>{

    return (
      <GithubState>
        <AlertState>
        <Router>
        <div className="App">
        <Nav title='GitHub finder'/>
        <div className="container">
          <Alert />
          <Switch>
            <Route exact path='/' component={Home} />

            <Route exact path='/about' component={About}></Route>

            <Route exact path='/user/:login' component={User}/>

            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
      </Router>
        </AlertState>
      </GithubState>
    );
}


export default App;
