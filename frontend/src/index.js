import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import UserContainer from './containers/UserContainer'
import ReptileContainer from './containers/ReptileContainer'
import FeedingContainer from './containers/FeedingContainer'
import ReptileForm from './components/ReptileForm'
import {store} from './store'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import FeedForm from './components/FeedForm';

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Route exact path='/' component={App} />
            <Route exact path='/user' component={UserContainer} />
            <Route exact path='/reptile' component={ReptileContainer} />
            <Route exact path='/reptile-creation' component={ReptileForm} />
            <Route exact path='/feed-creation' component={FeedForm} />
            <Route exact path='/feeds' component={FeedingContainer} />
        </Provider>
    </Router>,

document.getElementById('root')
);

serviceWorker.unregister();
