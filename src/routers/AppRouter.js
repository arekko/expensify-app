import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import React from 'react';
import ExspenseDashboardPage from '../components/ExspenseDashboardPage';
import AddExspensePage from '../components/AddExspensePage';
import EditExspensePage from '../components/EditExspensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
            <Route path="/" component={ExspenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExspensePage} />
            <Route path="/edit" component={EditExspensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;