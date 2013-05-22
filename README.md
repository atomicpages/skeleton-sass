Skeleton SASS
=============

Skeleton SASS is a SASSification of Dave Gamache's [Skeleton CSS](http://getskeleton.com) responsive front-end framework.

Features
--------
1. SASSified Skeleton CSS Framework
2. Separation of variables, functions, and mixins to keep code **DRY**
3. Choose from two different syntaxes and use of Compass library
  * `.sass` indented-style syntax
     * Compass optional available, uses `compass/css3` library only
  * `.scss` "sassy css" syntax (with and without Compass)
     * Compass optional available, uses `compass/css3` library only

Included Files
--------------
* `index.html` which includes a starter page showcasing the various features of the framework
* `demo.html` which outlines the inherited styling that this framework offers. See this file for additional information on its uses.
* `skeleton.scss` is a **required** which contains the responsive styles for the framework. You should never edit this file directly unless you know exactly what you're changing! Note: this file DOES contain an editable function that changes the grid. See file for additional information.
* `layout.scss` is an optional file where you can add custom styles and extend the framework.
* base.scss is an optional file which contains all of the default typography styles, page styles, and much more.
* `_mixins.scss` is a "private" sass file that is meant to be included but not rendered into its own css file. See this file for the uses.
* `_functions.scss` is a _private file_ that contains the function that generates the grid for the framework. Feel free to change the grid in skeleton.scss to suit your needs!
* `_vars.scss` is a _private file_ the contains all of the global variables that the framework uses. Feel free to change and add your own! See file for additional information.

Demo
----
Live demo can be seen here: [http://atomicpages.github.io/skeleton-sass](http://atomicpages.github.io/skeleton-sass). Resize your browser window and see the responsive goodness in action!

Want to see more uses like a twelve or twenty grid Skeleton SASS? See the [demo here](http://atomicpages.github.io/skeleton-sass/demo.html)!

Documentation
-------------
Skeleton SASS is heavily documented! If you're looking for a detailed description (or just want more info) you can checkout the [wiki pages](https://github.com/atomicpages/skeleton-sass/wiki/_pages)!

#### Resources
* [Installing SASS](https://github.com/atomicpages/skeleton-sass/wiki/Installing-SASS)
* [Installing Compass](https://github.com/atomicpages/skeleton-sass/wiki/Installing-Compass)


#### Documentation
* [Introduction to Skeleton SASS](https://github.com/atomicpages/skeleton-sass/wiki/Introduction-to-Skeleton-SASS)
* [Function Documentation](https://github.com/atomicpages/skeleton-sass/wiki/Function-Documentation)
* [Variable Documentation](https://github.com/atomicpages/skeleton-sass/wiki/Variable-Documentation)
* [Mixin Documentation](https://github.com/atomicpages/skeleton-sass/wiki/Mixin-Documentation)

License
-------
This project is released under the MIT license. Who doesn't like free code?

Find a Bug?
-----------
* Submit a pull request
* Create a new issue on the [github page](https://github.com/atomicpages/skeleton-sass/)

Changelog
---------
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
