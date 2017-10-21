import React from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import Movie from '../pages/Movie';

class MovieContainer extends React.Component {

	static navigationOptions = {
		title: '电影',
		tabBarIcon: ({ tintColor, focused }) => (
			focused
				?
				<Image source={require('../images/movie/movie-on.png')} style={{ height: 24, width: 24 }} />
				:
				<Image source={require('../images/movie/movie.png')} style={{ height: 24, width: 24 }} />
		)
	};

	render() {
		return <Movie {...this.props} />;
	}
}

const mapStateToProps = (state, ownProps) => {
	const { setting, comingSoon, inTheater } = state;
	return {
		setting,
		comingSoon,
		inTheater
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateSetting: (payload) => {
			return dispatch({
				type: 'update@@setting',
				payload: payload
			});
		},
		getComingSoon: (payload) => {
			return dispatch({
				type: 'comingSoon@@start',
				payload: payload
			});
		},
		getInTheater: (payload) => {
			return dispatch({
				type: 'inTheater@@start',
				payload: payload
			});
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);