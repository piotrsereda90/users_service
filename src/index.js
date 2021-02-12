import React from 'react';

import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage"; 
import thunk from 'redux-thunk'
import reducers from './rootReducers'

const persistConfig = {
  key: "root",
  storage
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(
  persistedReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(...middleware))
);
const persistor = persistStore(store);


// const store = createStore(reducers, applyMiddleware(thunk));

  // console.log(store.getState())
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
