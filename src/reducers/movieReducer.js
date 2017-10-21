const initialState = {
	data: {},
	isLoading: true
}

export default movieReducer = {
	// 即将上映
	comingSoon: (state = initialState, action) => {
		switch (action.type) {
			case 'comingSoon@@success':
				return { ...state, data: action.payload, isLoading: false };
			default:
				return state;
		}
	},
	// 正在热映
	inTheater: (state = initialState, action) => {
		switch (action.type) {
			case 'inTheater@@success':
				const { subjects } = action.payload.data;
				return { ...state, data: subjects, isLoading: false };
			default:
				return state;
		}
	}
}