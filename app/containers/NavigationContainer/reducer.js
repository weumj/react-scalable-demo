/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_TOPICS_SUCCEEDED,
  REQUEST_TOPICS_FAILED,
  SELECT_TOPIC,
  TOGGLE_DRAWER,
} from './constants';

const initialState = fromJS({
  topics: [],
  isDrawerOpen: false,
});

function navigationContainerReducer(state = initialState, { type, payload }) {
  switch (type) {
    case REQUEST_TOPICS_SUCCEEDED:
      return state.set('topics', payload);
    case REQUEST_TOPICS_FAILED:
      return state.set('error', payload);
    case SELECT_TOPIC:
      return state.set('selectedTopic', payload).set('isDrawerOpen', false);
    case TOGGLE_DRAWER:
      return state.set('isDrawerOpen', !state.get('isDrawerOpen'));
    default:
      return state;
  }
}

export default navigationContainerReducer;
