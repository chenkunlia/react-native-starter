import React from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import Daily from '../pages/Daily';

class DailyContainer extends React.Component {

	static navigationOptions = {
		title: '日报',
		tabBarIcon: ({ tintColor, focused }) => (
			focused
				?
				<Image source={require('../images/daily/daily-on.png')} style={{ height: 24, width: 24 }} />
				:
				<Image source={require('../images/daily/daily.png')} style={{ height: 24, width: 24 }} />
		)
	};

	render() {
		return <Daily {...this.props} />;
	}
}

const mapStateToProps = (state, ownProps) => {
	const { setting, daily } = state;
	return {
		setting,
		daily
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateSetting: (payload) => {
			return dispatch({
				type: 'setting@@update',
				payload: payload
			});
		},
		getDaily: (payload) => {
			return dispatch({
				type: 'daily@@start',
				payload: payload
			});
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DailyContainer);