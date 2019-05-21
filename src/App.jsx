import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  About from "./components/About";
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/Register';
import Error from './components/Error';

class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/registr" component={Register} />
              <Route component={Error} />
            </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
