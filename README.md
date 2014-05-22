Skeleton SASS 2&beta;
=======================

Skeleton SASS is a "SASSification" of Dave Gamache's [Skeleton CSS](http://getskeleton.com) responsive front-end framework.

* `compass` and `bourbon` versions available
* Ability to seamlessly adjust grids
	* Fixed Grid (default)
	* Fluid Grid
	* Adjust columns and gutters
* Install Skeleton SASS with bower! `bower install skeleton-sass`
* [Live demo!](http://atomicpages.github.io/skeleton-sass/demo.html)
* [Extensive documentation](https://github.com/atomicpages/skeleton-sass/wiki)

## TL;DR
Skeleton SASS is a SASS port of Skeleton CSS. With the new `2.x` series, Skeleton Sass has been trimmed to reduce overall size of the framework by 60%!

Note: If you are new to SASS altogether then please read our [wiki](https://github.com/atomicpages/skeleton-sass/wiki) for a more in-depth look at Skeleton SASS, information regarding installing ruby and SASS, and many other valuable resources!

// TODO add wiki entry for this...
If you have used Skeleton CSS and you are tired of dealing with vanilla CSS, then transitioning to Skeleton SASS will require minimal effort. Skeleton Sass trimmed the extra fat off of the `1.x` series by accumulating everything into a single file: `skeleton.css`. Simply turn off the file inclusions you don't wish to have.

If you have tried other SASS ports of Skeleton CSS you've probably seen a ports that are built inefficiently, inaccurately, and perhaps even downright poorly. Skeleton SASS will be the last time you search for a SASS port of Skeleton CSS. With only _three_ additional files to satisfy dependencies, this will allow you to easily transition into using Skeleton SASS. Continue reading about each of the files that are used by Skeleton SASS.

### Features
1. Separation of variables, functions, and mixins to keep code clean and **DRY**
2. Compass and Non-Compass versions available
3. Install Skeleton SASS with bower

### Project Organization
Skeleton SASS is organized into **three** major categories:

1. [Compass Version](http://compass-style.org/)
	* Requires Sass 3.2.x
	* Compass 0.12.6
		* **Note:** At the time of writing, Compass 0.12.x does *not* support Sass 3.3.x. Therefore, the dependency for Compass is Sass 3.2.x. There are alpha builds of Compass 1.x which *do* support Sass 3.3.x. However, we will wait until a stable release is out before making it a requirement.
2. [Bourbon Version](http://bourbon.io/)
	* Requires Sass 3.3.x
	* Requires Bourbon 4.x
3. Vanilla Sass Version
	* Requires Sass 3.3.x

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
	* `sphenoid`
		* `marrow` the directory that contains all of the project-scoped logic (e.g. functions and mixins) for your theme to work
			* `_private.scss` a file that contains all of the private logic for the public mixins/functions to work correctly for the `sphenoid` project. Feel free to name this file whatever you want in your own theme.
			* `_public.scss` a file that contains all of the public mixins/functions for the `sphenoid` theme. Feel free to name this file whatever you want in your own theme.
		* `_base.scss` contains all of the origion base styles for Skeleton Sass (nothing has changed visually)
		* `_vars.scss` contains project-scoped configuration options
		* `_skeleton.scss` contains all the styles to create the grid like we've used before &ndash; nothing has changed
* `_MYconfig.scss`
* `skeleton_template.scss`

### Bower
> Bower is a package manager for the web. It offers a generic, unopinionated solution to the problem of front-end package management, while exposing the package dependency model via an API that can be consumed by a more opinionated build stack. There are no system wide dependencies, no dependencies are shared between different apps, and the dependency tree is flat &mdash; [bower.io](http://bower.io/)

Install Skeleton Sass with bower via command line:

	bower install skeleton-sass

You can also install alpha, beta, rc, and previous versions by looking at the [releases](https://github.com/atomicpages/skeleton-sass/releases) page and install with the following syntax:

	bower install skeleton-sass#[tag]
	bower install skeleton-sass#2.0.0-a4

### Demo
Live demo can be seen here: [http://atomicpages.github.io/skeleton-sass](http://atomicpages.github.io/skeleton-sass). Be sure to resize your browser window and see the responsive goodness in action!

### Documentation
Skeleton SASS is heavily documented! If you're looking for a detailed description (or just want more info) you can checkout the [wiki pages](https://github.com/atomicpages/skeleton-sass/wiki/_pages)!

##### Resources
* [Installing SASS](https://github.com/atomicpages/skeleton-sass/wiki/Installing-SASS)
* [Installing Compass](https://github.com/atomicpages/skeleton-sass/wiki/Installing-Compass)
* [Setting up a Fluid Grid](https://github.com/atomicpages/skeleton-sass/wiki/Setting-up-a-Fluid-Grid)


##### Documentation
* [Introduction to Skeleton SASS](https://github.com/atomicpages/skeleton-sass/wiki)
* [Function Documentation](https://github.com/atomicpages/skeleton-sass/wiki/Function-Documentation)
* [Variable Documentation](https://github.com/atomicpages/skeleton-sass/wiki/Variable-Documentation)
* [Mixin Documentation](https://github.com/atomicpages/skeleton-sass/wiki/Mixin-Documentation)

### License
This project is released under the [MIT license](https://github.com/atomicpages/skeleton-sass/blob/master/license.txt). Who doesn't like free code?

### Find a Bug?
Skeleton SASS is community driven. We will gladly review any issues that you find. If you wish to contribute you'll land a spot in the contributions section of this document!

##### I Found a Bug/How Can I Help?
* [Create an Issue](https://github.com/atomicpages/skeleton-sass/issues)
* [Fork &amp; Pull](https://github.com/atomicpages/skeleton-sass)

Changelog
---------
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
