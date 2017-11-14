/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_TOPICS_SUCCEEDED,
  REQUEST_TOPICS_FAILED,
} from './constants';

const initialState = fromJS({
  topics: [],
});

function navigationContainerReducer(state = initialState, { type, payload }) {
  switch (type) {
    case REQUEST_TOPICS_SUCCEEDED:
      return state.set('topics', payload);
    case REQUEST_TOPICS_FAILED:
      return state.set('error', payload);
    default:
      return state;
  }
}

export default navigationContainerReducer;
