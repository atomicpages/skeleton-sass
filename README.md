Skeleton Sass Demo
===================

Skeleton Sass Demo is a place to outline a sample project using Skeleton Sass 3 and how to accurately decouple existing and new code from the Skeleton Sass 3 core. This can also serve as a good starting point for your next project with Skeleton Sass. Feel free to fork and create demos of your own!

### What you'll need
* [Node](https://nodejs.org/)
* [Npm](https://www.npmjs.com/)
* [Bower](https://www.npmjs.com/package/bower)

This demo uses gulp to automate the task of compiling/watching the Sass code. It also handles things like automate sourcemapping in your `skeleton.css` file, separating files into a development and production state, and more.

With node installed simply run the following from command line:

~~~bash
cd path/to/demo
npm install && bower install
gulp dist
~~~

If you're new to working with node, npm, bower, and gulp, then we'll break it down:

~~~bash
npm install
~~~

This command installs all of the dependencies needed to get gulp working correctly.

~~~bash
bower install
~~~

This command installs all of our frontend dependencies and allows us to manage these. We can easily add new components into an existing project, uninstall components, and update dated components as well!

~~~bash
gulp dist
~~~

This command invokes a gulp task called `dist` which in turn fires up the `sass` compiler. Check out the [npm module page](https://www.npmjs.com/package/gulp) for additional information.

After running the command above, you'll notice a `target` directory was created. This is our production-ready directory. You're ready to create!

### License
This project is released under the MIT License. Check the `license.txt` file for the full script.

### Contributing
Found a bug? Have an enhancement? Submit a pull request with your changes and we'll give you come public recognition!
