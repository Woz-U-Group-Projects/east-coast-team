import React from "react";
import BlackShirt from "./components/BlackShirt";
import WhiteShirt from "./components/WhiteShirt";
import { About } from "./components/About";
import Home from "./components/Home";
import "./App.css";
import {Route, BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Route path='/' exact component={Home}></Route>
      <Route path='/BlackShirt' component={BlackShirt}></Route>
      <Route path='/WhiteShirt' component={WhiteShirt}></Route>
      <Route path='/About' component={About}></Route>
      <div className="App">

      </div>
    </Router>
    
  );
}

export default App;
