# [plane-view](https://pgsil.github.io/plane-view/)
This is a SPA that shows plane blueprints *roughly* to scale so you can compare them.

## Features:
* Uses SVG for perfect scaling on any zoom level and resolution
* Uses React states for enabling and disabling planes - only active planes are loaded, which is great because SVG can be a bit performance-intensive!
* Also uses states for changing the view type: top, side and front
* CSS-powered zoom, both so you can fit an A380 on your viewport and so that you can check out those neat vector details
* Draggable planes thanks to [react-draggable](https://github.com/mzabriskie/react-draggable)

![imagepreview](http://i.imgur.com/f7Xofca.png)

Bootstrapped using [create-react-app](https://github.com/facebookincubator/create-react-app), deployed using [gh-pages](https://github.com/tschaub/gh-pages)
