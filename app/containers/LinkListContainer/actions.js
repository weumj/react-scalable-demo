/*
 *
 * LinkListContainer actions
 *
 */

import {
  REQUEST_LINK_SUCCEEDED,
  REQUEST_LINK_FAILED,
} from './constants';

export const requestLinksSucceeded = links => ({
  type: REQUEST_LINK_SUCCEEDED,
  payload: links,
});

export const requestLinksFailed = message => ({
  type: REQUEST_LINK_FAILED,
  payload: message,
});