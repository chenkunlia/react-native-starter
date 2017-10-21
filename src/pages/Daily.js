import React from 'react';
import {
	Text,
	View,
	Image,
	StyleSheet,
	Platform,
	FlatList,
	WebView,
	TouchableOpacity
} from 'react-native';
import Drawer from 'react-native-drawer';
import LoadingView from '../components/LoadingView';
import TimelineCard from '../components/TimelineCard';
import Library from '../utils/library';

export default class Daily extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isDrawer: false,
			isRefreshing: false
		}
	}

	componentDidMount() {
		this.props.getDaily();
	}

	// 切换左侧边栏状态
	toggleDrawer() {
		const { isDrawer } = this.state;
		this.setState({
			isDrawer: !isDrawer
		}, () => {
			isDrawer ? this.drawer.close() : this.drawer.open();
		});
	}

	// 下拉刷新日报列表
	onRefresh() {
		this.setState({
			isRefreshing: true
		}, () => {
			this.props.getDaily();
			setTimeout(() => {
				this.setState({
					isRefreshing: false
				});
			}, 2000);
		});
	}

	// 渲染时间线列表单项
	renderTimelineCard(card) {
		const { item, index } = card;
		return (
			<TimelineCard
				index={index}
				title={item.title}
				thumbnail={item.images[0]}
				onPress={() => { Library.redirect(this, 'DailyDetail', { id: item.id }); }}
			/>
		);
	}

	// 渲染页面头部内容
	renderHeader() {
		const { isDrawer } = this.state;
		return (
			<View style={styles.header}>
				<TouchableOpacity onPress={() => { this.toggleDrawer(); }} activeOpacity={0.6}>
					<Image source={require('../images/daily/avatar.jpg')} style={styles.headerAvatar} />
				</TouchableOpacity>
				<View style={styles.headerTitle}>
					<Text style={styles.title}>{isDrawer ? '个人收藏' : '知乎日报'}</Text>
				</View>
				<TouchableOpacity onPress={() => { console.warn('click more'); }} activeOpacity={0.6}>
					<Image source={require('../images/daily/more.png')} style={styles.headerMore} />
				</TouchableOpacity>
			</View>
		);
	}

	// 渲染页面主体内容
	renderBody() {
		const { daily } = this.props;
		if (!daily.isLoading) {
			const { isRefreshing } = this.state;
			const bayunjiang = (
				<WebView
					source={{ uri: 'https://www.bayun.org' }}
					bounces={false}
					javaScriptEnabled={true}
					domStorageEnabled={true}
					decelerationRate='normal'
					allowsInlineMediaPlayback={true}
				/>
			);
			return (
				<Drawer ref={(ref) => { this.drawer = ref; }} content={bayunjiang}>
					<FlatList
						data={daily.data}
						keyExtractor={(item, index) => index}
						renderItem={(item) => this.renderTimelineCard(item)}
						onRefresh={() => { this.onRefresh(); }}
						refreshing={isRefreshing}
					/>
				</Drawer>
			);
		}
		else {
			return (
				<LoadingView />
			);
		}
	}

	render() {
		return (
			<View style={styles.container}>
				{this.renderHeader()}
				{this.renderBody()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
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
	headerAvatar: {
		height: 24,
		width: 24,
		borderRadius: 12,
		resizeMode: 'stretch'
	},
	headerMore: {
		height: 24,
		width: 24,
		resizeMode: 'stretch'
	},
	headerTitle: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		fontSize: 18,
		color: '#ffffff',
		fontWeight: 'bold'
	}
});