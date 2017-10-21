const initialState = {
	data: [],
	isLoading: true
}

export default dailyReducer = {
	// 日报列表
	daily: (state = initialState, action) => {
		switch (action.type) {
			case 'daily@@success':
				const { stories } = action.payload.data;
				return { ...state, data: stories, isLoading: false };
			default:
				return state;
		}
	}
}