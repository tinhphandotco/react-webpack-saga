import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

import App from "./App";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

store.dispatch({
  type: "LOAD_COUNT",
  count: 0,
});

setTimeout(() => {
  store.dispatch({
    type: "LOAD_COUNT",
    count: 1,
  });
}, 1000);

setTimeout(() => {
  store.dispatch({
    type: "LOAD_COUNT",
    count: 2,
  });
}, 2000);

const wrapper = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  wrapper,
);
