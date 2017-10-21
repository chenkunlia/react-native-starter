import axios from 'axios';
import Service from './service';

const server = 'https://my.bayun.org';

export default Request = {
	// 日报列表
	getDaily: (payload) => {
		return axios.get(Service.daily, {
			params: payload
		});
	},
	// 即将上映
	getComingSoon: (payload) => {
		return axios.get(Service.comingSoon, {
			params: payload
		});
	},
	// 正在热映
	getInTheater: (payload) => {
		return axios.get(Service.inTheater, {
			params: payload
		});
	}
}