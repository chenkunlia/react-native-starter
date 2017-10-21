import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { getDaily } from './dailySaga';
import { getComingSoon, getInTheater } from './movieSaga';

export default function* rootSaga() {
	yield takeLatest('daily@@start', getDaily);
	yield takeLatest('comingSoon@@start', getComingSoon);
	yield takeLatest('inTheater@@start', getInTheater);
}