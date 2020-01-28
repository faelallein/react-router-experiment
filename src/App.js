import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import { View, View2, View3 } from './components/Views'

import TopNavbar from './components/TopNavbar'

function App() {
    return (
        <div className="App">
            <TopNavbar />
            <br />
            <main>
                <Switch>
                    <Route exact path="/">
                        <View />
                    </Route>
                    <Route path="/subrotas">
                        <View2 />
                    </Route>
                    <Route path="/view3">
                        <View3 />
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;
