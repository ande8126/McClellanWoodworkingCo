import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
//bring in redux and saga folders
import rootReducer from './redux/reducers/_root.reducer'; // imports ./redux/reducers/index.js
import rootSaga from './redux/sagas/_root.saga'; // imports ./redux/sagas/index.js

//for sagas
const sagaMiddleware = createSagaMiddleware();

//array of redux middleware
const middlewareList = process.env.NODE_ENV === 'development' ? [sagaMiddleware, logger] : [sagaMiddleware];

//setup redux store
const store = createStore(
  //tells saga to use rootReducer
  //rootSaga contains all of our other reducers
  rootReducer,
  //add all middleware
  applyMiddleware( ...middlewareList),
)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);