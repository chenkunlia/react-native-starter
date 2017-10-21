import { call, put, select } from 'redux-saga/effects';
import Request from '../utils/request';

export function* getDaily(action) {
	try {
		const payload = yield call(Request.getDaily, action.payload);
		yield put({
			type: 'daily@@success',
			payload: payload
		});
	}
	catch (error) {
		yield put({
			type: 'daily@@failure',
			payload: error.message
		});
	}
}