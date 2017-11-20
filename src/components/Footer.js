import React, { Component } from 'react';

import StatusBar from './StatusBar';
import FilterList from './FilterList';

import isEqual from 'lodash.isequal';

class Footer extends Component {

	shouldComponentUpdate(nextProps, nextState) {
		if ((nextProps.selectedFilter === this.props.selectedFilter) && isEqual(nextProps.tasks, this.props.tasks)) {
			return false;
		}

		return true;
	}

/*
	componentDidUpdate(prevProps, prevState) {
		console.log('Footer updated');
	}
*/

	render() {
		const { filters, selectedFilter, _onClick, tasks } = this.props;

		return (
			<div id="footer">
				<StatusBar tasks={tasks} selectedFilter={selectedFilter} />
				<FilterList filters={filters} selectedFilter={selectedFilter} _onClick={_onClick} />
			</div>
		);
	}

}

export default Footer;