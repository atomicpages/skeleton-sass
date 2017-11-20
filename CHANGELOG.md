Changelog
=========
### 3.1.5
* Addressing issue #34
* Merging #35 &mdash; thanks [e-compton](https://github.com/e-compton)!
* Adding more variables to `fresh` and `wing` themes
* Creating file on-the-fly for devs on gulp `sass` task
* Updating docs

### 3.1.4
* Addressing issue #31
    * Adding styles for `.one-half`
    * Adding new selectors to fixed grid:
        * `.one-third.columns`
        * `.two-third.columns`
        * `.one-half.column`
		* `.one-half.columns`
        * `.full-width.column`
* Addressing issue #28
* Fixing configuration issues when `$base-gutter-width` is something other than `20px` in fixed grid mixin
* Enforcing `body` margin styles to fixed overflow issue in `960px - 1129px`
    * Applies only to `fresh` theme

### 3.1.3
* Merging in pull request #30
    * Addresses issue #29

### 3.1.2
* Merging in pull request [dirkolbrich](https://github.com/dirkolbrich)
	* Fixes duplicate `normalize.css` in transpiled output

### 3.1.1
* Forgot to add the grid for `Wing` theme :)

### 3.1.0
* Adding a new theme based on [Wing](http://usewing.ml/) which is _heavily_ based on Skeleton.
* **Major** update to demo section of the demo site.
    * Using current version of Skeleton Sass
    * Removed legacy demos
    * Added new demos
    * Better styling
    * Less clutter
* Splitting base styles into several components to accelerate theme development and reduce file coupling.
    * `_base.scss`
    * `_buttons.scss`
    * etc...
* Adding `_include_components.scss` partial in every theme for easy loading
* Standardizing naming conventions
    * Renaming `sphenoid` theme to `original`
    * Renaming `marrow` folders to `mixins`
    * Renaming `_skeleton.scss` to `_grid.scss`
* Moving to [sassdoc](http://sassdoc.com/); no more manual documentation!
* Removing graident support in theme mixins

### 3.0.3
* Addressing issue #24

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
