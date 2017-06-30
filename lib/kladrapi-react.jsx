// Package
import React from 'react';
import jsonp from 'jsonp';
// Styles
import './kladrapi-react.scss';

export default React.createClass({
	propTypes: {
		contentType: React.PropTypes.string.isRequired,
		withParent: React.PropTypes.boolean,
		limit: React.PropTypes.number,
	},

	getInitialState: function () {
		return {
			value: ''
		}
	},

	onChange: function (e) {
		const value = e.target.value;
		this.setState({
			value: value
		});
	},

	render: function() {
		const {
			value
		} = this.state;

		return (
			<div className="kladr">
				<input
					type="text"
					onChange={this.onChange}
					value={value}
				/>
			</div>
		);
	}
});
