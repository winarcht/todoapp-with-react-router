/**
 * A single filter link.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FilterLink extends Component {

	render() {
		const { selectedFilter, children } = this.props;

		if (children.toLowerCase() === selectedFilter) {
			return <span>{children}</span>
		}

		return (
			<Link name={children} to={`/${children.toLowerCase()}`}>{children}</Link>
		);
	}

}

export default FilterLink;