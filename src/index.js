import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import ErrorBoundry from './components/error-boundry';
import TwitService from './services/twit-service';
import TwitServiceContext from './components/twit-service-context';
import store from './store';

import './index.css';

const twitService = new TwitService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <TwitServiceContext.Provider value={twitService}>
                <App />
            </TwitServiceContext.Provider>
        </ErrorBoundry>
    </Provider>, 
    document.getElementById('root'));
