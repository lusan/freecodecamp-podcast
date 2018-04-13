import React from 'react';
import {Provider} from "react-redux";
import store from "./src/utilities/storage/store";
import TopLevelComponent from './src/screens/EntryScreen';
import Routing, {Router} from './src/utilities/routing/index';

import Home from './src/screens/Home'

const Route = Routing.Route;
const Switch = Routing.Switch

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                  <Switch>
                    <Route exact path='/' component={TopLevelComponent}/>
                    <Route path='/home' component={Home}/>
                  </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;
