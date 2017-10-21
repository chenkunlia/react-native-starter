import { combineReducers } from 'redux';
import dailyReducer from './dailyReducer';
import movieReducer from './movieReducer';

const setting = (state = {}, action) => {
	switch (action.type) {
		case 'setting@@update':
			return { ...state, ...action.payload };
		default:
			return state;
	}
}

export default rootReducer = combineReducers({
	// 本地设置
	setting: setting,
	// 日报列表
	daily: dailyReducer.daily,
	// 即将上映
	comingSoon: movieReducer.comingSoon,
	// 正在热映
	inTheater: movieReducer.inTheater
});