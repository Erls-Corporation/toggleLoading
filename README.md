# jQuery Loading Plugin

This plugin is designed to place an alpha transparent spinner nicely on top of dynamically loading content.

## Why?

There are currently no spinner plugins that use an alpha transparent PNG, rather they all use horribly animated GIFs. I think that's kind of old school. And since support for animated PNGs is still quite far off, this plugin proposes an alternative solution by utilising CSS background position to recreate the desired effect.

## How to use

`$('#container').toggleLoading();`

### Default options

    var options = {
		dim: 1/3,
		width: 42,
		height: 42,
		opacity: 3/4,
		color: 'light',
		image: 'images/spinner.png',
		speed: 75
	};