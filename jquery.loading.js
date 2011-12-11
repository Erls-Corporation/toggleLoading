(function ($) {
	$.fn.toggleLoading = function (config) {
		var options = {
			dim: 1 / 3,
			width: 42,
			height: 42,
			opacity: 3 / 4,
			color: 'light',
			image: 'images/spinner.png',
			speed: 75
		};
		
		if (config) {
			$.extend(options, config);
		}
		
		if (options.color === 'dark') {
			options.image = 'images/spinner-white.png';
		}
		
		return this.each(function () {
			var $this = $(this),
				loading;
			
			loading = $this.data('loading');
			
			if (!loading) {
				$this
					.css('opacity', options.dim)
					.data('loading', {
						spinner: $(document.createElement('div'))
							.css({
								'position': 'fixed',
								'z-index': 1,
								'width': options.width,
								'height': options.height,
								'opacity': options.opacity,
								'background-image': 'url(' + options.image + ')'
							})
							.addClass('spinner')
							.data('color', options.color)
							.insertBefore(this),
						interval: setInterval(function () {
							loading.spinner.css({
								'background-position-y': parseInt(loading.spinner.css('background-position-y'), 10) - options.height
							});
						}, options.speed)
					});
				
				loading = $this.data('loading');
				
				$(window).resize(function () {
					loading.spinner.css({
						'top': $this.offset().top + ($this.height() / 2) - (options.height / 2),
						'left': $this.offset().left + ($this.width() / 2) - (options.width / 2)
					});
				}).resize();
			} else {
				loading.spinner.remove();
				clearInterval(loading.interval);
				
				$this
					.css('opacity', '')
					.removeData('loading');
			}
			
			return this;
		});
	};
}(jQuery));