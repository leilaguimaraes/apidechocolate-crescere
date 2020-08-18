import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './pages/Home/App';
import Create from './pages/RegisterUser/registeruser';
import NotFound from './pages/NotFound/404';
import Chocolate from './pages/RegisterChocolate/registerchocolate';
import Login from './pages/Login/login';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact='true' component={App} />
        <Route path="/create" exact="true" component={Create} />
        <Route path="/chocolate" exact="true" component={Chocolate} />
        <Route path="/login" exact="true" component={Login} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
