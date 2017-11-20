import React, { Component } from 'react';

class FilterLink extends Component {

	handleClick(e) {
		e.preventDefault();

		this.props._onClick(e.target.name);
	}

	render() {
		const { selectedFilter, children } = this.props;

		if (children === selectedFilter) {
			return <span>{children}</span>
		}

		return (
			<a name={children} onClick={this.handleClick.bind(this)}>{children}</a>
		);
	}

}

export default FilterLink;