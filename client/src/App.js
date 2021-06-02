import React from 'react'
import {BrowserRouter as Router, Route , Switch } from 'react-router-dom'
import Register from './pages/Register'
import Home from './pages/Home'
import Login from './pages/Login'
import Feed from './pages/Feed'
import Navbar from './pages/Navbar'
import PrivetRoute from './PrivetRoute'
import './App.css';

function App() {
  return (
    <div className="App">
      
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path ="/" component={Home}/>
            <Route exact path ="/Register" component={Register}/>
            <Route exact path ="/login" component={Login}/>
            <PrivetRoute exact path ="/feed" component={Feed}/>
          </Switch>
        </Router>
       
      
    </div>
  );
}

export default App;
