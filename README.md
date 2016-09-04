Skeleton Sass 3
===============

Skeleton Sass is a highly modular version of [Skeleton CSS](http://getskeleton.com).

### Key Features
* Ability to seamlessly adjust grids by changing the value of variables
* Themes
* Easy-to-use mixins and functions
* Install Skeleton Sass with bower or npm!
* [Live demo!](http://atomicpages.github.io/skeleton-sass/demo/index.html)
* [Heavily documented](https://github.com/atomicpages/skeleton-sass/wiki)

### Dependencies
* Sass 3.3+

#### Does this work with other Sass compilers?
Yes! Skeleton Sass has been tested with the following compilers and libsass wrappers

* [Sass](http://sass-lang.com/) 3.3+
* [libsass](https://github.com/sass/libsass) 3.2+
* [Wellington](http://getwt.io/) 0.9.3+
* [node-sass](https://www.npmjs.com/package/node-sass) 3.5+

#### Upgrading From 2.x
Skeleton Sass 3 is decently compatible to the 2.x series, but requires some manual labor (i.e. copy and pasting multiple files to the 2.x series).

#### Upgrading From 1.x
Skeleton Sass 2 is **not** backwards compatible with Skeleton Sass 1.x due to a major change in the file structure. However, we have a [wiki article](https://github.com/atomicpages/skeleton-sass/wiki/Upgrade-from-1-to-2) that explains how to upgrade from Skeleton Sass 1 to Skeleton Sass 2.

#### Looking for older versions of Skeleton Sass?
* Skeleton Sass 2
    * [Verion 2 branch](https://github.com/atomicpages/skeleton-sass/tree/master/2.0)
    * [Version 2 docs](https://github.com/atomicpages/skeleton-sass/wiki/Version-2-Docs)
* Skeleton Sass
    * [Version 1 branch](https://github.com/atomicpages/skeleton-sass/tree/master/1.0)
    * [Version 1 docs](https://github.com/atomicpages/skeleton-sass/wiki/Version-1-Docs)

#### New to Sass?
Check out our [wiki](https://github.com/atomicpages/skeleton-sass/wiki) for a more in-depth look at Skeleton Sass, information regarding installing ruby and Sass, and other valuable resources!

## TL;DR
Skeleton Sass is a Sass port of Skeleton CSS. Skeleton Sass 3 decouples itself from your project so you can consume it without worrying if your package manager will clobber all of your hard work.

### Features
1. DRY
2. Customizable
3. Themeable

**Warning:** The current stable release of Compass does *not* support Sass 3.3.x. Skeleton Sass uses functions that are a part of that version. There are currently alpha builds of Compass 1.x that do support Sass 3.3.x

### File Overview
* `skeleton` where all of the magic happens
	* `core`
		* `_config.scss` the default global configuration variables
		* `_dependencies.scss` the default global logic for Skeleton Sass
		* `_functions.scss` the default global functions for Skeleton Sass
		* `_mixins.scss` the default global mixins for Skeleton Sass
	* `themes` where all of the themes live
		* `demo` &amp; `fresh`
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

~~~bash
bower install skeleton-sass --save
~~~

You can also install alpha, beta, release candidate, and previous versions by looking at the [releases](https://github.com/atomicpages/skeleton-sass/releases) page and install with the following syntax:

~~~bash
bower install skeleton-sass#[tag]
bower install skeleton-sass#2.0.0-b2
~~~

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
### 3.0.0
* Adding `package.json` for npm support
* Converting all core files to partials for better support for installing via bower and npm

###### Removals
* `bin/`

### 2.5.4
* Adding `normalize.scss` as a dependency
* Merged master in development for version bump
* Added scripts to check and automagically fix import paths

### 2.5.3
* Comment cleanup
* Rearranging of dependencies
* Update to year in license and other copyright headers
* Change `Dir.exists?` to `Dir.exist?` to squash ruby 2.3.x deprecation notice
* Manual bump to normalize.css 4.2.0

### 2.5.2
* Fixes [issue #22](https://github.com/atomicpages/skeleton-sass/issues/22)

### 2.5.1
* Fixes [issue #16](https://github.com/atomicpages/skeleton-sass/issues/16)

### 2.5.0
* Addition of a new default theme called **fresh**
	* Removal of old reset CSS in favor of [normalize.css](http://necolas.github.io/normalize.css/)
		* Although, you can always use `reset.css` if you wish since it will still be part of the theme mixins!
	* Adjustment of media queries
		* **Note:** these media queries probably won't be perfect for _every_ project. Let the content dictate the media queries!
	* Fluid grid is now the default with a fixed width set on the `body` element (you can change this behavior, of course)
		* **Note:** the fixed grid will still be there! Difference is that the fluid grid will be the new default with the new theme only. You can still use the old `sphenoid` theme for the pre 2.5 setup (e.g. fixed grid, old skeleton.css theme, `reset.css`, etc.).
	* New default font: [Raleway](http://www.google.com/fonts/specimen/Raleway)
* Improvements with scripts and better compatibility with Ruby 2.x and better backward compatibility with Ruby 1.8+

###### Removals
* `$colWidth` variable in the `@grid` mixin
* Removed some sloppy code in the `@_offsets` mixin

###### Fixes/Changes
* Plural `column` and `columns` for `one-third`, `two-third`, and `full-width`

###### New Features/Themes
* `one-half` selector to grid
* `$new` parameter to `@_fluidGrid` and `@_fixedGrid`. This makes some basic changes to the grid for the new Skeleton CSS format
* Default fixed/fluid combo grid for `fresh` theme
	* Updated offsets for the new fixed/fluid grid combo
* Added new `offset-by-one-third`, `.offset-by-two-thirds`, and `.offset-by-one-half` selectors for new grid

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
* [thomasvandongen](https://github.com/thomasvandongen
	* Pull request [0af774f](https://github.com/atomicpages/skeleton-sass/pull/20)
		* **Note:** as a result of his work we can finally close [issue #16](https://github.com/atomicpages/skeleton-sass/issues/16)
* [seshaljain](https://github.com/seshaljain)
	* [Issue #22](https://github.com/atomicpages/skeleton-sass/issues/22)
