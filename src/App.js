import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Men from "./Pages/Men/Men"
import Women from "./Pages/Women/Women"
import HomePage from "./Pages/HomePage/HomePage"
import NavBar from "./Components/Navbar/Navbar"

function App() {
  return (
    
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/HomePage">
          <HomePage />
        </Route>
        <Route exact path="/Men">
          <Men />
        </Route>
        <Route path="/Women">
          <Women />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
