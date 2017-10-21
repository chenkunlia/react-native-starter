import React from 'react';
import {
	Text,
	View,
	Image,
	StyleSheet,
	Platform,
	TouchableOpacity
} from 'react-native';

export default HeaderBar = (props) => {
	const { title, canBack, back, canMore, more } = props;
	let headerStyle;
	if (!canBack && canMore) {
		headerStyle = {
			paddingLeft: 34
		}
	}
	if (canBack && !canMore) {
		headerStyle = {
			paddingRight: 34
		}
	}
	return (
		<View style={[styles.header, headerStyle]}>

			{
				canBack
					?
					<TouchableOpacity onPress={back}>
						<Image source={require('../images/back.png')} style={styles.headerBack} />
					</TouchableOpacity>
					:
					null
			}

			<View style={styles.headerTitle}>
				<Text style={styles.headerText} numberOfLines={1}>{title}</Text>
			</View>

			{
				canMore
					?
					<TouchableOpacity onPress={more}>
						<Image source={require('../images/more.png')} style={styles.headerMore} />
					</TouchableOpacity>
					:
					null
			}

		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: Platform.OS === 'ios' ? 20 : 0,
		height: Platform.OS === 'ios' ? 60 : 40,
		backgroundColor: '#65c294'
	},
	headerBack: {
		height: 24,
		width: 24,
		resizeMode: 'stretch'
	},
	headerMore: {
		height: 24,
		width: 24,
		resizeMode: 'stretch'
	},
	headerTitle: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 20,
		marginRight: 20
	},
	headerText: {
		fontSize: 18,
		color: '#ffffff',
		fontWeight: 'bold'
	}
});