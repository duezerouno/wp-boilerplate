# WP Boilerplate
A custom WordPress theme development boilerplate using SCSS, Timber, Barba.js, Babel, and Webpack.

### Features
1. SCSS minified using cssnano and autoprefixed
2. JS bundled using Webpack and Babel
3. Preloader section
4. Browser & device detection
5. Event emitter using Barba dispatcher
6. Transition map for managing GSAP transitions
7. Advanced custom fields for Open Graph / Social meta tags

### Getting Started
- Set up a local instance of WordPress
- Install and activate required plugins:
  - Timber
  - ACF
- Create a symlink to the built theme folder
```sh
# With a local WP install in
# ~/Documents/Sites/wordpress
# and this repo on your desktop:
ln -s ~/Desktop/wp-boilerplate/build ~/Documents/Sites/wordpress/wp-content/themes/wp-boilerplate
```
### Install dependancies:
```
yarn
```
### Start development server
```
yarn start
```
The project will be launched at http://localhost:3000/
### Build for production:
```
yarn build
```
