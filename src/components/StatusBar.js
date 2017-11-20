import React, { Component } from 'react';

import { FILTERS } from './../Conf.js';

class StatusBar extends Component {

	render() {
		const { selectedFilter, tasks } = this.props;
		let status = '';

		switch (selectedFilter) {
			case FILTERS.ACTIVE:
				status = `${tasks.length} task(s) left`;

				break;

			case FILTERS.DONE:
				status = `${tasks.length} task(s) done`;

				break;

			default:
				status = `Total: ${tasks.length} task(s)`;

				break;
		}

		return (
			<div id="status-bar">
				{status}
			</div>
		);
	}

}

export default StatusBar;