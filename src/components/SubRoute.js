import React from 'react'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import { Button, ButtonGroup } from 'react-bootstrap'

export default function SubRoute() {
    let { path, url } = useRouteMatch()
    return (
        <div>
            <ButtonGroup className="mt-10">
                <Link to={`${url}`}><Button variant="outline-success">1</Button></Link>
                <Link to={`${url}/2`}><Button variant="outline-success">2</Button></Link>
                <Link to={`${url}/3`}><Button variant="outline-success">3</Button></Link>
            </ButtonGroup>
            <br />
            <br />
            <Switch>
                <Route exact path={path}>
                    <h2>1</h2>
                </Route>
                <Route path={`${path}/2`}>
                    <h2>2</h2>
                </Route>
                <Route path={`${path}/3`}>
                    <h2>3</h2>
                </Route>
            </Switch>
        </div>
    )
}