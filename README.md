Skeleton Sass
=============

Welcome to the Skeleton Sass website. Feel free to browse the source code of this website to see how it was created. If you find any issues, feel free to [submit a pull request](https://github.com/atomicpages/skeleton-sass/pull/new/gh-pages) with a fix or file an issue!

Looking for Skeleton Sass v1 Site? Find it here: http://atomicpages.github.io/skeleton-sass/v1/

### How Do I Build?

~~~bash
npm i && gulp dist
~~~

If you are using `yarn` then:

~~~bash
yarn && gulp dist
~~~

### Running Locally

~~~bash
cd path/to/skeleton-sass
yarn && yarn dev # or if using NPM
npm i && npm run dev
~~~

**Note:** the `dev` task will automatically build the project for you.

## Changelog
### 3.1.3
* Updating docs script to use shell.js
* Updating docs

### 3.1.2
* Renaming some gulp tasks
* Adding browserify to serve static resources
    * Streaming `sass` changes to the browser
    * Reloading when `index.html` changes
    * Reloading when `js` changes
* Improving accessibility
* Adding `noopener` on `_blank` anchors
* Updating content to reflect changes in Skeleton Sass 3

### 3.1.1
* Bumping `node` dependencies
* Adding engine version in `package.json`
* Fixing styling issues in the showcase site.

### 3.1.0
* Adding new demo
* Adding sassdoc documentation

### 3.0.2
* Removed bower as a dependency to build this site. Only `npm` or `yarn` is required
* Updated links on site
* Converted all existing jQuery js to vanilla js
* Removed parallax scrolling
* Fixed smooth scrolling issues
* Changed OS X to macOS
* Cleaned up grid panel

### 3.0.1
* Updated Skeleton Sass to 3.0.1 stable
* Updated jQuery to use latest version
* Fixed a case where `gulp clean` command failed

### 3.0.0
* Updated/decoupled dependencies
* Bump to Skeleton Sass 3 (as part of decoupling process)
* Made it easier for other developers to contribute to the site
* Enforced coding standards with `.editorconfig`
* Fixed bower version issues
* Switched to Gulp
* Deployment of artifacts in `target` directory
* All source code can be found in `source`
    * **Note:** the only exception to this is `index.html` which serves as the entry point to the site.
* Dropped legacy `X-UA-Compatible` meta tag. [See here for more info](http://stackoverflow.com/questions/6771258/what-does-meta-http-equiv-x-ua-compatible-content-ie-edge-do)
