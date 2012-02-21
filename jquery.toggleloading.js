;(function ($) {
	$.fn.toggleLoading = function (config) {
		var $window = $(window),
			options = {
				width: 42,
				height: 42,
				background: 'light',
				imagesFolder: '../images',
				speed: 75
			};
		
		if (config) {
			$.extend(options, config);
		}
		
		return this.each(function () {
			var $container = $(this),
				$contents = $container.children(),
				loading = $container.data('loading');
			
			if (!loading) {
				loading = $container.data('loading', {
					$spinner: $(document.createElement('div'))
						.css({
							position: 'absolute',
							width: options.width,
							height: options.height,
							backgroundImage: 'url(' + options.imagesFolder + '/' + ((options.background === 'dark') ? 'spinner-dark.png' : 'spinner-light.png') + ')'
						})
						.addClass('spinner')
						.prependTo($container),
					interval: setInterval(function () {
						loading.$spinner.css({
							backgroundPosition: function (i, v) {
								return "0 " + (parseInt(v.split(" ")[1], 10) - options.height) + "px"
							}
						});
					}, options.speed)
				}).data('loading');

				if ($container.css('position') !== "static") {
					loading.$spinner.css({
						top: '50%',
						left: '50%',
						marginLeft: (options.width / 2) * -1,
						marginTop: (options.height / 2) * -1
					});
				} else {
					$window.on('resize.loading', function () {
						loading.$spinner.css({
							top: $container.position().top + ($container.outerHeight() / 2) - (options.height / 2),
							left: $container.position().left + ($container.outerWidth() / 2) - (options.width / 2)
						});
					}).resize();
				}
			} else {
				clearInterval(loading.interval);
				loading.$spinner.remove();
				
				$window.off('resize.loading');
				$container.removeData('loading');
			}
			
			return this;
		});
	};
}(jQuery));