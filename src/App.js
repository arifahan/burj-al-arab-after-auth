import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch,
  Route,
  link
} from "react-router-dom";

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Book from './Components/Book/Book';
import NoMatch from './Components/NoMatch/NoMatch';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';



export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    signedInUser: false,
    name: '',
    email: '',
    photo: ''
  });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h1>5555555555555555555</h1>
      <p>name: {loggedInUser.name}</p>
        <Header />
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
                <PrivateRoute path="/book/:bedType">
                  <Book />
                </PrivateRoute>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="*">
                <NoMatch />
              </Route>
          </Switch>

    </UserContext.Provider>
  );
}

export default App;
