/*
 *
 * LinkListContainer actions
 *
 */

import {
  REQUEST_LINK_SUCCEEDED,
  REQUEST_LINK_FAILED,
  REQUEST_LINKS,
} from './constants';

export const requestLinksSucceeded = links => ({
  type: REQUEST_LINK_SUCCEEDED,
  payload: links,
});

export const requestLinksFailed = message => ({
  type: REQUEST_LINK_FAILED,
  payload: message,
});

export const requestLinks = topicName => ({
  type: REQUEST_LINKS,
  payload: topicName,
});
