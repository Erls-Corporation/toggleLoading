# jQuery Loading Plugin

This plugin is designed to place an alpha transparent spinner nicely on top of dynamically loading content.

## Why?

There are currently no spinner plugins that use an alpha transparent PNG, rather they all use horribly animated GIFs. I think that's kind of old school. And since support for animated PNGs is still quite far off, this plugin proposes an alternative solution by utilising the CSS `background-position` property to recreate the desired effect.

## Use

Save the plugin to your website, and store the spinner images in your `images` folder.

By default the plugin assumes your images folder is named `images` in the root directory. You may have to use the `imagesFolder` option to correctly point the plugin to your `images` folder.

After that, you can simply toggle loading state on an element using the following code:

`$('#container').toggleLoading();`

### Options

#### Example

	$('#container').toggleLoading({
		background: 'dark',
		speed: 50
	});

`background` has two options: `light` (default) and `dark`. This information is used to provide the best spinner image for you.

All other options are used control the spinner. Change these if you want to use your own sprite for the spinner.

#### Defaults

	options = {
		width: 42,
		height: 42,
		background: 'light',
		imagesFolder: '../images',
		speed: 75
	};