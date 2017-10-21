import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import { CustomCachedImage } from "react-native-img-cache";
import ImageProgress from 'react-native-image-progress';

export default movieCard = (props) => {
	const { index, title, type, thumbnail, onPress } = props;
	return (
		<TouchableOpacity onPress={onPress} activeOpacity={0.6} style={[styles.movieCard, (index === 0) ? { marginTop: 5 } : null]}>
			<View style={styles.card}>
				<View style={styles.description}>
					<Text style={styles.title} numberOfLines={1}>{title}</Text>
					<Text style={styles.type} numberOfLines={1}>{type}</Text>
				</View>
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
	movieCard: {
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
	description: {
		flex: 1,
		marginRight: 10,
	},
	title: {
		fontSize: 16,
		lineHeight: 24
	},
	type: {
		fontSize: 12,
		lineHeight: 18,
		color: '#8a8a8a'
	},
	thumbnail: {
		height: 64,
		width: 64
	}
});