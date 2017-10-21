import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import { CustomCachedImage } from "react-native-img-cache";
import ImageProgress from 'react-native-image-progress';

export default TimelineCard = (props) => {
	const { index, title, thumbnail, onPress } = props;
	return (
		<TouchableOpacity onPress={onPress} activeOpacity={0.6} style={[styles.timelineCard, (index === 0) ? { marginTop: 5 } : null]}>
			<View style={styles.card}>
				<Text style={styles.title} numberOfLines={2}>{title}</Text>
				<CustomCachedImage
					component={ImageProgress}
					source={{ uri: thumbnail }}
					style={styles.thumbnail}
				/>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	timelineCard: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 5,
		marginRight: 5,
		marginBottom: 5,
		borderRadius: 5,
		padding: 10,
		backgroundColor: '#ffffff',
		shadowColor: '#dbdbdb',
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 1,
		shadowRadius: 1
	},
	card: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	title: {
		flex: 1,
		marginRight: 10,
		fontSize: 16,
		lineHeight: 24
	},
	thumbnail: {
		height: 64,
		width: 64
	}
});