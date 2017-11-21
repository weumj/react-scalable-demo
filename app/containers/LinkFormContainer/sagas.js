import { call, put } from 'redux-saga/effects';
import { ADD_LINK, ADD_LINK_CANCEL } from './constants';
import { takeLatest } from 'redux-saga';
import { createLink } from '../../api';
import { addLinkSuccess, addLinkFail } from './actions';

import { goBack } from 'react-router-redux';


function* addLinkCancelSaga() {
  yield* takeLatest(ADD_LINK_CANCEL, () => put(goBack()));
}

function* addLink(action) {
  try {
    const serverLink = yield call(createLink, action.payload.link);

    yield put(addLinkSuccess(serverLink));
    yield put(goBack());
  } catch (e) {
    yield put(addLinkFail(action.payload.link, e.message));
  }
}

// Individual exports for testing
export function* addLinkSaga() {
  yield* takeLatest(ADD_LINK, addLink);
}

// All sagas to be loaded
export default [
  addLinkSaga,
  addLinkCancelSaga,
];
