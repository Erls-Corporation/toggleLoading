(function ($) {
	$.fn.loading = function (config) {
		var options = {
				width: 42,
				height: 42,
				opacity: 3/4,
				speed: 50,
				dim: 3/4
			};
		
		if (config) {
			$.extend(options, config)
		}
		
		return this.each(function () {
			var $this = $(this),
				spinner;
			
			spinner = $(document.createElement('div'))
				.attr('id', 'spinner')
				.insertBefore(this)
				.css({
					'position': 'fixed',
					'z-index': 3,
					'width': options.width,
					'height': options.height,
					'opacity': options.opacity,
					'background-image': 'url(http://dl.dropbox.com/u/32786096/spinner.png)'
				});
			
			$(window).resize(function () {
				spinner.css({
					'top': $this.offset().top + ($this.height() / 2) - (options.height / 2),
					'left': $this.offset().left + ($this.width() / 2) - (options.width / 2)
				});
			}).resize();
			
			setInterval(function () {
				spinner.css({
					'background-position-y': parseInt(spinner.css('background-position-y'), 10) - options.height
				});
			}, options.speed);
			
			/*
				Eventually this will dim the container that is loading. However, currently the opacity drop causes a glitch with the background on the spinner
				
				$this.css('opacity', options.dim);
			*/
			
			return this;
		});
	};
})(jQuery);