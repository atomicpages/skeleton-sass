skeleton-sass
=============

A SASS and Compass + SASS translation of Dave Gamache's [Skeleton CSS](http://getskeleton.com) responsive frontend framework. This translation includes:

* Skeleton SCSS Translation
* Skeleton SCSS w/ Compass Translation
* .sass and .scss styles are included

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

### License
Like Skeleton, this is released under the [MIT license](http://opensource.org/licenses/mit-license.php).
