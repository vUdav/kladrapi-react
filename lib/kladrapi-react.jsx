// Package
import React from 'react';
import jsonp from 'jsonp';
// Styles
import './kladrapi-react.scss';

export default React.createClass({
	propTypes: {
		token: React.PropTypes.string.isRequired,
		contentType: React.PropTypes.string.isRequired,
		withParent: React.PropTypes.bool,
		limit: React.PropTypes.number,
		regionId: React.PropTypes.string,
		districtId: React.PropTypes.string,
		cityId: React.PropTypes.string,
		streetId: React.PropTypes.string,
		buildingId: React.PropTypes.string
	},

	getInitialState: function () {
		return {
			value: '',
			result: null
		}
	},

	onChange: function (e) {
		const value = e.target.value;
		this.setState({
			value: value
		});
		if (value)
			this.search(value);
		else {
			this.setState({
				result: null
			});
		}
	},

	search: function (query) {
		const t = this;
		const {
			token,
			contentType,
			withParent,
			limit,
			regionId,
			districtId,
			cityId,
			streetId,
			buildingId
		} = this.props;

		if(!token) {
			console.error('Token is required! Please register on https://kladr-api.ru/register/ and get token');
			return;
		}
		if(!contentType) {
			console.error('contentType is required property!');
			return;
		}

		let url = 'http://kladr-api.ru/api.php?token='+token+'&contentType='+contentType+'&query='+query;

		if(withParent)
			url += '&withParent=1';
		if(limit)
			url += '&limit='+limit;
		if(regionId)
			url += '&regionId='+regionId;
		if(districtId)
			url += '&districtId='+districtId;
		if(cityId)
			url += '&cityId='+cityId;
		if(streetId)
			url += '&streetId='+streetId;
		if(buildingId)
			url += '&buildingId='+buildingId;

		jsonp(url, null, function (err, data) {
			if (err) {
				console.error(err.message);
			} else {
				const r = data.result;
				t.setState({
					result: r
				});
			}
		});
	},

	render: function() {
		const {
			value,
			result
		} = this.state;

		return (
			<div className="kladr">
				<input
					type="text"
					onChange={this.onChange}
					value={value}
				/>
				{result ? (
					<ul className="kladr__list">
						{result.map((item)=>{
							let region = null;
							if(item.parents.length > 0 && item.contentType === 'city') {
								region = item.parents.map((item)=>{
									if(item.contentType === 'region') {
										return <span key={item.id}>({item.name} {item.type})</span>
									} else {
										return false;
									}
								});
							}
							return (
								<li
									key={item.id}
									className='kladr__item'
									onClick={this.choose.bind(this,item)}>
									{item.typeShort}.{item.name} {region ? region : null}
								</li>
							)
						})}
					</ul>
				) : null}
			</div>
		);
	}
});
