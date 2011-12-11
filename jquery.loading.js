(function ($) {
	$.fn.toggleLoading = function (config) {
		var image,
			options = {
				dim: 2 / 3,
				width: 42,
				height: 42,
				opacity: 3 / 4,
				background: 'light',
				imagesFolder: '../images',
				speed: 75
			};
		
		if (config) {
			$.extend(options, config);
			
			if (options.dim === false) {
				options.dim = '';
			}
		}
		
		image = options.imagesFolder + '/' + ((options.background === 'dark') ? 'spinner-white.png' : 'spinner.png');
		
		return this.each(function () {
			var $this = $(this),
				$contents = $this.children(),
				loading = $this.data('loading');
			
			if (!loading) {
				$this.data('loading', {
					spinner: $(document.createElement('div'))
						.css({
							'position': 'absolute',
							'z-index': 1,
							'width': options.width,
							'height': options.height,
							'opacity': options.opacity,
							'background-image': 'url(' + image + ')'
						})
						.addClass('spinner')
						.insertBefore(this),
					interval: setInterval(function () {
						loading.spinner.css({
							'background-position-y': parseInt(loading.spinner.css('background-position-y'), 10) - options.height
						});
					}, options.speed)
				});
				
				$contents.css('opacity', options.dim);
				
				loading = $this.data('loading');
				
				$(window).resize(function () {
					loading.spinner.css({
						'top': $this.position().top + ($this.height() / 2) - (options.height / 2),
						'left': $this.position().left + ($this.width() / 2) - (options.width / 2)
					});
				}).resize();
			} else {
				loading.spinner.remove();
				clearInterval(loading.interval);
				
				$contents.css('opacity', '');
				
				$this.removeData('loading');
			}
			
			return this;
		});
	};
}(jQuery));