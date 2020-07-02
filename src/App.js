import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './screens/Home'
import Albums from './screens/Albums'
import Posts from './screens/Posts'
import Todos from './screens/Todos'
import './App.css' /* Assim que importa CSS no JavaScript*/

const App = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        {/* path="/" Vai redirecionar pro Home */}
        <Route path="/postagens">
          <Posts></Posts>
        </Route>
        <Route path="/albums">
          <Albums></Albums>
        </Route>
        <Route path="/todos">
          <Todos></Todos>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
export default App