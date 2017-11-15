/*
 *
 * NavigationContainer actions
 *
 */

import {
  REQUEST_TOPICS,
  REQUEST_TOPICS_SUCCEEDED,
  REQUEST_TOPICS_FAILED,
  SELECT_TOPIC,
  TOGGLE_DRAWER,
} from './constants';


export const requestTopics = () => ({
  type: REQUEST_TOPICS,
});

export const requestTopicsSucceeded = topics => ({
  type: REQUEST_TOPICS_SUCCEEDED,
  payload: topics,
});

export const requestTopicsFailed = message => ({
  type: REQUEST_TOPICS_FAILED,
  payload: message,
});


export const selectTopic = topic => ({
  type: SELECT_TOPIC,
  payload: topic,
});

export const toggleDrawer = () => ({
  type: TOGGLE_DRAWER,
});
