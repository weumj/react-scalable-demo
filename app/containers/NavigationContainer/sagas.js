import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { REQUEST_TOPICS } from './constants';
import { requestTopicsSucceeded, requestTopicsFailed } from './actions';

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

export function* fetchTopicsSaga() {
  yield* takeLatest(REQUEST_TOPICS, fetchTopics);
}

// All sagas to be loaded
export default [
  fetchTopicsSaga,
];
