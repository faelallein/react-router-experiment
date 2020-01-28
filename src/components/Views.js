import React from 'react'
import { Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom'
import {Button, ButtonGroup} from 'react-bootstrap'

export function View() {
    return (
        <h1>VIEW 1</h1>
    )
}

export function View2() {
    let { path, url } = useRouteMatch()

    return (
        <div>
            <ButtonGroup className="mt-10">
                <Button variant="outline-success"><Link to={`${url}`}>base</Link></Button>
                <Button variant="outline-success"><Link to={`${url}/top`}>Top</Link></Button>
                <Button variant="outline-success"><Link to={`${url}/bottom`}>Bottom</Link></Button>
            </ButtonGroup>
            <br />
            <br />           
            <Switch>
                <Route exact path={path}>
                    <h2>VIEW 2</h2>
                </Route>
                <Route path={`${path}/top`}>
                    <h2>Top</h2>
                </Route>
                <Route path={`${path}/bottom`}>
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