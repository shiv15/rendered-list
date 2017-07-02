import { createStore, combineReducers } from 'redux';

const messageReducer = function(state = {}, action) {
  return state;
}

const store = createStore(messageReducer);
