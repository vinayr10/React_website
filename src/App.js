
import './App.css';
import Navbar from './app/Components/Navbar/Navbar';
import Main from './app/pages/main/Main';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Events from './app/pages/Events/Events';
import Footer from './app/Components/Footer/Footer';
import About from './app/pages/About/About';


function App() {
  return (
<>
<Router>
 <Navbar/>
 <Switch>
 <Route exact path="/" component={Main} />
 <Route  path="/Events" component={Events} />
 <Route  path="/About" component={About} />
        
        </Switch>
        <Footer/>
 
          </Router>
         
          
          </>

  );
}

export default App;
