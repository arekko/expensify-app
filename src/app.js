
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExspenseDashboardPage = () => (
    <div>
        This is my react component
    </div>
);

const AddExspensePage = () => (
    <div>
        This is my addExpensive component
    </div>
);

const EditExspensePage = () => (
    <div>
        This is my EditExpensive component
    </div>
);
const HelpPage = () => (
    <div>
        This is Helppage
    </div>
);

const NotFoundPage = () => (
    <div>
         404 - <Link to="/"> Go home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Go to home page</NavLink>
        <NavLink to="/create" activeClassName="is-active">Go to create page</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Go to edit page</NavLink>        
        <NavLink to="/help" activeClassName="is-active">Go to help page</NavLink>
        
    </header>
);
const routes = (
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

ReactDOM.render(routes, document.getElementById('app'))














