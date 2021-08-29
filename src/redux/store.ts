import { combineReducers, compose, createStore } from 'redux';
import usersReducer from './reducers/users-reducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const reducersObj = {
  users: usersReducer,
};

let reducers = combineReducers(reducersObj);

export type RootState = ReturnType<typeof reducers>;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

export default store;