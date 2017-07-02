import REQUEST_TYPE from './action.js';

import MESSAGES from './App.js';

const INITIAL_STATE = {messages: MESSAGES, filter: null};
export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case REQUEST_TYPE:
      return{state};

  }
}
//filter: inputValue
