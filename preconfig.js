const paths = require('react-scripts/config/paths');
const path = require('path');
const fs = require('fs');

const webpackConfigs = {
	production: 'react-scripts/config/webpack.config.prod.js',
	development: 'react-scripts/config/webpack.config.dev.js',
};

// add alias for webpack
setImmediate(() => {
	if (webpackConfigs[process.env.NODE_ENV]) {
		const config = require(webpackConfigs[process.env.NODE_ENV]);

		config.resolve.alias['~'] = paths.appSrc;

		for (let i = 0; i < config.plugins.length; i++) {
			if (config.plugins[i].constructor.name !== 'SWPrecacheWebpackPlugin') {
				continue;
			}

			config.plugins.splice(i--, 1);
		}
	}
});

// add alias for jest
if (process.argv.find(arg => arg.endsWith('react-scripts/scripts/test.js'))) {
	const jest = require('jest');

	jest._run = jest.run;
	jest.run = function(args) {
		const configIndex = args.indexOf('--config') + 1;
		if (configIndex > 0) {
			const config = JSON.parse(args[configIndex]);
			config.moduleNameMapper[`^${'~'}/(.+)`] = `${paths.appSrc}/$1`;
			args[configIndex] = JSON.stringify(config);
		}

		return jest._run(args);
	};
}

// force output directory to exist
{
	const directory = path.join(__dirname, 'build');
	if (!fs.existsSync(directory)) {
		fs.mkdirSync(directory);
	}

	fs.writeFileSync(path.join(directory, '.hold'), '');
}
