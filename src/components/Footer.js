/**
 * The Footer, consists of two sections:
 *   1. A StatusBar, describing how many tasks are left, or done.
 *   2. FilterList, containing the filters to filter the TodoList.
 */
import React, { Component } from 'react';

import StatusBar from './StatusBar';
import FilterList from './FilterList';

import isEqual from 'lodash.isequal';

class Footer extends Component {

  /**
   * This component should be re-rendered only when:
   *   1. The filter is changed.
   *   2. Someone added a new task in the TodoList.
   */
	shouldComponentUpdate(nextProps, nextState) {
		if ((nextProps.selectedFilter === this.props.selectedFilter) && isEqual(nextProps.tasks, this.props.tasks)) {
			return false;
		}

		return true;
	}

/* 
	Helper function to check whether this component is re-rendered or not
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