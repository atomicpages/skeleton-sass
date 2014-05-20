Skeleton SASS 2 &alpha;
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
* `skeleton_template.scss` houses **all** custom code.
	* **Note:** this file name is meant to be changed. // add link to how to
* `_MYconfig.scss` houses all of your global configuration (e.g. mixins, functions, variables, etc.)
	* **Note:** this file name is meant to be changed. // add link to how to
* `core`
	* `_config.scss` houses all of the global configuration and variable options. Any change here will alter all flavors
	* `_dependencies.scss` houses all of the logic behind the front-facing mixins (e.g. grid generation, conversion, etc.)
	* `_mixins.scss` houses all of the global mixins that are shared between all flavors
	* `_MYconfig.scss` houses all of your custom logic, functions, mixins, variables, etc. Simply change to another name (i.e. _projectname_config.sass) and import in `_config.scss`.
	* `flavors`
		* `_bourbon.scss` loads all the necessary files for the bourbon flavor to function
		* `_compass.scss` loads all the necessary files for the compass flavor to function
		* `_sass.scss` loads all the necessary files for the sass flavor to function
* `flavors`
	* `bourbon`
		* `bourbon` houses the bourbon framework
		* `deps` houses flavor-specific functionality
		* `_base.scss` handles all of the base styles for skeleton
		* `_bourbon.scss` houses all of the imports for bourbon
		* `_skeleton.scss` houses the skeleton grid
		* `_vars.scss` houses all flavor-specific variables
	* `compass`
		* `_base.scss` handles all of the base styles for skeleton
		* `_skeleton.scss` houses the skeleton grid
		* `_vars.scss` houses all flavor-specific variables
	* `sass`
		* `deps` houses flavor-specific functionality
		* `dev` houses all development files for custom functions and mixins not yet released
		* `_base.scss` handles all of the base styles for skeleton
		* `_skeleton.scss` houses the skeleton grid
		* `_vars.scss` houses all flavor-specific variables

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
### 2.0.0 &alpha;
* **Huge** changes to the structure of Skeleton Sass
* All of the different implementations of Skeleton Sass have been moved to the `flavors` folder
* All core/shared files have been moved to the `core` folder.
* Ability to choose between bourbon, compass, and vanilla sass by changing the preferred flavor in `skeleton.scss`
* Added shell scripts to aid in setting up and upgrading Skeleton Sass for you *nix/OS X users who use command line.
	* Batch scripts for Windows users coming soon
	* Manual configuration documentation coming soon
* Completely removed `layout.scss` and added predefined media queries to `skeleton_template.scss`


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
