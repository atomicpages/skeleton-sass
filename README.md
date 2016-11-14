Skeleton Sass 3
===============

Skeleton Sass is a highly modular version of [Skeleton CSS](http://getskeleton.com).

### Key Features
* Ability to seamlessly adjust grids by changing the value of variables
* Themes
* Easy-to-use mixins and functions
* Install Skeleton Sass with bower or npm! No more clunky scripts!
* [Live demo!](http://atomicpages.github.io/skeleton-sass/demo/index.html)
* [Heavily documented](https://github.com/atomicpages/skeleton-sass/wiki)

### Dependencies
* Sass 3.3+
* [normalize-scss](https://github.com/JohnAlbin/normalize-scss)

#### Does this work with other Sass compilers?
Yes! Skeleton Sass 3 has been tested with the following compilers and libsass wrappers:

* [Sass](http://sass-lang.com/) 3.3+
* [libsass](https://github.com/sass/libsass) 3.2+
* [Wellington](http://getwt.io/) 0.9.3+
* [node-sass](https://www.npmjs.com/package/node-sass) 3.5+

### How do I Consume Skeleton Sass?
If you're using a `bower`, `npm`, or `yarn` then install via:

~~~bash
bower i --save-dev skeleton-sass
bower i --save-dev skeleton-sass-official
npm i --save-dev skeleton-sass-official
yarn install skeleton-sass-official
~~~

Optionally, if you are not using one of these package managers, then you can clone the repo and put in a special directory with the rest of your dependencies.

From here, minimal stitching is required to get Skeleton Sass 3 integrated into your project! At a minimum, you need to create a single file: `skeleton.scss`

From \*nix:

~~~bash
cd path/to/sass/in/project
touch skeleton.scss
~~~

From Windows:

~~~batch
cd path/to/sass/in/project
echo. 2>skeleton.scss
~~~

Inside of `skeleton.scss` we need to add our components:

~~~sass
@import "path/to/bower_components/normalize-scss/sass/normalize/import-now"; // import normalize-scss
@import "path/to/bower_components/skeleton-sass/skeleton/core/config"; // Skeleton Sass core loader

// import default theme variables
@import "path/to/bower_components/skeleton-sass/skeleton/themes/fresh/vars"; // theme variable overrides

// import default theme styles
@import "path/to/bower_components/skeleton-sass/skeleton/themes/fresh/base"; // theme base styles
@import "path/to/bower_components/skeleton-sass/skeleton/themes/fresh/skeleton"; // theme grid styles
~~~

Compile `skeleton.scss` and you now have Skeleton Sass 3 integrated into your project!

#### But wait! What about my themes?!
Skeleton Sass 3 makes it easy to keep your changes external to the core of Skeleton Sass with the new all-partial approach. We'll outline a sample case where we use a custom theme below:

```
my_project
└── src
    └── sass
        ├── skeleton.scss	 # Skeleton folder to keep file structure clean
        └── themes
            ├── _config.scss	 # Global overrides and applies to all themes
            ├── _loader.scss 	# Contains all of the imports
            └── my_theme
                ├── _base.scss 	# Theme base styles, replaces shipped base styles
                ├── _skeleton.scss	# Theme grid, replaces shipped grids
                ├── _vars.scss 	# Theme-scoped variables and overrides
                └── marrow
                    ├── _private.scss # Private mixins, conventionally only available to _public.scss
                    └── _public.scss # Public-facing mixins available to the theme
```

Now that we have our sample project outlined, let's see how we can get everything working! Open `_config.scss` and add the following:

**Note:** all relative paths in the examples below fit the file structure above. If you are using a different structure, amend the paths accordingly.

~~~sass
@import "../../../bower_components/skeleton-sass/skeleton/core/config";

// Global var overrides
~~~

Now open `_loader.scss` and add the following:

~~~sass
@import "config";

// import theme, overrides, and extras
@import "themes/MyTheme/vars";
@import "themes/MyTheme/base";
@import "themes/MyTheme/skeleton";
~~~

Finally, open `skeleton.scss` and add the following as the first line of the file:

~~~sass
@import "skeleton/loader";
~~~

#### How do I load third party Sass partials into theme?
Glad you asked! Skeleton Sass 3 makes this super easy as well! Depending where you need these mixins, function, and/or variables, you can load them at the appropriate place in your `_loader.scss` file!

For example, let's assume we want to use font-awesome inside of our `skeleton.scss` file, we could modify the `_loader.scss` file as follows:

~~~sass
@import "config";

// import theme, overrides, and extras
@import "themes/MyTheme/vars";
@import "themes/MyTheme/base";
@import "themes/MyTheme/skeleton";

// import extras
@import "../../../bower_components/font-awesome/scss/font-awesome";
~~~

**Note:** the position of the import changes which files have access to the loaded data. For example, if you need the data in `themes/MyTheme/skeleton` then you'd need to move the import above the line where you import `themes/MyTheme/skeleton`.

For more information on why we made this change, [click here](#change).

#### Upgrading From 2.x
Skeleton Sass 3 is decently compatible to the 2.x series, but requires some manual labor (i.e. copy and pasting multiple files to the 2.x series).

#### Upgrading From 1.x
Skeleton Sass 2 is **not** backwards compatible with Skeleton Sass 1.x due to a major change in the file structure. However, we have a [wiki article](https://github.com/atomicpages/skeleton-sass/wiki/Upgrade-from-1-to-2) that explains how to upgrade from Skeleton Sass 1 to Skeleton Sass 2.

#### Looking for older versions of Skeleton Sass?
* Skeleton Sass 2
    * [Version 2 branch](https://github.com/atomicpages/skeleton-sass/tree/2.x-master)
    * [Version 2 docs](https://github.com/atomicpages/skeleton-sass/wiki/Version-2-Docs)
* Skeleton Sass
    * [Version 1 branch](https://github.com/atomicpages/skeleton-sass/tree/1.x-master)
    * [Version 1 docs](https://github.com/atomicpages/skeleton-sass/wiki/Version-1-Docs)

#### New to Sass?
Check out our [wiki](https://github.com/atomicpages/skeleton-sass/wiki) for a more in-depth look at Skeleton Sass, information regarding installing ruby and Sass, and other valuable resources!

## TL;DR
Skeleton Sass is a Sass port of Skeleton CSS. Skeleton Sass 3 decouples itself from your project so you can consume it without worrying if your package manager will clobber all of your hard work.

### Features
1. Modular
2. Decoupled core code
3. Extensible
4. Themeable

### File Overview
```
Skeleton 	# Where all of the magic happens
├── core
│   ├── _config.scss 	# Default global configuration variables
│   ├── _dependencies.scss	 # Default global logic for Skeleton Sass
│   ├── _functions.scss	 # Default global functions for Skeleton Sass
│   └── _mixins.scss	 # Default global mixins for Skeleton Sass
└── themes 	# Where all of the themes live
    ├── fresh
    │   ├── _base.scss contains # All of the base styles for Skeleton Sass with the exception of the reset styles
    │   ├── _skeleton.scss 
    │   ├── _vars.scss 	# Project-scoped configuration options and variables
    │   └── marrow 	# Stores all project-level functions and mixins
    │       └── _mixins.scss	 # loads the default theme mixins and functions from sphenoid
    └── sphenoid
        ├── _base.scss 	# Base styles for Skeleton Sass (same look as Skeleton CSS created)
        ├── _skeleton.scss	 # Styles to create the grid
        ├── _vars.scss 	# Project-scoped configuration options
        └── marrow 	#Project-scoped logic (e.g. functions and mixins) for your theme to work
            ├── _private.scss 	# Private logic for the public mixins/functions to work correctly for the sphenoid project. Feel free to name this file whatever you want in your own theme.
            └── _public.scss 	# Public mixins/functions for the sphenoid theme. Feel free to name this file whatever you want in your own theme.
```

Install Skeleton Sass with bower via command line:

~~~bash
bower install skeleton-sass --save-dev
bower install skeleton-sass-official --save-dev
~~~

You can also add Skeleton Sass as a dependency via NPM or Yarn!

~~~bash
npm install --save-dev skeleton-sass-official
yarn install skeleton-sass-official
~~~

You can also install alpha, beta, release candidate, and previous versions by looking at the [releases](https://github.com/atomicpages/skeleton-sass/releases) page and install with the following syntax:

~~~bash
bower install skeleton-sass#[tag]
bower install skeleton-sass#3.0.2
~~~

[Learn how to set up Skeleton Sass for the first time here](https://github.com/atomicpages/skeleton-sass/wiki/Setting-up-Skeleton-Sass-for-first-time-use).

### Demo
You can see Skeleton Sass in action here: [https://atomicpages.github.io/skeleton-sass](https://atomicpages.github.io/skeleton-sass). Be sure to resize your browser window and see the responsive goodness in action!

### Documentation
Skeleton Sass is heavily documented. If you're looking for a detailed description (or just want more info) you can view all the [wiki pages here](https://github.com/atomicpages/skeleton-sass/wiki/_pages).

##### Resources
* [Installing Sass](https://github.com/atomicpages/skeleton-sass/wiki/Installing-Sass)
* [Setting up Skeleton Sass for first time use](https://github.com/atomicpages/skeleton-sass/wiki/Setting-up-Skeleton-Sass-for-first-time-use)
* [Creating a theme](https://github.com/atomicpages/skeleton-sass/wiki/Creating-a-theme)


##### Documentation
* [Introduction to Skeleton Sass](https://github.com/atomicpages/skeleton-sass/wiki)
* [Function API](https://github.com/atomicpages/skeleton-sass/wiki/Function-API)
* [Core Variable API](https://github.com/atomicpages/skeleton-sass/wiki/Core-Variable-API)
* [Mixin API](https://github.com/atomicpages/skeleton-sass/wiki/Mixin-API)
* [Skeleton Sass version 1 Docs](https://github.com/atomicpages/skeleton-sass/wiki/Version-1-Docs)

### License
This project is released under the [MIT license](https://github.com/atomicpages/skeleton-sass/blob/master/license.txt). Who doesn't like free code?

### Find a Bug?
Skeleton Sass is community driven. We will gladly review any issues that you find. If you wish to contribute you'll land a spot in the contributions section of this document!

##### I Found a Bug/How Can I Help?
* [Create an Issue](https://github.com/atomicpages/skeleton-sass/issues)
* [Fork](https://github.com/atomicpages/skeleton-sass)

<a name="change"></a>

### Version 3 Update
After a year of working with build systems like gulp, make, gradle, and maven it became obvious that the structure of Skeleton Sass 2 didn't really promote easy updating. Most build systems have a clean task which deletes entire directories that contains artifacts, target directories, object files, etc. Skeleton Sass 2 strived to be a catch-all solution with the addition of clunky scripts to automate certain things. With the release of 2.5.3, we realized a change was needed.

Skeleton Sass 3 offers a far more portable solution in order to adapt to new ways of development using dependency management systems like `bower` and `npm`. We wanted to truly make updating Skeleton Sass have zero risk of losing all your hard work. Now contributors to your projects can simply install Skeleton Sass as a dependency and all of your changes are 100% decoupled from the core.

Changelog
---------
### 3.0.2
* Changing `package.json` name to `skeleton-sass-official` to avoid name collisions.
* Updated links in README
* Major wiki changes
* Added `skeleton-sass-official` to bower
* Fixing Issue #22

### 3.0.1
* Updating `normalize.scss` dependency to `latest` in `bower.json` and any version `>=5.0.4` in `package.json`
* Updated sache tags

### 3.0.0
* Adding `package.json` for npm support
* Converting all core files to partials for better support for installing via bower and npm
* Decoupled Skeleton Sass
    * All themes files that `@import "vars";` no longer do so
    * Importing of theme components has to be done manually by consumers.
* Added `.editorconfig`
* Added `package.json` for installing via npm
* Updated dependency to use [`normalize-scss`](https://github.com/JohnAlbin/normalize-scss/)

###### Removals
* `bin/`
* `skeleton_template.scss`
* `_MYConfig.scss`
* `themes/demo`
* `var` partial imports in shipped theme files
* Removed `normalize` import from `fresh/vars`, user can add the import in the `loader` partial

###### Additions
* Introduction of `$new-grid-width` in the global config
    * Alters the `width` set in `.container` as defined in `@media (min-width: 550px)`
    * Allows users to change this bizarre default 80% value set in Skeleton CSS 2

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
* [vephinx](https://github.com/vephinx)
	* [Issue #7](https://github.com/atomicpages/skeleton-sass/issues/7)
	* [Issue #9](https://github.com/atomicpages/skeleton-sass/issues/9)
* [thomasvandongen](https://github.com/thomasvandongen)
	* Pull request [0af774f](https://github.com/atomicpages/skeleton-sass/pull/20)
		* **Note:** as a result of his work we can finally close [issue #16](https://github.com/atomicpages/skeleton-sass/issues/16)
* [seshaljain](https://github.com/seshaljain)
	* [Issue #22](https://github.com/atomicpages/skeleton-sass/issues/22)
