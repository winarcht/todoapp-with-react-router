import React, { Component } from 'react';

import FilterLink from './FilterLink';

class FilterList extends Component {

	render() {
		const { filters, selectedFilter, _onClick } = this.props;

		let list = Object.keys(filters).map((key) => {
			return <FilterLink key={key} selectedFilter={selectedFilter} _onClick={_onClick}>{filters[key]}</FilterLink>
		});

		return (
			<div id="filter-list">
				Show: {list}
			</div>
		);
	}

}

export default FilterList;