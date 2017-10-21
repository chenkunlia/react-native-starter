import { Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation';
import moment from 'moment';

export default Library = {
	// 屏幕宽高
	screen: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height
	},
	// 普通跳转
	redirect(that, path, payload) {
		that.props.navigation.navigate(path, payload);
	},
	// 清空路由并跳转
	jump(that, path) {
		const resetAction = NavigationActions.reset({
			index: 0,
			actions: [NavigationActions.navigate({ routeName: path })]
		});
		that.props.navigation.dispatch(resetAction);
	},
	// 时间格式化
	moment: moment
}