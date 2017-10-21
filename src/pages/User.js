import React from 'react';
import {
	Text,
	View,
	Image,
	StyleSheet,
	Platform,
	Alert,
	ScrollView,
	TouchableOpacity,
	FlatList
} from 'react-native';
import HeaderBar from '../components/HeaderBar';

export default class User extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<HeaderBar canMore={true} more={() => { console.warn('click more'); }} title='个人' />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});