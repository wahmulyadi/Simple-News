import AsyncStorage from '@react-native-async-storage/async-storage';
import {createLogger} from 'redux-logger';
import {persistCombineReducers, persistStore} from 'redux-persist';
import reducers from '../_reducers/index';
import rpm from 'redux-promise-middleware';
import Thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';

const config = {
  key: 'primary',
  storage: AsyncStorage,
};

const persistedReducer = persistCombineReducers(config, reducers);
const logger = createLogger({});
const enhancers = applyMiddleware(logger, rpm, Thunk);

export default () => {
  let store = createStore(persistedReducer, composeWithDevTools(enhancers));
  let persistor = persistStore(store);
  return {
    store,
    persistor,
  };
};
