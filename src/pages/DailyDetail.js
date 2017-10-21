import React from 'react';
import {
	View,
	Share,
	WebView,
	StyleSheet
} from 'react-native';
import HeaderBar from '../components/HeaderBar';
import LoadingView from '../components/LoadingView';
import Service from '../utils/service';
import axios from 'axios';

export default class DailyDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			html: '',
			title: '八云酱',
			image: 'https://cdn.bayun.org/yakumo/image/avatar.jpg',
			share_url: 'https://www.bayun.org'
		}
	}

	componentDidMount() {
		this.getContent();
	}

	// 分享文章
	shareUrl() {
		const { title, image, share_url } = this.state;
		Share.share({
			message: title,
			url: share_url,
			title: title
		}, {
				dialogTitle: title,
				tintColor: '#65c294'
			});
	}

	// 获取文章详情
	async getContent() {
		const { id } = this.props.navigation.state.params;
		const url = Service.dailyDetail + '/' + id;
		try {
			const result = await axios.get(url);
			this.renderContent(result.data);
		}
		catch (error) {
			console.warn(error.message);
		}
	}

	// 组合页面内容
	renderContent(item) {
		let { share_url, title, image, body } = item;
		const css = 'https://daily.zhihu.com/css/share.css';
		const html = (
			`<html>
				<head>
					<title>${title}</title>
					<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />
					<link rel='stylesheet' href='${css}' />
				</head>
				<body>
					<div class='img-wrap'>
						<h1 class='headline-title'>${title}</h1>
						<img src='${image}' style='width: 100%;' />
						<div class='img-mask'></div>
					</div>
					${body}
				</body>
			</html>`
		);
		this.setState({
			html: html,
			title: title,
			image: image,
			share_url: share_url
		});
	}

	render() {
		const { html, title } = this.state;
		const { navigation } = this.props;
		if (html) {
			return (
				<View style={styles.container}>
					<HeaderBar canBack={true} back={() => { navigation.goBack(); }} canMore={true} more={() => { this.shareUrl(); }} title={title} />
					<WebView
						source={{ html: html }}
						bounces={false}
						javaScriptEnabled={true}
						domStorageEnabled={true}
						decelerationRate='normal'
						allowsInlineMediaPlayback={true}
					/>
				</View>
			);
		}
		else {
			return (
				<View style={styles.container}>
					<HeaderBar canBack={true} back={() => { navigation.goBack(); }} canMore={true} more={() => { this.shareUrl(); }} title={title} />
					<LoadingView />
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});