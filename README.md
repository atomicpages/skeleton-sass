Skeleton Sass 2
=======================

Skeleton Sass is a "Sassification" of Dave Gamache's [Skeleton CSS](http://getskeleton.com) responsive front-end framework.

* Ability to seamlessly adjust grids by changing the value of variables
* Install Skeleton Sass with bower via `bower install skeleton-sass`
* [Live demo!](http://atomicpages.github.io/skeleton-sass/demo/index.html)
* [Extensive documentation](https://github.com/atomicpages/skeleton-sass/wiki)

### Upgrading From 1.x
Skeleton Sass 2.x is **not** backwards compatible with Skeleton Sass 1.x due to a major change in the file structure. However, we have a [wiki article](https://github.com/atomicpages/skeleton-sass/wiki/Upgrade-from-1-to-2) that explains how to upgrade from Skeleton Sass 1 to Skeleton Sass 2.

### Looking for Skeleton Sass 1?
We still have the latest stable release available to download if you wish! Head over to the [1.x-master branch](https://github.com/atomicpages/skeleton-sass/tree/1.x-master) and continue using Skeleton Sass 1. Version 1 docs can be found [here](https://github.com/atomicpages/skeleton-sass/wiki/Version-1-Docs).

## TL;DR
Skeleton Sass is a Sass port of Skeleton CSS. Skeleton Sass 2 has been trimmed down and a **ton** of new features have been added.

Note: If you are new to Sass altogether then please read our [wiki](https://github.com/atomicpages/skeleton-sass/wiki) for a more in-depth look at Skeleton Sass, information regarding installing ruby and Sass, and many other valuable resources!

If you are not new to Sass and you've tried other Skeleton CSS Sass ports and had a feeling is dissatisfaction, then look no more. Skeleton Sass is your last stop.

### Features
1. DRY
2. Customizable
3. Themeable
4. Bower ready
5. Upgradeable

### Dependencies
The only dependency for Skeleton Sass to run is Sass 3.3+. Any other libraries (e.g. Bourbon) are up to you to include if you wish.

**Warning:** The current stable release of Compass does *not* support Sass 3.3.x. Skeleton Sass uses functions that are a part of that version. There are currently alpha builds of Compass 1.x that do support Sass 3.3.x

### File Overview
* `bin` a directory that contains ruby executables
	* `setup.rb` a ruby script that aids in setting up Skeleton Sass for first time use
	* `theme_setup.rb` a ruby script that aids in setting up a custom theme for Skeleton Sass
	* `upgrade` a bash script that aids in upgrading Skeleton Sass (ruby version in the making)
	* `update.rb` a ruby script that handles updating Skeleton Sass (in progress)
* `skeleton` where all of the magic happens
	* `core`
		* `_config.scss` the default global configuration variables
		* `_dependencies.scss` the default global logic for Skeleton Sass
		* `_functions.scss` the default global functions for Skeleton Sass
		* `_mixins.scss` the default global mixins for Skeleton Sass
	* `themes` where all of the themes live
		* `demo`
			* `marrow` stores all project-level functions and mixins
				* `_mixins.scss` loads the default theme mixins and functions from `sphenoid`
			* `_base.scss` contains all of the base styles for Skeleton Sass with the exception of the reset styles
			* `_vars.scss` contains project-scoped configuration options and variables
		* `sphenoid` the main theme bundled with Skeleton Sass
			* `marrow` the directory that contains all of the project-scoped logic (e.g. functions and mixins) for your theme to work
				* `_private.scss` a file that contains all of the private logic for the public mixins/functions to work correctly for the `sphenoid` project. Feel free to name this file whatever you want in your own theme.
				* `_public.scss` a file that contains all of the public mixins/functions for the `sphenoid` theme. Feel free to name this file whatever you want in your own theme.
			* `_base.scss` contains all of the base styles for Skeleton Sass (same look as Skeleton CSS created)
			* `_vars.scss` contains project-scoped configuration options
			* `_skeleton.scss` contains all the styles to create the grid
* `_MYconfig.scss` contains all of your global configuration options that won't be overridden by an update to Skeleton Sass
* `skeleton_template.scss` contains all of the styles accumulated into a single file.

### Bower
> Bower is a package manager for the web. It offers a generic, unopinionated solution to the problem of front-end package management, while exposing the package dependency model via an API that can be consumed by a more opinionated build stack. There are no system wide dependencies, no dependencies are shared between different apps, and the dependency tree is flat &mdash; [bower.io](http://bower.io/)

Install Skeleton Sass with bower via command line:

	bower install skeleton-sass

You can also install alpha, beta, rc, and previous versions by looking at the [releases](https://github.com/atomicpages/skeleton-sass/releases) page and install with the following syntax:

	bower install skeleton-sass#[tag]
	bower install skeleton-sass#2.0.0-b2

[Learn how to set up Skeleton Sass for the first time here](https://github.com/atomicpages/skeleton-sass/wiki/Setting-up-Skeleton-Sass-for-first-time-use).

### Demo
You can see Skeleton Sass in action here: [http://atomicpages.github.io/skeleton-sass](http://atomicpages.github.io/skeleton-sass). Be sure to resize your browser window and see the responsive goodness in action!

### Documentation
Skeleton Sass is heavily documented. If you're looking for a detailed description (or just want more info) you can view all the [wiki pages here](https://github.com/atomicpages/skeleton-sass/wiki/_pages).

##### Resources
* [Installing Sass](https://github.com/atomicpages/skeleton-sass/wiki/Installing-Sass)
* [Setting up Skeleton Sass for first time use](https://github.com/atomicpages/skeleton-sass/wiki/Setting-up-Skeleton-Sass-for-first-time-use)
* [Setting up a Fluid Grid](https://github.com/atomicpages/skeleton-sass/wiki/Setting-up-a-Fluid-Grid)
* [Creating a theme](https://github.com/atomicpages/skeleton-sass/wiki/Creating-a-theme)


##### Documentation
* [Introduction to Skeleton Sass](https://github.com/atomicpages/skeleton-sass/wiki)
* [Function Documentation](https://github.com/atomicpages/skeleton-sass/wiki/Function-Documentation)
* [Variable Documentation](https://github.com/atomicpages/skeleton-sass/wiki/Variable-Documentation)
* [Mixin Documentation](https://github.com/atomicpages/skeleton-sass/wiki/Mixin-Documentation)
* [Skeleton Sass version 1 Docs](https://github.com/atomicpages/skeleton-sass/wiki/Version-1-Docs)

### License
This project is released under the [MIT license](https://github.com/atomicpages/skeleton-sass/blob/master/license.txt). Who doesn't like free code?

### Find a Bug?
Skeleton Sass is community driven. We will gladly review any issues that you find. If you wish to contribute you'll land a spot in the contributions section of this document!

##### I Found a Bug/How Can I Help?
* [Create an Issue](https://github.com/atomicpages/skeleton-sass/issues)
* [Fork &amp; Pull](https://github.com/atomicpages/skeleton-sass)

Changelog
---------
### 2.0.0

###### Removals
* Removed `$baseWidthMQ`
* Removed `bourbon` and `compass` to completely flatten the dependency tree so all you need now is Sass 3.3+

###### Fixes/Changes
* **Huge** changes to the structure of Skeleton Sass
* No more camelCase variables (based on what we've seen the convention seems to prefer hyphens in variable names).
* Squashed some old, lingering bugs with the gradient mixins
* All of the logic has been moved to the `skeleton/core` folder
* Completely removed `layout.scss` (media queries defined in the old layout file now live in `skeleton_template.scss`)
* Fixed a few linger misspellings in a few selectors
* Cleaned and optimized old mixins/functions
* `$base-width` is now calculated automatically

###### New Features
* Introduced global variables, mixins, and functions
* Introduced a new concept to Skeleton Sass called _themes_. Themes allow you to edit the base styles to create a new launching platform for your projects. When you create a theme, it won't get overridden with an update to Skeleton Sass. [Learn more about themes here](https://github.com/atomicpages/skeleton-sass/wiki/Creating-a-theme).
* Ruby scripts that help you setup Skeleton Sass for first time use, create themes, update Skleton Sass, and more
* New functions and mixins:
	* `_calcRU` is a function meant to be used in other functions. This function calculates the relative unit based on the `$base-font-size` and the `$size` passed into the function. These functions depend on `_calcRU`
		* `em`
		* `rem`
		* `percent`
		* `relative`
	* `em` converts an absolute `px` unit to an `em` unit
	* `rem` converts an absolute `px` unit to a `rem` unit
	* `percent` converts an absolute `px` unit to a `%` unit
	* `relative` converts an absolute `px` unit to the chosen relative unit as defined in `_config.scss` or your own project configuration.
		* **Note:** if more than one relative unit is select then this function will simply spit out the `px` unit. // documentation is needed
	* `@font-size` is a *mixin* that handles everything involving `font-size`. // TODO complete this
* Added a grid generator helper in [atomicpages.github.io/skeleton-sass/](http://atomicpages.github.io/skeleton-sass/)

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
