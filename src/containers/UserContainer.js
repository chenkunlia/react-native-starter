import React from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import User from '../pages/User';

class UserContainer extends React.Component {

	static navigationOptions = {
		title: '个人',
		tabBarIcon: ({ tintColor, focused }) => (
			focused
				?
				<Image source={require('../images/user/user-on.png')} style={{ height: 24, width: 24 }} />
				:
				<Image source={require('../images/user/user.png')} style={{ height: 24, width: 24 }} />
		)
	};

	render() {
		return <User {...this.props} />;
	}
}

const mapStateToProps = (state, ownProps) => {
	const { setting } = state;
	return {
		setting
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateSetting: (payload) => {
			return dispatch({
				type: 'update@@setting',
				payload: payload
			});
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);