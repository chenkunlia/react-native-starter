import { call, put, select } from 'redux-saga/effects';
import Request from '../utils/request';

export function* getComingSoon(action) {
	try {
		const payload = yield call(Request.getComingSoon, action.payload);
		yield put({
			type: 'comingSoon@@success',
			payload: payload
		});
	}
	catch (error) {
		yield put({
			type: 'comingSoon@@failure',
			payload: error.message
		});
	}
}

export function* getInTheater(action) {
	try {
		const payload = yield call(Request.getInTheater, action.payload);
		yield put({
			type: 'inTheater@@success',
			payload: payload
		});
	}
	catch (error) {
		yield put({
			type: 'inTheater@@failure',
			payload: error.message
		});
	}
}