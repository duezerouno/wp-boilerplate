# WP Boilerplate

## Getting Started

With a local instance of WordPress and Timber installed, it's easy to get started.

Install dependencies with `yarn`

Use `yarn build` to bundle js and css files and generate `build` folder using Webpack.

The `build` folder is your theme. In order to view it, you will need to create a symbolic link, or symlink so your local instance of WordPress thinks that your `build` folder is inside the `wp-content/themes` folder. Here is an example:

```sh
# with a local wp install `~/Documents/Sites/wordpress` and this repo on your desktop...
ln -s ~/Desktop/wp-boilerplate/build ~/Documents/Sites/wordpress/wp-content/themes/wp-boilerplate
```
Now you should see a little alias to the `build` folder inside your `wp-content/themes` folder. Now you can run `yarn start` to initialize `browser-sync` via the `browser-sync-webpack-plugin` which will proxy your local WordPress instance and trigger a browser reload when Webpack updates.
