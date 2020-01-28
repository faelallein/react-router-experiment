import React from 'react'
import { Switch, Route, Link, useRouteMatch, useLocation } from 'react-router-dom'
import { Button, ButtonGroup } from 'react-bootstrap'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function View3() {
    let { path, url } = useRouteMatch()
    let query = useQuery()

    return (
        <div>
            <ButtonGroup className="mt-10">
                <Link to={`${url}?name=Rafael`}><Button variant="outline-success">Nome</Button></Link>
                <Link to={`${url}?name=Rafael&sobre=Allein`}><Button variant="outline-success">Sobrenome</Button></Link>
            </ButtonGroup>
            <br />
            <br />
            <Switch>
                <Route path={`${path}`}>
                    <h2>{query.get('name')}</h2>
                    <h2>{query.get('sobre')}</h2>
                </Route>
            </Switch>
        </div>
    )
}