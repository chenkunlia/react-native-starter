import React from 'react';
import { Animated } from 'react-native';
import { NavigationActions } from 'react-navigation';

import Library from '../utils/library';

export default class Splash extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bounceValue: new Animated.Value(1)
		};
	}

	componentDidMount() {
		const { bounceValue } = this.state;
		Animated.timing(bounceValue, {
			toValue: 1.0,
			duration: 2000
		}).start();
		this.timer = setTimeout(() => {
			Library.jump(this, 'Home');
		}, 1000);
	}

	componentWillUnmount() {
		clearTimeout(this.timer);
	}

	render() {
		const { bounceValue } = this.state;
		return (
			<Animated.Image source={require('../images/splash.jpg')} style={{ width: Library.screen.width, height: Library.screen.height, transform: [{ scale: bounceValue }] }} />
		);
	}
}