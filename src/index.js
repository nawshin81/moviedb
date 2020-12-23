import React from 'react';
import ReactDOM from 'react-dom';
import App from './screens/App'
import Navbar from "./components/Navbar"
import {BrowserRouter,Link,Route} from "react-router-dom"
import MovieDetails from './screens/MovieDetails'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <div>
      <Route path="/" exact={true} component={App}/>
      <Route path="/movie/:id" exact={true} component={MovieDetails}/>
    </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


