const path = require('path')

module.exports = env => {
    return {
		entry: [
			path.resolve(__dirname, 'app', 'index.js'),
			path.resolve(__dirname, 'scss', 'index.scss'),
		],
		output: {
			path: path.resolve(__dirname, 'public'),
			filename: 'js/index.min.js',
		},
		resolve: {
			alias: {
				App: path.resolve('app'),
			}
		},
		module: {
			rules: [
				{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
				},
				{
					test: /\.scss$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'file-loader',
							options: { outputPath: 'css/', name: '[name].min.css'},
						},
						'sass-loader'
					]
				  },
			  
			]
		}
    }
}
