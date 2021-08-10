import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ReactDOM from 'react-dom';
import './index.css';
import Route from './route';
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import configStore from './stores/stores'

const store = configStore()
const persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<div>loading...</div>}>
      <Route />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
