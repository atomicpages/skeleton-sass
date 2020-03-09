# Skeleton Sass 3
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-9-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Skeleton Sass is a highly modular version of [Skeleton CSS](http://getskeleton.com).

### Key Features

-   Ability to seamlessly adjust grids by changing the value of variables
-   Themes
-   Easy-to-use mixins and functions
-   Install Skeleton Sass with bower or npm! No more clunky scripts!
-   [Live demo!](http://atomicpages.github.io/skeleton-sass/demo/index.html)
-   [Heavily documented](https://github.com/atomicpages/skeleton-sass/wiki)

### Dependencies

-   node-sass `>=3.5.0` or dart sass `>=1.0.0`
-   [normalize-scss](https://github.com/JohnAlbin/normalize-scss)

#### Does this work with other Sass compilers?

Yes! Skeleton Sass has been tested with the official sass compiler and `node-sass` (which wraps libsass):

-   [Dart Sass](https://sass-lang.com/dart-sass) 1.x
-   [node-sass](https://www.npmjs.com/package/node-sass) 3.5+

## Installing Skeleton Sass

### From NPM

Install from the NPM registry:

```sh
npm i skeleton-sass-official normalize-scss -D
yarn add skeleton-sass-official normalize-scss --dev
```

### From Source

If you're not using NPM or Yarn, you can clone the repro:

```sh
cd path/to/my_dir
git clone https://github.com/atomicpages/skeleton-sass.git
```

Create a file called `skeleton.scss`

On \*nix:

```sh
cd path/to/sass/in/project
touch skeleton.scss
```

On Windows:

```batch
cd path/to/sass/in/project
echo. 2>skeleton.scss
```

Inside of `skeleton.scss` we need to add our import statements:

```scss
@import "path/to/bower_components/normalize-scss/sass/normalize/import-now"; // import normalize-scss
@import "path/to/bower_components/skeleton-sass/src/core/config"; // Skeleton Sass core loader

// import default theme variables
@import "path/to/bower_components/skeleton-sass/src/themes/fresh/vars"; // theme variable overrides

// import default theme styles
@import "path/to/bower_components/skeleton-sass/src/themes/fresh/include_components"; // theme base styles
@import "path/to/bower_components/skeleton-sass/src/themes/fresh/grid"; // theme grid styles
```

Building using CLI:

```sh
npx sass skeleton.scss skeleton.css
```

#### But wait! What about my themes?!

Skeleton Sass 3 makes it easy to keep your changes external to the core of Skeleton Sass with the new all-partial approach. We'll outline a sample case where we use a custom theme below:

```plain
my_project
└── src
    └── sass
        ├── skeleton.scss	 # Skeleton folder to keep file structure clean
        └── themes
            ├── _config.scss  # Global overrides and applies to all themes
            ├── _loader.scss  # Contains all of the imports
            └── my_theme
                ├── _grid.scss # Theme grid, replaces shipped grids
                ├── _include_components.scss # Includes all of the components in the components folder
                ├── _vars.scss # Theme-scoped variables and overrides
                ├── components
                │   ├── _base.scss # Default html and body styles
                │   ├── _buttons.scss
                │   ├── _forms.scss
                │   ├── _links.scss
                │   ├── _lists.scss
                │   ├── _typography.scss
                │   └── _utils.scss # Utility classes
                └── mixins
                    ├── _private.scss # Contains all "private" mixins
                    └── _public.scss # Contains all public mixins
```

Now that we have our sample project outlined, let's see how we can get everything working! Open `_config.scss` and add the following:

**Note:** all relative paths in the examples below fit the file structure above. If you are using a different structure, amend the paths accordingly.

```scss
@import "../../../node_modules/skeleton-sass/src/core/config";

// Global var overrides
```

Now open `_loader.scss` and add the following:

```scss
@import "config";

// import theme, overrides, and extras
@import "themes/MyTheme/vars";
@import "themes/MyTheme/include_components";
@import "themes/MyTheme/grid";
```

Finally, open `skeleton.scss` and add the following as the first line of the file:

```scss
@import "src/loader";
```

#### How do I load third party Sass partials into theme?

Glad you asked! Skeleton Sass 3 makes this super easy as well! Depending where you need these mixins, function, and/or variables, you can load them at the appropriate place in your `_loader.scss` file!

For example, let's assume we want to use font-awesome inside of our `skeleton.scss` file, we could modify the `_loader.scss` file as follows:

```scss
@import "config";

// import theme, overrides, and extras
@import "themes/MyTheme/vars";
@import "themes/MyTheme/include_components";
@import "themes/MyTheme/grid";

// import extras
@import "../../../node_modules/font-awesome/scss/font-awesome";
```

**Note:** the position of the import changes which files have access to the loaded data. For example, if you need the data in `themes/MyTheme/grid` then you'd need to move the import above the line where you import `themes/MyTheme/grid`.

For more information on why we made this change, [click here](#change).

#### Upgrading From 2.x

Skeleton Sass 3 is decently compatible to the 2.x series, but requires some manual labor (i.e. copy and pasting multiple files to the 2.x series).

#### Upgrading From 1.x

Skeleton Sass 2 is **not** backwards compatible with Skeleton Sass 1.x due to a major change in the file structure. However, we have a [wiki article](https://github.com/atomicpages/skeleton-sass/wiki/Upgrade-from-1-to-2) that explains how to upgrade from Skeleton Sass 1 to Skeleton Sass 2.

#### Looking for older versions of Skeleton Sass?

-   Skeleton Sass 2
    -   [Version 2 branch](https://github.com/atomicpages/skeleton-sass/tree/2.x-master)
    -   [Version 2 docs](https://github.com/atomicpages/skeleton-sass/wiki/Version-2-Docs)
-   Skeleton Sass
    -   [Version 1 branch](https://github.com/atomicpages/skeleton-sass/tree/1.x-master)
    -   [Version 1 docs](https://github.com/atomicpages/skeleton-sass/wiki/Version-1-Docs)

#### New to Sass?

Check out our [wiki](https://github.com/atomicpages/skeleton-sass/wiki) for a more in-depth look at Skeleton Sass, information regarding installing ruby, Sass, and other valuable resources.

## TL;DR

Skeleton Sass is a Sass port of Skeleton CSS. Skeleton Sass 3 decouples itself from your project so you can consume it without worrying if your package manager will clobber all of your hard work.

### Features

1. Modular
2. Decoupled core code
3. Decoupled theme files for rapid theme development
4. Extensible

### File Overview

```
src/ # Where all of the magic happens
├── core
│   ├── _config.scss # Default global configuration variables
│   ├── _dependencies.scss # Default global logic for Skeleton Sass
│   ├── _functions.scss # Default global functions for Skeleton Sass
│   └── _mixins.scss # Default global mixins for Skeleton Sass
└── themes # Where all of the themes live
    ├── fresh
    │   ├── _grid.scss
    │   ├── _include_components.scss # partial to import all of the components
    │   ├── _vars.scss # Project-scoped configuration options and variables
    │   ├── components
    │   │   ├── _base.scss
    │   │   ├── _buttons.scss
    │   │   ├── _forms.scss
    │   │   ├── _links.scss
    │   │   ├── _lists.scss
    │   │   ├── _misc.scss
    │   │   ├── _normalize.scss
    │   │   ├── _tables.scss
    │   │   ├── _typography.scss
    │   │   └── _utils.scss
    │   └── mixins # Stores all project-level functions and mixins
    │       └── _mixins.scss
    ├── original
    │   ├── _grid.scss
    │   ├── _include_components.scss # partial to import all of the components
    │   ├── _vars.scss # Project-scoped configuration options and variables
    │   ├── components
    │   │   ├── _base.scss
    │   │   ├── _buttons.scss
    │   │   ├── _forms.scss
    │   │   ├── _links.scss
    │   │   ├── _lists.scss
    │   │   ├── _typography.scss
    │   │   └── _utils.scss
    │   └── mixins # Stores all project-level functions and mixins
    │       ├── _private.scss
    │       └── _public.scss
    └── wing
        ├── _grid.scss
        ├── _include_components.scss # partial to import all of the components
        ├── _vars.scss # Project-scoped configuration options and variables
        └── components
            ├── _base.scss
            ├── _buttons.scss
            ├── _forms.scss
            ├── _links.scss
            ├── _lists.scss
            ├── _misc.scss
            ├── _typography.scss
            └── _utils.scss
```

Install Skeleton Sass as a dependency via NPM or Yarn:

```sh
npm install --save-dev skeleton-sass-official
yarn add skeleton-sass-official --dev
```

**Note:** [bower is deprecated](https://github.com/bower/bower/issues/2298) and we encourage you to adopt modern [workflows like rollup and webpack](https://github.com/atomicpages/skeleton-sass/wiki/Integrating-Skeleton-Sass-into-Dev-Workflows).

~~Install Skeleton Sass with bower via command line:~~

```sh
bower install skeleton-sass --save-dev
bower install skeleton-sass-official --save-dev
```

~~You can also install alpha, beta, release candidate, and previous versions by looking at the [releases](https://github.com/atomicpages/skeleton-sass/releases) page and install with the following syntax:~~

```sh
bower install skeleton-sass#[tag]
bower install skeleton-sass#3.1.0
```

[Learn how to set up Skeleton Sass for the first time here](https://github.com/atomicpages/skeleton-sass/wiki/Setting-up-Skeleton-Sass-for-first-time-use).

### Demo

You can see Skeleton Sass in action here: [https://atomicpages.github.io/skeleton-sass](https://atomicpages.github.io/skeleton-sass). Be sure to resize your browser window and see the responsive goodness in action!

### Documentation

Skeleton Sass is heavily documented. If you're looking for a detailed description (or just want more info) you can view all the [wiki pages here](https://github.com/atomicpages/skeleton-sass/wiki/_pages).

##### Resources

-   [Installing Sass](https://github.com/atomicpages/skeleton-sass/wiki/Installing-Sass)
-   [Setting up Skeleton Sass for first time use](https://github.com/atomicpages/skeleton-sass/wiki/Setting-up-Skeleton-Sass-for-first-time-use)
-   [Creating a theme](https://github.com/atomicpages/skeleton-sass/wiki/Creating-a-theme)

##### Documentation

-   [Introduction to Skeleton Sass](https://github.com/atomicpages/skeleton-sass/wiki)
-   [Function API](https://github.com/atomicpages/skeleton-sass/wiki/Function-API)
-   [Core Variable API](https://github.com/atomicpages/skeleton-sass/wiki/Core-Variable-API)
-   [Mixin API](https://github.com/atomicpages/skeleton-sass/wiki/Mixin-API)
-   [Skeleton Sass version 1 Docs](https://github.com/atomicpages/skeleton-sass/wiki/Version-1-Docs)

### License

This project is released under the [MIT license](https://github.com/atomicpages/skeleton-sass/blob/master/license.txt). Who doesn't like free code?

### Found a Bug?

Skeleton Sass is community driven. We will gladly review any issues that you find. If you wish to contribute you'll land a spot in the contributions section of this document!

##### I Found a Bug/How Can I Help?

-   [Create an Issue](https://github.com/atomicpages/skeleton-sass/issues)
-   [Fork](https://github.com/atomicpages/skeleton-sass)

<a name="change"></a>

### Version 3 Update

After a year of working with build systems like gulp, make, gradle, and maven it became obvious that the structure of Skeleton Sass 2 didn't really promote easy updating. Most build systems have a clean task which deletes entire directories that contains artifacts, target directories, object files, etc. Skeleton Sass 2 strived to be a catch-all solution with the addition of clunky scripts to automate certain things. With the release of 2.5.3, we realized a change was needed.

Skeleton Sass 3 offers a far more portable solution in order to adapt to new ways of development using dependency management systems like ~~`bower` and~~ `npm`. We wanted to truly make updating Skeleton Sass have zero risk of losing all your hard work. Now contributors to your projects can simply install Skeleton Sass as a dependency and all of your changes are 100% decoupled from the core.

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://robertosobachi.com"><img src="https://avatars0.githubusercontent.com/u/1422326?v=4" width="100px;" alt=""/><br /><sub><b>Roberto Sobachi</b></sub></a><br /><a href="https://github.com/atomicpages/skeleton-sass-official/issues?q=author%3Arobertosobachi" title="Bug reports">🐛</a> <a href="https://github.com/atomicpages/skeleton-sass-official/commits?author=robertosobachi" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/thomasvandongen"><img src="https://avatars2.githubusercontent.com/u/11245177?v=4" width="100px;" alt=""/><br /><sub><b>Thomas van Dongen</b></sub></a><br /><a href="https://github.com/atomicpages/skeleton-sass-official/issues?q=author%3Athomasvandongen" title="Bug reports">🐛</a> <a href="https://github.com/atomicpages/skeleton-sass-official/commits?author=thomasvandongen" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/seshaljain"><img src="https://avatars0.githubusercontent.com/u/11702800?v=4" width="100px;" alt=""/><br /><sub><b>Seshal Jain</b></sub></a><br /><a href="https://github.com/atomicpages/skeleton-sass-official/issues?q=author%3Aseshaljain" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/pcbulai"><img src="https://avatars1.githubusercontent.com/u/949571?v=4" width="100px;" alt=""/><br /><sub><b>Paul Bulai</b></sub></a><br /><a href="https://github.com/atomicpages/skeleton-sass-official/issues?q=author%3Apcbulai" title="Bug reports">🐛</a></td>
    <td align="center"><a href="http://www.dirkolbrich.de"><img src="https://avatars1.githubusercontent.com/u/3765119?v=4" width="100px;" alt=""/><br /><sub><b>Dirk Olbrich</b></sub></a><br /><a href="https://github.com/atomicpages/skeleton-sass-official/issues?q=author%3Adirkolbrich" title="Bug reports">🐛</a> <a href="https://github.com/atomicpages/skeleton-sass-official/commits?author=dirkolbrich" title="Code">💻</a></td>
    <td align="center"><a href="https://bryson.cc/"><img src="https://avatars1.githubusercontent.com/u/4043157?v=4" width="100px;" alt=""/><br /><sub><b>Bryson Reece</b></sub></a><br /><a href="https://github.com/atomicpages/skeleton-sass-official/issues?q=author%3Abrysonreece" title="Bug reports">🐛</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/e-compton"><img src="https://avatars3.githubusercontent.com/u/11599729?v=4" width="100px;" alt=""/><br /><sub><b>Edward Compton</b></sub></a><br /><a href="https://github.com/atomicpages/skeleton-sass-official/issues?q=author%3Ae-compton" title="Bug reports">🐛</a> <a href="https://github.com/atomicpages/skeleton-sass-official/commits?author=e-compton" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/if2527"><img src="https://avatars2.githubusercontent.com/u/18335580?v=4" width="100px;" alt=""/><br /><sub><b>if2527</b></sub></a><br /><a href="https://github.com/atomicpages/skeleton-sass-official/commits?author=if2527" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/k-snow"><img src="https://avatars1.githubusercontent.com/u/11395605?v=4" width="100px;" alt=""/><br /><sub><b>k-snow</b></sub></a><br /><a href="https://github.com/atomicpages/skeleton-sass-official/issues?q=author%3Ak-snow" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->
