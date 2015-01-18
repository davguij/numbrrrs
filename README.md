# numbrrrs -- It's a numbers _(trivia)_ game
**numbrrrs** is a trivia-style game with a twist. The answer to every question in the game is a number between 0 and 1,000.

##How to play
The game is very simple. Each game consists of 10 rounds.
When you start playing, you'll see a description, such as _"The number of grams in an ounce (approximately), and used as such in the illegal drug trade."_
You'll also see a text field, a slider and a big lone button.
Enter a number between 0 and 1,000 that you think fits with the description and hit the button to check if you're right.
For each right answer, you'll get one point.
The game ends after ten rounds, so the best possible score is 10 points.
That's pretty much it. Good luck!

##How it's build
**numbrrrs** uses a few techs and gimmicks, namely:
 - The so cool [Numbers API](http://numbersapi.com/ "Numbers API") by [David Hu](http://david-hu.com/) and [Mack Duan](http://mduan.com/). Thanks to both for putting it up. Also, the API is consumed through [Mashape](https://www.mashape.com/divad12/numbers).
 - [AngularJS](https://angularjs.org/) and the [Angular Material Design project](https://material.angularjs.org/).
 - Just a little bit of [SASS](http://sass-lang.com/).
 - [Yeoman](http://yeoman.io/), with the usual [Bower](http://bower.io/) and [Gulp.js](http://gulpjs.com/), wrapped by the awesome [gulp-angular generator](https://github.com/Swiip/generator-gulp-angular). I actually want to mention the "wiredep" task, it works like a charm and saves a ton of time and headaches.
 - GitHub Pages for automated deployment, through the [gulp-gh-pages](https://github.com/rowoot/gulp-gh-pages) plugin.

###Why AngularJS
I'm aware AngularJS isn't probably the best choice to build such a small project like this. I built it with AngularJS because I was interested in learning a bit more about the framework and I wanted to have a bit of fun at the same time!

##How to contribute
Changes and improvements are more than welcome! Feel free to fork and open a pull request in the `master` branch. Thanks!
