import { takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { REQUEST_TOPICS, SELECT_TOPIC, REQUEST_TOPICS_SUCCEEDED } from './constants';
import { requestTopicsSucceeded, requestTopicsFailed } from './actions';
import selectNavigationContainer from './selectors';

export const fetchTopicsFromServer = () =>
  fetch('http://localhost:3000/api/topics')
    .then(response => response.json());

function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsFromServer);

    yield put(requestTopicsSucceeded(topics));
  } catch ({ message }) {
    yield put(requestTopicsFailed(message));
  }
}

function* pushTopics(action) {
  yield put(push(`/topics/${action.payload.name}`));
}

function* selectDefaultTopic() {
  const state = yield select(selectNavigationContainer());

  if (!state.selectedTopic) {
    yield put(push(`/topics/${state.topics[0].name}`));
  }
}

export function* selectDefaultTopicSaga() {
  yield takeLatest(REQUEST_TOPICS_SUCCEEDED, selectDefaultTopic);
}

export function* selectTopicSaga() {
  yield takeLatest(SELECT_TOPIC, pushTopics);
}

export function* fetchTopicsSaga() {
  yield* takeLatest(REQUEST_TOPICS, fetchTopics);
}

// All sagas to be loaded
export default [
  fetchTopicsSaga,
  selectTopicSaga,
  selectDefaultTopicSaga,
];
