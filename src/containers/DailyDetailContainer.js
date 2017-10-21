import React from 'react';
import { connect } from 'react-redux';
import DailyDetail from '../pages/DailyDetail';

class DailyDetailContainer extends React.Component {
	render() {
		return <DailyDetail {...this.props} />;
	}
}

export default connect(null, null)(DailyDetailContainer);