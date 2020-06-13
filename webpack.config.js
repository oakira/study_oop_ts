const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const glob = require('glob');
let pages_js = {}
let pages_ts = []
glob.sync('./js/pages/**/**/*.js').map(function (file) {
	let reg = /(.*)(?:\.([^.]+$))/;
	let match = file.match(reg)[1];
	let key = String(match.replace('./js/pages/', ''));
	pages_js[key] = file;
})
glob.sync('./src/iterator/**/**/*.ts').map(function (file) {
	let reg = /(.*)(?:\.([^.]+$))/;
	let match = file.match(reg)[1];
	let key = String(match.replace('./src/iterator/', ''));
	// pages_ts[key] = file;
	pages_ts.push(file);
})
function recursiveIssuer(m) {
	if (m.issuer) {
		return recursiveIssuer(m.issuer);
	} else if (m.name) {
		return m.name;
	} else {
		return false;
	}
}
module.exports = (env, argv) => {
	if (argv.mode === 'development') {
		config.devtool = 'source-map';
		config[0].optimization.splitChunks.cacheGroups.vendor.maxSize = 0;
	}
	if (argv.mode === 'production') {
		config.devtool = '';
		config[0].optimization.splitChunks.cacheGroups.vendor.maxSize = 1500000;
		config[0].plugins.push(new CompressionPlugin({ algorithm: 'gzip' }));
		config[1].plugins.push(new CompressionPlugin({ algorithm: 'gzip' }));
	}
	return config;
};
let config = [{
	entry: pages_ts,
	watch: true,
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist')
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all'
				}
			}
		}
	},
	module: {
		rules: [{
			test: /\.js[x]?$/,
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader',
				options: {
					presets: [
						['@babel/preset-env', {
							useBuiltIns: 'usage',
							corejs: 3,
							targets: {
								browsers: ['last 2 versions', '> 1%', 'Firefox ESR']
							}
						}]
					]
				}
			}],
			include: path.join(__dirname, 'js')
		},
		{
			test: /\.ts$/,
			exclude: /node_modules/,
			use: [{
				loader: 'ts-loader',
				// options: {
				// 	transpileOnly: false
				// }
			}],
			// include: path.join(__dirname, 'js')
		},
		{
			test: /\.(jpe?g|png|gif)$/i,
			loader: 'file-loader',
			options: {
				name: '[name].[ext]'
			}
		},
		{
			test: /\.css$/,
			loaders: ['style-loader', 'css-loader']
		}
		]
	},
	resolve: {
		modules: [
			path.join(__dirname, 'js'),
			'node_modules'
		],
		extensions: [
			'.ts', '.js'
		]
	},
	devServer: {
		hot: true,
		contentBase: path.join(__dirname, 'dist/js'),
		inline: true,
		historyApiFallback: {
			index: 'index.php'
		},
		compress: true,
		open: false,
		port: '8080',
		proxy: {
			'**': {
				target: {
					host: 'localhost',
					protocol: 'http:',
					port: '3000'
				},
				changeOrigin: true,
				secure: false
			}
		}
	},
	plugins: [
		new webpack.optimize.AggressiveMergingPlugin(),
		new BrowserSyncPlugin({
			port: 3000,
			proxy: 'localhost',
			open: false,
			files: [{
				match: ['!../admin/',
					'../**/*.php',
					'../**/*.html',
					'./dist/**/*.js',
					'./dist/**/*.css'
				]
			}]
		}, {
			reload: false
		})
	]
}];
