import React from 'react';
import {Provider} from "react-redux";
import ReactNative from 'react-native'
import store from "./utilities/storage/store";
import TopLevelComponent from './screens/EntryScreen';
import Routing, {Router} from './utilities/routing/index';
import Home from './screens/Home'

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

ReactNative.render(<App/>, document.getElementById('root'));