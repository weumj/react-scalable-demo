/*
 *
 * LinkListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_LINK_SUCCEEDED,
} from './constants';

import {
  ADD_LINK_SUCCESS,
} from '../LinkFormContainer/constants';

const initialState = fromJS({
  links: [],
});

function addLink(state, link) {
  const links = state.get('links');

  links.push(link);
  return state.set('links', links);
}

function linkListContainerReducer(state = initialState, { type, payload }) {
  switch (type) {
    case REQUEST_LINK_SUCCEEDED:
      return state.set('links', payload.links);
    case ADD_LINK_SUCCESS:
      return addLink(state, payload.link);
    default:
      return state;
  }
}

export default linkListContainerReducer;
