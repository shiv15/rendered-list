import { REQUEST_TYPE } from '../actions/action.js';
const INITIAL_STATE = {all: [], person: null, page: 1};
export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case REQUEST_TYPE:
      return{...state, all:_.uniqBy(state.all.concat(action.payload.data),'id')};
    default:
      return state;

  }
}
