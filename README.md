# Skeleton Sass
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-9-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

![npm](https://img.shields.io/npm/v/skeleton-sass-official?style=flat-square)

Skeleton Sass is a highly modular version of [Skeleton CSS](http://getskeleton.com) build on top of the popular CSS metalanguage, Sass.

### Key Features

-   Ability to seamlessly adjust grids by changing the value of variables
-   Themes
-   Easy-to-use mixins and functions
-   Install Skeleton Sass with npm! No more clunky scripts!
-   [Live demo!](http://atomicpages.github.io/skeleton-sass/demo/index.html)
-   [Heavily documented](https://github.com/atomicpages/skeleton-sass/wiki)

## Getting Started

Skeleton Sass has two dependencies:

-   node-sass `>=3.5.0`/dart sass `>=1.0.0` (your choice)
-   [normalize-scss](https://github.com/JohnAlbin/normalize-scss)

Skeleton Sass is available as a node module and can be installed and updated via `npm` or `yarn`.

```sh
npm i skeleton-sass-official normalize-scss -D
yarn add skeleton-sass-official normalize-scss --dev
```

Alternatively, you can clone the repo and build from source:

```sh
cd path/to/my_dir
git clone https://github.com/atomicpages/skeleton-sass.git

# create a blank file
touch skeleton.scss
```
Open your `skeleton.scss` file in your text editor and copy these lines:

```scss
@import "path/to/node_modules/normalize-scss/sass/normalize/import-now"; // import normalize-scss
@import "path/to/node_modules/skeleton-sass-official/src/core/config"; // Skeleton Sass core loader

// import default theme variables
@import "path/to/node_modules/skeleton-sass-official/src/themes/fresh/vars"; // theme variable overrides

// import default theme styles
@import "path/to/node_modules/skeleton-sass-official/src/themes/fresh/include_components"; // theme base styles
@import "path/to/node_modules/skeleton-sass-official/src/themes/fresh/grid"; // theme grid styles
```

We're ready to build:

```sh
npx sass skeleton.scss skeleton.css
```

## Documentation

Skeleton Sass is heavily documented. If you're looking for a detailed description (or just want more info) you can view all the [wiki pages here](https://github.com/atomicpages/skeleton-sass/wiki/_pages). Popular articles:

-   [Introduction to Skeleton Sass](https://github.com/atomicpages/skeleton-sass/wiki)
-   [Function API](https://github.com/atomicpages/skeleton-sass/wiki/Function-API)
-   [Core Variable API](https://github.com/atomicpages/skeleton-sass/wiki/Core-Variable-API)
-   [Mixin API](https://github.com/atomicpages/skeleton-sass/wiki/Mixin-API)
-   [Learn how to set up Skeleton Sass for the first time here](https://github.com/atomicpages/skeleton-sass/wiki/Setting-up-Skeleton-Sass-for-first-time-use).

## Themes

Since v2, themes have been supported. Updates (and subsequent pulls from the repo) will not clobber your themes. For more information on how to create a [theme of your own, head over to the wiki](https://github.com/atomicpages/skeleton-sass/wiki/Creating-a-theme).

## Legacy Versions

-   Skeleton Sass 3
    -   [Version 3 branch](https://github.com/atomicpages/skeleton-sass/tree/3.x-master)
-   Skeleton Sass 2
    -   [Version 2 branch](https://github.com/atomicpages/skeleton-sass/tree/2.x-master)
    -   [Version 2 docs](https://github.com/atomicpages/skeleton-sass/wiki/Version-2-Docs)
-   Skeleton Sass
    -   [Version 1 branch](https://github.com/atomicpages/skeleton-sass/tree/1.x-master)
    -   [Version 1 docs](https://github.com/atomicpages/skeleton-sass/wiki/Version-1-Docs)

## Demo

You can see Skeleton Sass in action here: [https://atomicpages.github.io/skeleton-sass](https://atomicpages.github.io/skeleton-sass). Be sure to resize your browser window and see the responsive goodness in action!

## Resources

-   [Installing Sass](https://github.com/atomicpages/skeleton-sass/wiki/Installing-Sass)
-   [Setting up Skeleton Sass for first time use](https://github.com/atomicpages/skeleton-sass/wiki/Setting-up-Skeleton-Sass-for-first-time-use)
-   [Creating a theme](https://github.com/atomicpages/skeleton-sass/wiki/Creating-a-theme)

## License

This project is released under the [MIT license](https://github.com/atomicpages/skeleton-sass/blob/master/license.txt). Who doesn't like free code?

### Contributing

Skeleton Sass is community driven. We will gladly review any issues that you find. If you wish to contribute you'll land a spot in the contributions section of this document!

-   [Create an Issue](https://github.com/atomicpages/skeleton-sass/issues)
-   [Fork](https://github.com/atomicpages/skeleton-sass)

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
