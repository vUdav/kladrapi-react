/* jshint node: true */
var path = require('path');


module.exports = {
	context: path.join(__dirname),
	entry: './lib/index.js',

	output: {
		path: path.join(__dirname),
		filename: 'kladrapi-react.js',
		libraryTarget: 'umd',
		library: 'KladrapiReact'
	},

	externals: {
	 'react': 'var React',
	 'react/addons': 'var React'
	},

	module: {
		loaders: [
			{
				test: /\.scss$/,
				// Query parameters are passed to node-sass
				loader: 'style!css!sass?outputStyle=expanded&' +
					'includePaths[]=' + (path.resolve(__dirname, './bower_components')) + '&' +
					'includePaths[]=' + (path.resolve(__dirname, './node_modules'))
			},
			{
				test: /(\.js)|(\.jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					optional: ['runtime'],
					stage: 0
				}
			}
		]
	}
};
