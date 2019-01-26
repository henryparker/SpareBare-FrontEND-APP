import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import campaingReducer from '../reducers/campaign';
import bankAuthReducer from '../reducers/bankAuth';
import subscribeReducer from '../reducers/subscribe';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth:authReducer,
      campaign:campaingReducer,
      totalSpare: bankAuthReducer,
      subscribeList : subscribeReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};