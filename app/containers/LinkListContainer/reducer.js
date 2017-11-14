/*
 *
 * LinkListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_LINK_SUCCEEDED,
} from './constants';

const initialState = fromJS({
  links: [],
});

function linkListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LINK_SUCCEEDED:
      return state.set('links', action.payload);
    default:
      return state;
  }
}

export default linkListContainerReducer;
