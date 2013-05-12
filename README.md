skeleton-sass
=============

A SASS and Compass + SASS translation of Dave Gamache's [Skeleton CSS](http://getskeleton.com) responsive frontend framework. This translation includes:

* Sassified Skeleton CSS Framework
* `.scss` and `.sass` files
* Compass and non-compass versions available

For your convenience all global variables, functions, and mixins are separated into individual files.

Included Files
--------------
* **index.html** which includes a starter page showcasing the various features of the framework
* **demo.html** which outlines the inherited styling that this framework offers. See this file for additional information on its uses.
* **skeleton.scss** which contains the responsive styles for the framework. You should never edit this file directly unless you know exactly what you're changing! Note: this file DOES contain an editable function that changes the grid. See file for additional information.
* **layout.scss** is a file where you can add custom styles and extend the framework.
* base.scss contains all of the default typography styles, page styles, and much more.
* **_mixins.scss** is a "private" sass file that is meant to be included but not rendered into its own css file. See this file for the uses.
* **_functions.scss** is a "private file" that contains the function that generates the grid for the framework. Feel free to change the grid in skeleton.scss to suit your needs!
* **_vars.scss** is a "private file" the contains all of the global variables that the framework uses. Feel free to change and add your own! See file for additional information.

Demo
----
Demo files are included in the `demo` folder for your convenience. Additionally, a live demo can be seen at [http://atomicpages.github.io/skeleton-sass](http://atomicpages.github.io/skeleton-sass). The website version has additional things like jQuery Cookie to help maintain settings after your sessions ends. Two cookies will be created: one to store the type of view and the other to store the width of the fluid view. Feel free to play around and take a look at the other resources!

Documentation
-------------
Skeleton SASS is heavily documented! If you're looking for a detailed description of how certain things works (or just want more info) you can view the [wiki pages](https://github.com/atomicpages/skeleton-sass/wiki/_pages)

License
-------
This project is released under the MIT license.

Find a Bug?
-----------
Do either of the following:

* Submit a pull request
* Create a new issue on the [github page](https://github.com/atomicpages/skeleton-sass/)

Changelog
---------
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
* [Dennis Thompson](http://dennis-thompson.com)
* [AtomicPages LLC](http://www.atomicpages.net)
