# video-player
Plays videos with performance.

## Installation

With npm

```
npm i video-player -S
```

You can download the latest version or checkout all the releases [here](https://github.com/hayatbiralem/video-player/releases).

## Usage

### Browser

You can import this plugin into your project as follows:

```html
<link href="path/to/video-player.min.css" rel="stylesheet">
<link href="path/to/video-player.min.css" rel="stylesheet">
<link href="path/to/video-player.min.css" rel="stylesheet">
<script src="path/to/video-player.min.js" defer async></script>
```

.. and you're ready to go.

### Webpack

If you want to import the plugin with your webpack build you can do it by:

```js
import "video-player";
```

You should look at `sass-loader` implementation on [webpack documentation](https://webpack.js.org/loaders/sass-loader/).

### Refresh

You can process new dynamic contents by calling:

```
window.processVideoPlayer();
```

or in Webpack way:

```js
import processVideoPlayer from "video-player/src/js/utils/process";
processVideoPlayer();
```

Only new ones will be processed.

## Examples

In default video player object only contains scaffolding styles so we don't include any cosmetic styles in default but we prepared some.

### Youtube

```
<div class="o-video-player" data-url="https://www.youtube.com/watch?v=aKJvbTEnp0I">
  <div class="o-video-player__play">
    <!-- your play icon will be here -->
  </div>
</div>
```

See the example on [CodePen](https://soon.io)

### Resets Automatically

When you use multiple video instance at the same page and when you try to play second video, previously playing video resets itself automatically.

See the example on [CodePen](https://soon.io)

### Summary

In short `.o-video-player` object will transform and produce your video with performance.

### Development

Clone this repo, go to the project directory and install dependencies with

```
npm install
```

and rebuild dist folder with

```
npx webpack
```

## TODO

- [ ] Add to the npm directory.

## Contributors

- [Ömür Yanıkoğlu @hayatbiralem](https://twitter.com/hayatbiralem)

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
