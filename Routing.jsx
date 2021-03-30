import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import {  useRouteMatch, useParams, useLocation} from 'react-router'

function Home() {
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

function DashBoard() {
    let something = useRouteMatch();
    return (
        <div>
            <h1>DashBoard</h1>
            <ul>
                <li>
                    <Link to={`${something.url}/user`}>User</Link>
                </li>
                <li>
                    <Link to={`${something.url}/users`}>Users</Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${something.path}/user`}>
                    <User />
                </Route>
                <Route path={`${something.path}/users`}>
                    <Users />     
                </Route>
            </Switch>
        </div>
    )
}

function About() {
    return (
        <div>
            <h1>About</h1>
        </div>
    )
}


function User() {
    let something=useRouteMatch();
    return (
        <div>
            Users
            <Switch>
                <Route path={`${something.path}/:User_id`}>
                    <UserId />
                </Route>
            </Switch>
        </div>
    )
}

function UserId() {
    let { User_id } = useParams();
    return (
        <div>
            <h3>User Id: {User_id} </h3>
        </div>
    )
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Users() {
    let something = useRouteMatch();
    let query = useQuery();

    return (
        <div>
            <h3>Users</h3>
            <ul>
                <li>
                    <Link to={`${something.url}?name=yahoo`}>Yahoo</Link>
                </li>
                <li>
                    <Link to={`${something.url}?name=google`}>Google</Link>
                </li>
            </ul>
            
            <Child name={query.get("name")} />
        </div>
    )
}

function Child({ name }) {
    return (
        <div>
            { name ? (
                <h3>Name:{name}</h3>
            ):(
                <h3>There is no name in the query</h3>
            )}
        </div>
    )
}

function Routing() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">DashBoard</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/dashboard">
                        <DashBoard />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Routing
