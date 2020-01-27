import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import './App.css';
import { View, View2, View3 } from './components/Views'

function App() {
    return (
        <div className="App">
            <div>
                <Link to='/' >Home</Link>
                <Link to='/view2' >View 2</Link>
                <Link to='/view3' >View 3</Link>
            </div>
            <hr />
            <main>
                <Switch>
                    <Route exact path="/">
                        <View />
                    </Route>
                    <Route path="/view2">
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
