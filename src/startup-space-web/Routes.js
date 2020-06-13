import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from "react";

//Pages
import RegisterPage from "./ui/pages/auth/register/RegisterPage";
import LoginPage from "./ui/pages/auth/login/LoginPage";
import Home from "./ui/pages/Home/Home";
import CreateStartup from "./ui/pages/eventosStartup/registroStratup";



export const LOGIN_ROUTE = "/entrar";
export const INDEX_ROUTE = "/";
export const REGISTER_ROUTE = "/cadastro";
export const HOME_ROUTE = "/inicio";
export const CREATE_STARTUP = "/criarstartup";
export const LIST_STARTUP = "/startups/:parametro"

export const Routes = () => (

    <Router>
        <Route path={INDEX_ROUTE} component={Home} exact />
        <Route path={LIST_STARTUP} component={Home} />
        <Route path={REGISTER_ROUTE} component={RegisterPage} />
        <Route path={LOGIN_ROUTE} component={LoginPage} />
        <Route path={HOME_ROUTE} component={Home} />
        <Route path={CREATE_STARTUP} component={CreateStartup} />
    </Router>


);
