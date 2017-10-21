import { StackNavigator, TabNavigator } from 'react-navigation';
import Splash from './pages/Splash';
import DailyContainer from './containers/DailyContainer';
import DailyDetailContainer from './containers/DailyDetailContainer';
import MovieContainer from './containers/MovieContainer';
import UserContainer from './containers/UserContainer';

const TabContainer = TabNavigator(
	{
		Daily: { screen: DailyContainer },
		Movie: { screen: MovieContainer },
		User: { screen: UserContainer }
	},
	{
		lazy: true,
		tabBarPosition: 'bottom',
		tabBarOptions: {
			activeTintColor: '#65c294',
			inactiveTintColor: '#8a8a8a',
			backBehavior: 'none',
			animationEnabled: true,
			swipeEnabled: false,
			lazy: false,
			showIcon: true,
			showLabel: true,
			style: {
				backgroundColor: '#ffffff'
			},
			indicatorStyle: {
				opacity: 0
			},
			tabStyle: {
				paddingBottom: 5
			}
		}
	}
);

export default App = StackNavigator(
	{
		Splash: { screen: Splash },
		Home: { screen: TabContainer },
		DailyDetail: { screen: DailyDetailContainer }
	},
	{
		headerMode: 'screen',
		navigationOptions: {
			header: null
		}
	}
);