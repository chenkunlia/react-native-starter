import React from 'react';
import {
	Text,
	View,
	Image,
	StyleSheet,
	FlatList,
	TouchableOpacity
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import HeaderBar from '../components/HeaderBar';
import LoadingView from '../components/LoadingView';
import MovieCard from '../components/MovieCard';
import Library from '../utils/library';

export default class Movie extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isRefreshing: false
		}
	}

	componentDidMount() {
		this.props.getInTheater();
	}

	// 下拉刷新日报列表
	onRefresh() {
		this.setState({
			isRefreshing: true
		}, () => {
			this.props.getInTheater();
			setTimeout(() => {
				this.setState({
					isRefreshing: false
				});
			}, 2000);
		});
	}

	// 渲染时间线列表单项
	renderMovieCard(card) {
		const { item, index } = card;
		const { title, genres, images } = item;
		let type = '';
		genres.map((item, index) => {
			if (index === 0) {
				type += item;
			}
			else {
				type += '·' + item;
			}
		});
		return (
			<MovieCard
				index={index}
				title={title}
				type={type}
				thumbnail={images.large}
				onPress={() => { }}
			/>
		);
	}

	// 渲染页面主体内容
	renderBody() {
		const { inTheater } = this.props;
		if (!inTheater.isLoading) {
			const { isRefreshing } = this.state;
			return (
				<FlatList
					data={inTheater.data}
					keyExtractor={(item, index) => index}
					renderItem={(item) => this.renderMovieCard(item)}
					onRefresh={() => { this.onRefresh(); }}
					refreshing={isRefreshing}
				/>
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
				<HeaderBar title='豆瓣电影' />
				{this.renderBody()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});