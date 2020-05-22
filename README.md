# video-player
Plays videos with performance.

## Browser Support

Tested on IE11 but it should work IE10+.

## Installation

With npm

```
npm i @hayatbiralem/video-player -S
```

You can download the latest version or checkout all the releases [here](https://github.com/hayatbiralem/video-player/releases).

## Usage

### Browser

You can import this plugin into your project as follows:

```html
<link href="path/to/video-player.css" rel="stylesheet">
<script src="path/to/video-player.js"></script>

<!-- Optional -->
<link href="path/to/vimeo-play.css" rel="stylesheet">
<link href="path/to/youtube-play.css" rel="stylesheet">
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

```js
window.processVideoPlayer();
```

or in Webpack way:

```js
import processVideoPlayer from "video-player/src/js/utils/process";
processVideoPlayer();
```

Only new ones will be processed.

## Examples

By default video player object only contains scaffolding styles so we don't include any cosmetic styles in default but we prepared some for play icons.

```html
<div class="o-video-player" data-url="YOUTUBE_OR_VIMEO_URL">
  <div class="o-video-player__play">
    <!-- your play icon will be here -->
  </div>
</div>
```


### Youtube

```html
<div class="o-video-player" data-url="https://www.youtube.com/watch?v=aKJvbTEnp0I">
  <div class="o-video-player__play">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 68 48"><path fill="#f00" fill-opacity="0.8" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"></path><path d="M 45,24 27,14 27,34" fill="#fff"></path></svg>
  </div>
</div>
```

See the example on [CodePen](https://soon.io)


### Vimeo

```html
<div class="o-video-player" data-url="https://vimeo.com/189662684">
  <div class="o-video-player__play">
    <button type="button" class="c-vimeo-play"></button>
  </div>
</div>
```

See the example on [CodePen](https://soon.io)

### Resets Automatically

When you use multiple video instance at the same page and when you try to play second video, previously playing video resets itself automatically.

See the example on [CodePen](https://soon.io)

### Summary

In short `.o-video-player` object will transform and produce your video with performance and support IE10+.

### Development

Clone this repo, go to the project directory and install dependencies with

```bash
npm install
```

and rebuild dist folder with

```bash
npm run dev
npm run prod
npm run build # alias of prod
```

## TODO

- [ ] Add to the npm directory.

## Contributors

- [Ömür Yanıkoğlu @hayatbiralem](https://twitter.com/hayatbiralem)

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
