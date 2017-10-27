import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Main from './React/Main';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('app')
);
