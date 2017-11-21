/*
 *
 * LinkFormContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_LINK_SUCCESS,
  ADD_LINK_FAIL,
} from './constants';

const initialState = fromJS({});

function linkFormContainerReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_LINK_SUCCESS:
      return state;
    case ADD_LINK_FAIL:
      return state;
    default:
      return state;
  }
}

export default linkFormContainerReducer;
