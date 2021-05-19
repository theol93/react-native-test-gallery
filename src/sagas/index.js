import {put, takeLatest} from 'redux-saga/effects';

export function* sagaGetPhotos() {
  yield takeLatest('ADD_PHOTO', addPhoto);
}

export function* addPhoto(action) {
  try {
    yield console.log('sagas there', action.payload);
    yield put({
      type: 'ADD_PHOTO_SAGA',
      payload: {
        id: Date.now(),
        date: action.payload.date,
        uri: action.payload.uri,
      },
    });
  } catch (e) {
    yield console.log('sagas error ', e.message);
  }
}
