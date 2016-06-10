var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
	entry: [
		'./app/index.js'
	],
	output: {
		path: __dirname + '/bundle',
		filename: "bundle.js"
	},
	module: {
		loaders: [
		  {
		    test: /\.jsx?$/,
		    exclude: /node_modules/,
		    loader: 'babel', // 'babel-loader' is also a legal name to reference 
		    query: {
		      presets: ['react', 'es2015']
		    }
		  }
		]
	},
	plugins: [HTMLWebpackPluginConfig]
}