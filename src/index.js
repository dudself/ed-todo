import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import './index.css';

import App from "./App";

const store = createStore(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <StrictMode>
                <App />
            </StrictMode>
        </Provider>
    </React.StrictMode >,
    document.getElementById('root')
);