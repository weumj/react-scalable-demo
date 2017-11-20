/*
 *
 * LoginContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGIN,
} from './constants';

const initialState = fromJS({});

function loginContainerReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN:
      return state.set('email', payload);
    default:
      return state;
  }
}

export default loginContainerReducer;
