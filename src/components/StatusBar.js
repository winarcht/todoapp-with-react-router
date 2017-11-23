/**
 * A status bar displaying message based on the selected filter:
 *   1. If "Active" is selected, show "... task(s) left".
 *   2. If "Done" is selected, show "... task(s) done".
 *   3. If "All" is selected, show "Total: ... task(s)".
 */
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