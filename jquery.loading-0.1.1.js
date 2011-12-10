(function ($) {
	$.fn.toggleLoading = function (config) {
		var options = {
				width: 42,
				height: 42,
				opacity: 3/4,
				speed: 50,
				dim: 1/2
			};
		
		if (config) {
			$.extend(options, config)
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
							.attr('id', 'spinner')
							.insertBefore(this)
							.css({
								'position': 'fixed',
								'z-index': 3,
								'width': options.width,
								'height': options.height,
								'opacity': options.opacity,
								'background-image': 'url(http://dl.dropbox.com/u/32786096/spinner.png)'
							}),
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
})(jQuery);