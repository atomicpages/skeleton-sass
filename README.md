<<<<<<< HEAD
Skeleton SASS
=============

Skeleton SASS is a "SASSification" of Dave Gamache's [Skeleton CSS](http://getskeleton.com) responsive front-end framework.

* `.scss` and `.sass` syntaxes available
* `compass` versions available
* Ability to seamlessly adjust grids
	* Fixed Grid (default)
	* Fluid Grid
	* Adjust columns and gutters
* Install Skeleton SASS with bower! `bower install skeleton-sass`
=======
Skeleton Sass 2&beta;
=======================

Skeleton Sass is a "Sassification" of Dave Gamache's [Skeleton CSS](http://getskeleton.com) responsive front-end framework.

* Ability to seamlessly adjust grids by changing the value of variables and compiling &ndash; so easy!
* Install Skeleton Sass with bower! `bower install skeleton-sass`
>>>>>>> 2.x
* [Live demo!](http://atomicpages.github.io/skeleton-sass/demo.html)
* [Extensive documentation](https://github.com/atomicpages/skeleton-sass/wiki)

## TL;DR
<<<<<<< HEAD
Skeleton SASS is a SASS port of Skeleton CSS. Skeleton SASS is primarily written and debugged using the newer "SassyCSS" syntax of SASS which is seen via the `.scss` file extension. If you are familiar and/or prefer the older HAML-style syntax then fret not, we offer this syntax as well which is seen via the `.sass` file extension.

If you are new to SASS altogether then please read our [wiki](https://github.com/atomicpages/skeleton-sass/wiki) for a more in-depth look at Skeleton SASS, information regarding installing ruby and SASS, and many other valuable resources!

If you have used Skeleton CSS and you are tired of dealing with vanilla CSS, then transitioning to Skeleton SASS will require minimal effort. Since Skeleton SASS is built to duplicate the file hierarchy of Skeleton CSS. This allows the transition to be smooth and painless.

If you have tried other SASS ports of Skeleton CSS you've probably seen a ports that are built inefficiently, inaccurately, and perhaps even downright poorly. Skeleton SASS will be the last time you search for a SASS port of Skeleton CSS. With only _three_ additional files to satisfy dependencies, this will allow you to easily transition into using Skeleton SASS. Continue reading about each of the files that are used by Skeleton SASS.

### Features
1. Duplicates the exact file hierarchy, file structure, and file names as Skeleton CSS
2. Separation of variables, functions, and mixins to keep code clean and **DRY**
3. Compass and Non-Compass versions available
4. `.sass` and `.scss` versions available
5. Install Skeleton SASS with bower front-end package manager

### Project Organization
Skeleton SASS is organized into **two** major categories:

1. [Compass Version](http://compass-style.org/)
2. Non-Compass Version

Both of these versions are organized the same exact way to ensure maximum usability:

* `bourbon`
	* `core`
		* Bourbon source files
	* `_loader.scss`
	* `_dependencies.scss`
	* `_mixins.scss`
	* `_functions.scss`
	* `_vars.scss`
	* `_config.scss`
	* `base.scss`
	* `layout.scss`
	*  `skeleton.scss`
* `compass` (Compass Version)
	* `scss`
		* `_dependencies.scss`
		* `_mixins.scss`
		* `_functions.scss`
		* `_vars.scss`
		* * `_config.scss`
		* `base.scss`
		* `layout.scss`
		*  `skeleton.scss`
* `sass` (Non-Compass Version)
	* `scss` has the same files as `compass`

### File Overview
* `skeleton` contains the core of the framework. This file contains the  responsive goodness among other structural styles and is **required** for the framework to be used.
* `layout` is an _optional_ file where you can add custom styles that may extend the framework and/or custom styles for your website. You may discard this file if you wish.
* `base` is an _optional_ file which contains the default styles for the framework. You may discard this file if you wish.
* `_mixins` is a [partial file](http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#partials) that contains all of the high-level core mixins used in the framework which means this file is **required**. Additionally, you may add your own custom mixins at the top of this file as well as edit existing mixins to suit your needs. See this file for additional information.
* `_dependencies` is a [partial file](http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#partials) that contains core functions and "private" mixins that aren't meant to be used directly. Avoid editing this file directly unless you know what you're doing! The framework **will not work** if you delete this file.
* `_vars` is a [partial file](http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#partials) which is **required** because it contains all of the global variables for the framework. See file for additional information.
* `_functions` is a [partial file](http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#partials) where you may add custom functions. This file is **not required** by any means and may be discarded if you wish.
* `_config.scss` is a [partial file](http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#partials) that houses all **local** configuration information that you do not wish to be overridden by bower. Git users be warned as if you are doing a fresh pull, git will still *override* this file!

### Bower
> Bower is a package manager for the web. It offers a generic, unopinionated solution to the problem of front-end package management, while exposing the package dependency model via an API that can be consumed by a more opinionated build stack. There are no system wide dependencies, no dependencies are shared between different apps, and the dependency tree is flat &mdash; bower.io

For more info on bower, checkout [bower.io](http://bower.io/).

Skeleton Sass is now available on Bower because we want to make your life easier. You can now add Skeleton Sass to any project easily by issuing `bower install skeleton-sass`.
=======
Skeleton Sass is a Sass port of Skeleton CSS. With the new `2.x` series, Skeleton Sass has been trimmed down and a **ton** of new features have been added.

Note: If you are new to Sass altogether then please read our [wiki](https://github.com/atomicpages/skeleton-sass/wiki) for a more in-depth look at Skeleton Sass, information regarding installing ruby and Sass, and many other valuable resources!

// TODO add wiki entry for this...
If you have used Skeleton CSS and you are tired of dealing with vanilla CSS, then transitioning to Skeleton Sass will require minimal effort.

If you've tried other Skeleton CSS ports and had a feeling is dissatisfaction, then look no more. Skeleton Sass is your last stop.

### Upgrading From 1.x
Skeleton Sass 2.x is **not** backwards compatible with Skeleton Sass 1.x due to a major change in the file structure. However, there is a [wiki article](#) that has a detailed explanation for aid in upgrading from Skeleton Sass 1.x to 2.x

### Features
1. DRY
2. Customizable
3. Themeable
4. Bower ready
5. Upgradeable

### Dependencies
The only dependency Skeleton Sass is Sass 3.3.x. Any other libraries like Bourbon, Compass, etc. are up to you to add your installation.

**Warning:** The current stable release of Compass does *not* support Sass 3.3.x. Skeleton Sass uses functions that are a part of that version. There are currently alpha builds of Compass 1.x that do support Sass 3.3.x

### File Overview
* `bin` a directory that contains various executables
	* `setup.sh` a simple bash script that aids in setting up Skeleton Sass for first time use
	* `theme_setup.sh` a simple bash script that aids in setting up a custom theme for Skeleton Sass
	* `upgrade.sh` a simple bash script that aids in upgrading Skeleton Sass
* `core`
	* `bones` the directory where theme loaders are located
		* `_sphenoid.scss` the default theme
	* `_config.scss` the default global configuration variables
	* `_dependencies.scss` the default global logic for Skeleton Sass
	* `_mixins.scss` the default global mixins for Skeleton Sass
* `skeleton` where the magic happens
	* `demo`
		* `_base.scss` contains all of the base styles for Skeleton Sass with the exception of the reset styles
		* `_bourbon.scss` contains information to import bourbon if it's used
		* `_vars.scss` contains project-scoped configuration options
	* `sphenoid` the main theme bundled with Skeleton Sass
		* `marrow` the directory that contains all of the project-scoped logic (e.g. functions and mixins) for your theme to work
			* `_private.scss` a file that contains all of the private logic for the public mixins/functions to work correctly for the `sphenoid` project. Feel free to name this file whatever you want in your own theme.
			* `_public.scss` a file that contains all of the public mixins/functions for the `sphenoid` theme. Feel free to name this file whatever you want in your own theme.
		* `_base.scss` contains all of the origion base styles for Skeleton Sass (nothing has changed visually)
		* `_vars.scss` contains project-scoped configuration options
		* `_skeleton.scss` contains all the styles to create the grid like we've used before &ndash; nothing has changed
* `_MYconfig.scss` contains all of your global configuration options that won't be overridden by an update to Skeleton Sass. Just be sure to rename the file before using and adding it as an import to `core/_config.scss`! // WIKI entry needed
* `skeleton_template.scss` contains all of the styles accumulated into a single file. Be sure to rename this file to skeleton.scss before compiling!

### Bower
> Bower is a package manager for the web. It offers a generic, unopinionated solution to the problem of front-end package management, while exposing the package dependency model via an API that can be consumed by a more opinionated build stack. There are no system wide dependencies, no dependencies are shared between different apps, and the dependency tree is flat &mdash; [bower.io](http://bower.io/)

Install Skeleton Sass with bower via command line:

	bower install skeleton-sass

You can also install alpha, beta, rc, and previous versions by looking at the [releases](https://github.com/atomicpages/skeleton-sass/releases) page and install with the following syntax:

	bower install skeleton-sass#[tag]
	bower install skeleton-sass#2.0.0-b2
>>>>>>> 2.x

### Demo
Live demo can be seen here: [http://atomicpages.github.io/skeleton-sass](http://atomicpages.github.io/skeleton-sass). Be sure to resize your browser window and see the responsive goodness in action!

<<<<<<< HEAD
Want to see spin on the default 16-column fixed-grid system? See the [demo here](http://atomicpages.github.io/skeleton-sass/demo.html)!

### Documentation
Skeleton SASS is heavily documented! If you're looking for a detailed description (or just want more info) you can checkout the [wiki pages](https://github.com/atomicpages/skeleton-sass/wiki/_pages)!

##### Resources
* [Installing SASS](https://github.com/atomicpages/skeleton-sass/wiki/Installing-SASS)
=======
### Documentation
Skeleton Sass is heavily documented! If you're looking for a detailed description (or just want more info) you can checkout the [wiki pages](https://github.com/atomicpages/skeleton-sass/wiki/_pages)!

##### Resources
* [Installing Sass](https://github.com/atomicpages/skeleton-sass/wiki/Installing-Sass)
>>>>>>> 2.x
* [Installing Compass](https://github.com/atomicpages/skeleton-sass/wiki/Installing-Compass)
* [Setting up a Fluid Grid](https://github.com/atomicpages/skeleton-sass/wiki/Setting-up-a-Fluid-Grid)


##### Documentation
<<<<<<< HEAD
* [Introduction to Skeleton SASS](https://github.com/atomicpages/skeleton-sass/wiki)
=======
* [Introduction to Skeleton Sass](https://github.com/atomicpages/skeleton-sass/wiki)
>>>>>>> 2.x
* [Function Documentation](https://github.com/atomicpages/skeleton-sass/wiki/Function-Documentation)
* [Variable Documentation](https://github.com/atomicpages/skeleton-sass/wiki/Variable-Documentation)
* [Mixin Documentation](https://github.com/atomicpages/skeleton-sass/wiki/Mixin-Documentation)

### License
This project is released under the [MIT license](https://github.com/atomicpages/skeleton-sass/blob/master/license.txt). Who doesn't like free code?

### Find a Bug?
<<<<<<< HEAD
Skeleton SASS is community driven. We will gladly review any issues that you find. If you wish to contribute you'll land a spot in the contributions section of this document!
=======
Skeleton Sass is community driven. We will gladly review any issues that you find. If you wish to contribute you'll land a spot in the contributions section of this document!
>>>>>>> 2.x

##### I Found a Bug/How Can I Help?
* [Create an Issue](https://github.com/atomicpages/skeleton-sass/issues)
* [Fork &amp; Pull](https://github.com/atomicpages/skeleton-sass)

Changelog
---------
<<<<<<< HEAD
### 1.6.3
* Removed local configuration from automatically importing. Now all you need to to is uncomment the line in order for the import to work [issue #13](https://github.com/atomicpages/skeleton-sass/issues/13). [See the wiki](https://github.com/atomicpages/skeleton-sass/wiki/Setting-up-Skeleton-Sass-with-Bower) for information regarding preserving changes when using bower
* Added releases so everyone can install legacy versions of Skeleton Sass via bower starting with this version!

### 1.6.2
* Added local configuration file that won't be overridden when updating with bower.
* Updated `bower.json` to exclude `demo` and development files from being installed with bower

### 1.6.1
* Fixed missing `one-third` and `two-thirds` selectors in fluid grid
* Updated `12`, `20`, and `fluid` CSS files in `css` directory

### 1.6.0
* Added support for [Bourbon](http://bourbon.io/)
* Revised `_fluidGrid` mixin to utilize Sass functions
* Resolved spelling errors in `numToString` function
* Revised `_fixedGrid` mixin
* Resolved [Issue #11](https://github.com/atomicpages/skeleton-sass/issues/11)
* Cleaned up fluid grids for tablets by removing redundant code
* Fixed `1.5.0` documentation in the README
* Finally updated the bower version number so bower users can actually upgrade
* Removed `.sass` files, use `sass-convert -R my_css_dir --from css --to scss`

### 1.5.3
* Added the following HTML5 `input` types to inherit default styles in `base.css`
	* `date`
	* `datetime`
	* `datetime-local`
	* `week`
	* `number`
	* `month`
	* `time`
* Updated `test.html` to accommodate these updated types as well as these input types:
	* `color`

### 1.5.2
* Fixed quote issue on `transitionn` mixin for non-compass version

### 1.5.1
* Resolved [issue #9](https://github.com/atomicpages/skeleton-sass/issues/9)

### 1.5.0
* Commit fixes [issue #7](https://github.com/atomicpages/skeleton-sass/issues/7). You no longer need to manually calculate $colWidth in the `grid` mixin!
* Resolved spelling error: `.two-third.column` changed to `.two-thirds.column`


### 1.4.2
* Added vanilla CSS component to Skeleton SASS. You can now have CSS right out of the box without having to compile any sass code!
* Added additional files and folders for bower to ignore

### 1.4.1
* Added Skeleton SASS to bower! You can now drop Skeleton SASS into your projects using `bower install skeleton-sass`

### 1.4.0
* Moved contents from `_functions` to a new partial called `_dependencies`
* Moved all of the "private" mixins to `_dependencies` partial since these are core mixins and functions
* Finally added offset styles to mobile grids &ndash; I realize that was a _major_ piece that was missing
* Added `mobileGrid` mixin
* Added the following mixins to the non-compass version:
	*  `single-transition`
	*  `transition`
	*  `reset-font`
	*  `reset-focus`
	*  `reset-list-style`
	*  `reset-table`
	*  `reset-table-cell`
	*  `reset-quotation`
	*  `reset-image-anchor-border`
	*  `reset-html5`
	*  `global-reset`
	*  `nested-reset`
* Non-compass version gradient support is available but these mixins still need multi-stop support
	* `filter-gradient` - this is for IE only and works 100%
	* `linear-gradient` - produces a linear gradient in all directions
	* `radial-gradient` - produces a radial gradient
* Removed redundant code for `.container .columns` margins
* Fixed offset calculation issue for fluid grid
* Added support for grouped selectors on `mobileGrid`

### 1.3.4
* Added sample outline of a web page to show a more realistic example of how the page will scale

### 1.3.3
* Oops! The demo has now been fixed!

### 1.3.2
* Updated README file and fixed demo files so it actually works this time ;)

### 1.3.1
* Removed unnecessary if statement at the top of the `numToString` function

### 1.3
* Greatly improved `int` to `string` conversion by using something other than a million if-else statements

### 1.2.3
* Cleaned up `.sass` files by using tabs instead of default 2 spaces
* Fixed gutter calculation on fixed grid and in the skeleton file
* Used boolean in `_fluidGrid` to prevent `sass-convert` from stripping `null` value

### 1.2.2
* Added support for fluid grid generation based on column number
* Cleaned up headers
* Housekeeping in `_mixins` file
* Fixed issue in `.sass` files. `null` type being stripped when using `sass-convert --from scss --to sass`

### 1.2.1
* Fixed Duplicate `.container` on offsets

### 1.2
* Addition of **fluid** grid :)
* Complete restructure of `mixins` file and grid generation
* Changed name of `makeGrid` mixin to `grid`
* Changed core variable names. See `vars` for more information
* Cleaned up headers across the board
* Removed unnecessary and unused functions
* Separated roles in `mixins` file
* Cleaned up comments in all files
* and more...

### 1.1
* Update to several functions and mixins.
* Addition of new variables
* Several fixes for non-compass version
* Fixing of `.sass` files
=======
### 2.0.0&beta;
* **Huge** changes to the structure of Skeleton Sass
* Added **_themes_**! All themes are located in `skeleton/` with the default theme called `sphenoid`
	* Themes allow you to edit the base styles by default to create a differently styles foundation for your project that doesn't get wiped out when there's an update to Skeleton Sass.
* All core/shared files have been moved to the `core` folder.
* Added shell scripts to aid in setting up Skeleton Sass, upgrading Skeleton Sass (removing unneeded files), and creating a theme for you *nix/OS X users who use command line.
	* Scripts for Windows users coming soon
	* Manual configuration documentation coming soon
* Completely removed `layout.scss` and added predefined media queries to `skeleton_template.scss`
* New functions and mixins:
	* `_calcRU` is a function meant to be used in other functions. This function calculates the relative unit based on the `$base-font-size` and the `$size` passed into the function. These functions depend on `_calcRU`
		* `em`
		* `rem`
		* `percent`
		* `relative`
	* `em` converts an absolute `px` unit to an `em` unit
	* `rem` converts an absolute `px` unit to a `rem` unit
	* `percent` converts an absolute `px` unit to a `%` unit
	* `relative` converts an absolute `px` unit to the chosen relative unit as defined in `_config.scss` or your hown project configuration.
		* **Note:** if more than one relative unit is select then this function will simply spit out the `px` unit. // documentation is needed
	* `@font-size` is a *mixin* that handles everything involving `font-size`. // TODO complete this
* Removed `bourbon` and `compass` completely to flatten the dependency tree. At the core, Skeleton Sass never really needed either of these and it was mostly for you. If you wish to use any other frameworks, just add it to a dependency in your `skeleton.scss` file in the project root. Much simpler!
* No more camelCase variables. Based on what I've seen the convention seems to be to use hyphens in variable names.
* A better naming convention has been created that aligns with the human skeleton
>>>>>>> 2.x

Authors
-------
* [Dennis Thompson](http://dennis-thompson.com/)
* [AtomicPages LLC](http://www.atomicpages.net/)

Contributors
------------
* Jackson Hines
* [robertosobachi](https://github.com/robertosobachi)
	* [Issue #6](https://github.com/atomicpages/skeleton-sass/issues/6)
	* [Pull #10](https://github.com/atomicpages/skeleton-sass/pull/10)
* [vephinx](https://github.com/vephinx):
	* [Issue #7](https://github.com/atomicpages/skeleton-sass/issues/7)
	* [Issue #9](https://github.com/atomicpages/skeleton-sass/issues/9)
