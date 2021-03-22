import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import GoToRide from './Components/GoToRide/GoToRide';
import NoMatch from './Components/NoMatch/NoMatch';
import Login2 from './Components/LogIn2/LogIn2' 
import Stock from './Components/Stock/Stock';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';
import Strcture from './Components/Struture/Strcture';

export const UserContex = createContext()

function App() {
  
  const [LogegInUser , setLogedInUser] = useState({});
  return ( <UserContex.Provider value={[LogegInUser , setLogedInUser]}>
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/login">
        <Login2></Login2>
        </Route>
        <Route path="/strcture">
          <Strcture></Strcture>
        </Route>
        <PrivetRoute path="/GoToRide">
          <GoToRide></GoToRide>
        </PrivetRoute>
        <PrivetRoute path="/ride/:id">
          <GoToRide></GoToRide>
        </PrivetRoute>
        <Route path="extra">
         <Stock></Stock>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
    </UserContex.Provider>
  );
}

export default App;
