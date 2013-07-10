Skeleton SASS
=============

Skeleton SASS is a "SASSification" of Dave Gamache's [Skeleton CSS](http://getskeleton.com) responsive front-end framework.

* `.scss` and `.sass` syntaxes available
* `compass` versions available
* Ability to seamlessly adjust grids
	* Fixed Grid (default)
	* Fluid Grid
	* Adjust columns and gutters
* [Live demo!](http://atomicpages.github.io/skeleton-sass/demo.html)
* [Extensive documentation](https://github.com/atomicpages/skeleton-sass/wiki)

## TL;DR
Skeleton SASS is a SASS port of Skeleton CSS. Skeleton SASS is primarily written and debugged using the newer "SassyCSS" syntax of SASS which is seen via the `.scss` file extension. If you are familiar and/or prefer the older HAML-style syntax then fret not, we offer this syntax as well which is seen via the `.sass` file extension.

If you are new to SASS altogether then please read our [wiki](https://github.com/atomicpages/skeleton-sass/wiki) for a more in-depth look at Skeleton SASS, information regarding installing ruby and SASS, and many other valuable resources!

If you have used Skeleton CSS and you are tired of dealing with vanilla CSS, then transitioning to Skeleton SASS will require minimal effort. Since Skeleton SASS is built to duplicate the file hierarchy of Skeleton CSS. This allows the transition to be smooth and painless.

If you have tried other SASS ports of Skeleton CSS you've probably seen a ports that are built inefficiently, inaccurately, and perhaps even downright poorly. Skeleton SASS will be the last time you search for a SASS port of Skeleton CSS. With only _three_ additional files to satisfy dependencies, this will allow you to easily transition into using Skeleton SASS.  

### Features
1. Duplicates the exact file hierarchy, file structure, and file names as Skeleton CSS
2. Separation of variables, functions, and mixins to keep code clean and **DRY**
3. Choose from two different syntaxes:
  * `.sass` indented-style syntax
     * [Compass](http://compass-style.org/) port available, uses `compass/css3` library only
  * `.scss` "SassyCSS" syntax
     * [Compass](http://compass-style.org/) port available, uses `compass/css3` library only

### File Overview
* `skeleton` contains the core of the framework. This file contains the  responsive goodness among other structural styles. 
* `layout` is an _optional_ file where you can add custom styles that may extend the framework and/or custom styles for your website.
* `base` is an _optional_ file which contains the default styles for the framework.
* `_mixins` is a [partial file](http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#partials) that contains all of the mixins used in the framework. You may add your own custom mixins here as well as edit existing mixins to suit your needs. See this file for additional information.
* `_dependencies` is a [partial file](http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#partials) that contains functions and "private" mixins that aren't meant to be used directly. Avoid editing this file directly unless you know what you're doing!
* `_vars` is a [partial file](http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#partials) which contains all of the global variables for the framework. See file for additional information.

### Project Organization
Skeleton SASS is organized into **two** major categories:

1. Compass Version
2. Non-Compass Version

Both of these versions are organized the same exact way to ensure maximum usability:

* `compass` (Compass Version)
	* `sass`
		* `_dependencies.sass`
		* `_mixins.sass`
		* `_vars.sass`
		* `base.sass`
		* `layout.sass`
		*  `skeleton.sass`
	* `scss` 
		* `_dependencies.scss`
		* `_mixins.scss`
		* `_vars.scss`
		* `base.scss`
		* `layout.scss`
		*  `skeleton.scss`
* `sass` (Non-Compass Version)
	* `sass` is the same as above
	* `scss` is the same as above

### Demo
Live demo can be seen here: [http://atomicpages.github.io/skeleton-sass](http://atomicpages.github.io/skeleton-sass). Be sure to resize your browser window and see the responsive goodness in action!

Want to see customization on the default 16-column fixed-grid system? See the [demo here](http://atomicpages.github.io/skeleton-sass/demo.html)!

### Documentation
Skeleton SASS is heavily documented! If you're looking for a detailed description (or just want more info) you can checkout the [wiki pages](https://github.com/atomicpages/skeleton-sass/wiki/_pages)!

##### Resources
* [Installing SASS](https://github.com/atomicpages/skeleton-sass/wiki/Installing-SASS)
* [Installing Compass](https://github.com/atomicpages/skeleton-sass/wiki/Installing-Compass)


##### Documentation
* [Introduction to Skeleton SASS](https://github.com/atomicpages/skeleton-sass/wiki)
* [Function Documentation](https://github.com/atomicpages/skeleton-sass/wiki/Function-Documentation)
* [Variable Documentation](https://github.com/atomicpages/skeleton-sass/wiki/Variable-Documentation)
* [Mixin Documentation](https://github.com/atomicpages/skeleton-sass/wiki/Mixin-Documentation)

### License
This project is released under the [MIT license](https://github.com/atomicpages/skeleton-sass/blob/master/license.txt). Who doesn't like free code?

### Find a Bug?
Skeleton SASS is community driven. We will gladly reviw any issues that you find. If you wish to contribute, then you will land a spot in the contributions section of this document!

##### Found a Bug/How Can I Help?
* [Create a new issue on the github page!](https://github.com/atomicpages/skeleton-sass/issues)
* [Fork me if you want to help!](https://github.com/atomicpages/skeleton-sass)

Changelog
---------
### 1.4.0
* Moved contents from `_functions` to a new partial called `_dependencies`
* Moved all of the "private" mixins to `_dependencies` partial since these are core mixins and functions
* Finally added offset styles to mobile grids -- sorry! I realize that was a _major_ piece that was missing
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

Authors
-------
* [Dennis Thompson](http://dennis-thompson.com/)
* [AtomicPages LLC](http://www.atomicpages.net/)
