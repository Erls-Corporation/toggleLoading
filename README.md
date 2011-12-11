# jQuery Loading Plugin

This plugin is designed to place an alpha transparent spinner nicely on top of dynamically loading content.

## Why?

There are currently no spinner plugins that use an alpha transparent PNG, rather they all use horribly animated GIFs. I think that's kind of old school. And since support for animated PNGs is still quite far off, this plugin proposes an alternative solution by utilising CSS background position to recreate the desired effect.

## Use

Save the plugin to your website, and store the spinner images in your `images` folder.

By default the plugin assumes your images folder is named `images` in the root directory. You may have to use the `imagesFolder` option to correctly point the plugin to your `images` folder.

After that, you can simply toggle loading state on an element using the following code:

`$('#container').toggleLoading();`

### Options

#### Example

	$('#container').toggleLoading({
		dim: 1 / 2,
		color: 'dark',
		speed: 50
	});

`dim` is used to control the opacity of the loading elements. It accepts values from 0 to 1, and false (or 0) if you want it disabled.

All other options are used control the spinner. Change these if you want to use your own sprite for the spinner.

#### Defaults

	{
		dim: 2 / 3,
		width: 42,
		height: 42,
		opacity: 3 / 4,
		color: 'light',
		imagesFolder: '../images',
		speed: 75
	}