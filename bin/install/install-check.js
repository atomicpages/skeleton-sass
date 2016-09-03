/**
 * A simple script to determine where normalize.scss lives. We look for two cases:
 *  1. my_bower/skeleton-sass/dependencies/normalize.scss
 *  2. my_bower/normalize.scss
 * Why is this needed? Sass provides no means for us to reluctantly import
 * files meaning we can't use `!optional`
 * There are ways to circumvent this by creating a new ruby module for Sass,
 * but that doesn't port over to other compilers like libsass or phpsass.
 *
 * What this script does:
 * This script validates the existence of normalize.scss either in skeleton sass
 * or in a parent bower folder. This script will find a replace the instances where
 * normalize.scss is imported in skeleton sass so you're ready to use skeleton
 * out of the box.
 *
 * Note: normalize.scss is assumed to be in a parent bower directory. This script only
 * fixes the import reference if `bower install` is run within skeleton sass.
 */

const fs = require('fs');
const path = require('path');

const MODULE_NAME = "skeleton-sass";
const SEARCH_MODULE = "normalize.scss";
const SKELETON_DEPS_DIRNAME = "dependencies";

(function () {
	'use strict';

	let segments = __dirname.split(path.sep);

	let basePath = segments.slice(0, segments.indexOf(MODULE_NAME)).join(path.sep);
	let bowerPath = basePath + path.join(path.sep, SEARCH_MODULE, path.sep);
	let internalPath = basePath + path.join(path.sep, MODULE_NAME, SKELETON_DEPS_DIRNAME, SEARCH_MODULE, path.sep);
	let normalizeImportFile = basePath + path.join(path.sep, MODULE_NAME, 'skeleton', 'themes', 'fresh', '_vars.scss');

	fs.access(bowerPath, fs.F_OK, (bowerError) => {
		if(bowerError) {
			console.log(bowerPath + ' not found, checking ' + MODULE_NAME + ' dependencies');
			fs.access(internalPath, fs.R_OK, (internalDepsError) => {
				if(internalDepsError) {
					console.error('Missing core dependency for Skeleton Sass: ' + SEARCH_MODULE);
				} else {
					fs.readFile(normalizeImportFile, 'utf-8', (err, data) => {
						if(err) {
							throw err;
						}

						let result = data.replace(/@import.+normalize\.scss.+;/, '@import' +
							' "../../../dependencies/normalize.scss/sass/normalize";');

						fs.writeFile(normalizeImportFile, result, 'utf-8', (fwErr) => {
							if(fwErr) {
								throw fwErr;
							}
						});
					});
				}
			});
		}
	});

}());
