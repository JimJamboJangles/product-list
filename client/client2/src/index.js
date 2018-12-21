import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers/rootReducer";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import ProductList from './components/productList'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/products' component={ProductList} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>

  , document.getElementById('root'));
