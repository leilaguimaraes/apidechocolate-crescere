import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Switch, Route} from "react-router-dom"
import NotFound from "./pages/NotFound/404"
import Login from './pages/Login/login';
import RegisterUser from './pages/RegisterUser/registeruser'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact="true" component={Login} />
        <Route path='/registeruser' exact="true" component={RegisterUser}/>
        <Route path='/registerchocolate' exact="true" component={NotFound} />
        <Route path='/' exact="true" component={App} />
        <Route path="*" exact="true" component={NotFound} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
