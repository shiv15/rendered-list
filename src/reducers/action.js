import axios from 'axios';
import MESSAGES from './App.js';

/*vvar userReducer = function(state = [], action) {
  if (action.type === 'ADD_USER') {
    var newState = state.concat([action.user]);
    return newState;
  }
  return state;
}

var store = Redux.createStore(userReducer);

// Dispatch our first action to express an intent to change the state
store.dispatch({
  type: 'ADD_USER',
  user: {name: 'Dan'}
});
*/
export function messagefilter(message) {
  const request = axios.get('./App.js');
  return {
    type: REQUEST_TYPE.MESSAGES.FILTER_MESSAGES,
    payload: request
  };
}
