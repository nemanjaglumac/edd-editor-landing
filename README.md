# Edd Editor Landing Page

[Coding challenge/exercise: turning a design concept (.sketch file) into web page.](/TASK.md)

> Edd is a (fake) code editor and this is a landing page created for it.

## Live version hosted on Github pages

[Edd Editor Landing Page](https://nemanjaglumac.github.io/edd-editor-landing/)

## Source

* [Dribble](https://dribbble.com/shots/3304769-Edd-Landing-Page-sketch)
* [Webflow template](http://edd-landing-page.webflow.io)
* If you like this design and would like to support the designer, you can also consider buying this from [Gumroad](https://gumroad.com/uzers)

## Development setup
If you would like to experiment with this code on your own machine, start by cloning the repo to a desired location on your machine.

### Installing

To install libraries listed in `package.json` use terminal window to navigate to the directory with cloned files, then run:

```
npm install
```

### Gulp tasks

* `gulp styles` - compile, minify and auto-prefix styles
* `gulp html` - compile and output HTML files using Nunjucks (.njk) or HTML files as starting point
* `gulp images` - scan for images and minify them
  * during dev phase it's recommended that you keep image minification turned off (commented out)
  * don't forget to turn it on before you deploy code
  * for additional options and fine tuning, please refer to [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) documentation

* `gulp` - runs all of the above tasks and spins a local server on your machine, served from `dist` folder on port 3000. It will automatically reload on saved changes.

## Deployment

The project is set up for hosting on Github Pages. Simply run `gulp deploy`.

_Note:_ refer to [gulp-gh-pages](https://www.npmjs.com/package/gulp-gh-pages) for specifics about this setup.

## Built With

* [Nunjucks](https://mozilla.github.io/nunjucks/) - Templating engine
* [Sass](https://sass-lang.com/documentation/file.SASS_REFERENCE.html) - CSS preprocessor
* [jQuery](https://jquery.com) - JavaScript library

## License

This project is licensed under the MIT License. You are free to do whatever you want with this code, but please don't forget to give proper credit to the designer.

## Acknowledgments

* Designer: [Alan Podemski](https://dribbble.com/alanpodemski)
* [README Template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)

### Thanks to
* @hyperNURb and @ssf01 for the patience, shared knowledge and support
* @nenadjelovac who had introduced me to [inuitcss](https://github.com/inuitcss/inuitcss). My code is greatly influenced by their beautiful guidelines and I often use many of the concepts and/or tools from the framework directly
