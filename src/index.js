/**
 * @format
 */
import React from 'react';

import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app/app.json';

import { Provider } from 'react-redux';
import { store } from './_helpers';

function Store() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

AppRegistry.registerComponent(appName, () => Store);
