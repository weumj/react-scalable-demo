/*
 *
 * LinkListContainer actions
 *
 */

import {
  REQUEST_LINK_SUCCEEDED,
  REQUEST_LINK_FAILED,
  REQUEST_LINKS,
  START_ADD,
} from './constants';

export const requestLinksSucceeded = links => ({
  type: REQUEST_LINK_SUCCEEDED,
  payload: { links },
});

export const requestLinksFailed = message => ({
  type: REQUEST_LINK_FAILED,
  payload: { message },
});

export const requestLinks = topicName => ({
  type: REQUEST_LINKS,
  payload: { topicName },
});

export const startAdd = topicName => ({
  type: START_ADD,
  payload: { topicName },
});
