import React, { Component } from 'react';
import './App.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { BrowserRouter, Switch,Route } from 'react-router-dom'
import Landing from './Pages/Landing';
import Register from './Pages/Register';
import Profile from './Pages/Employee/Profile';
class App extends Component {
  render(){
    return (
      <div className="App" style={{background:'#dedede'}}>
        
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Landing} />
            
            <Route path='/register' component={Register} />
            <Route path='/home' component={Home} />
            <Route path='/employee/:email' component={Profile} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
