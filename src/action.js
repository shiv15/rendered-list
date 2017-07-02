import axios from 'axios';
import MESSAGES from './App.js';

const REQUEST_TYPE = 'REQUEST_TYPE';
export function messagefilter(message) {
  const request = axios.get('./App.js');
  return {
    type: 'REQUEST_TYPE',
    payload: request
  };

}
export default 'REQUEST_TYPE';
