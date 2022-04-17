import React, {Fragment} from 'react';

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import {Switch,Route} from "react-router-dom";

const AppRoutes = () => {
    return (
        <Fragment>

            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/register" component={RegisterPage} />
                <Route exact path="/dashboard" component={DashboardPage} />
            </Switch>

        </Fragment>
    );
};

export default AppRoutes;