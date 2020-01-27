import React from 'react'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'

export function View() {
    return (
        <h1>VIEW 1</h1>
    )
}

export function View2() {
    let { path, url } = useRouteMatch()

    return (
        <div>
            <Link to={`${url}`}>base</Link>
            <Link to={`${url}/top`}>Top</Link>
            <Link to={`${url}/bottom`}>Bottom</Link>
            <Switch>
                <Route exact path={path}>
                    <h2>VIEW 2</h2>
                </Route>
                <Route exact path={`${path}/top`}>
                    <h2>top</h2>
                </Route>
                <Route exact path={`${path}/bottom`}>
                    <h2>Bottom</h2>
                </Route>
            </Switch>
        </div>

    )
}

export function View3() {
    return (
        <h1>VIEW 3</h1>
    )
}