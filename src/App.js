import React, { Component } from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import India from './Components/India'
import World from './Components/World'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


class App extends Component{


  render(){
      return(
        <div className="container-fluid">       
          <Router>
          <Header></Header>
              <Switch>
                  <Route exact path="/"> <India/> </Route>
                  <Route path="/india"> <India/> </Route>
                  <Route path="/world"> <World/> </Route>
              </Switch>
            <Footer></Footer>
          </Router>
          
        </div>
      );
  }
}
export default App;
