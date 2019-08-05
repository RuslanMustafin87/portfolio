module.exports =  {
	plugins: {
		'autoprefixer': {
			overrideBrowserslist:['ie >= 8', 'last 4 version']
		},
		'cssnano': {},
		'postcss-short': {},
		'postcss-utilities': {}
	}
};