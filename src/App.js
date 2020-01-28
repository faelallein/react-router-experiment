import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import SubRoute from './components/SubRoute'
import Parameters from './components/Parameters'

import TopNavbar from './components/TopNavbar'

function App() {
    return (
        <div className="App">
            <TopNavbar />
            <br />
            <main>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/subrotas">
                        <SubRoute />
                    </Route>
                    <Route path="/parameters">
                        <Parameters />
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;
