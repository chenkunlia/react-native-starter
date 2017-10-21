import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	ActivityIndicator
} from 'react-native';

export default LoadingView = (props) => {
	const { message } = props;
	return (
		<View style={styles.loadingView}>
			<ActivityIndicator size='large' color='#65c294' />
			<Text style={styles.loadingText}>{message ? message : '加载中'}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	loadingView: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#e9e9ef'
	},
	loadingText: {
		marginTop: 10,
		textAlign: 'center'
	}
});