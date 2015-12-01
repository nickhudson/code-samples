jQuery(document).ready(function(){
	
	// SmoothScroll & Page anchor functions
	
	smoothScroll.init({
		selector: '[data-scroll]',
		selectorHeader: '[data-scroll-header]',
		speed: 800,
		easing: 'easeInOutCubic', 
		updateURL: true,
		offset: 0,
		callback: function (toggle, anchor) {}
	});
	
	$('.nav-wrapper').sticky({});
	
	function updateHref() {
		$('nav a').each(function() {
			var that = this;
			if (that.href == window.location.href) {
				$('a').removeClass('active');
				$(that).addClass('active');
			}
			else if (window.location.hash == '#top' || window.location.hash == '#bottom') {
				$('a').removeClass('active');
			}
			$(that).click(function() {
				$('a').removeClass('active');
				$(that).addClass('active');
		   });
		});
	};
	
	var currentHash = '#top'
	var scrollTimer;
	
    $(document).scroll(function () {
		clearTimeout(scrollTimer);
		scrollTimer = setTimeout(function() {
			$(window).trigger("scrollStop");
		}, 250);
        var scrollHash = $('.anchor').each(function () {
			scrollTimer = null;
            var top = window.pageYOffset;
            var distance = top - $(this).offset().top;
            var hash = $(this).attr('href');
            if (distance < 10 && distance > -10 && currentHash != hash) {
                window.location.hash = $(this).attr('id');
            }
        });
		$(window).bind("scrollStop", function() {
		  	// window.location.hash = $(document).closest('.anchor').attr('id');
		});
    });
	
	updateHref(window.addEventListener('hashchange', updateHref, false));
	
	// Unslider Slider

	var unslider = $('.slideshow').unslider({
		speed: 500,
		delay: false,
		keys: true,
		dots: true,
		fluid: false,
		complete: function() {
			$('.slideshow ul li').each(function(index) {
				var currentDot = $('.dots li.active');
				var that = this;
				if (that.index == currentDot.index) {
					$(that).addClass('current-slide');
				}
			});
		}
	});
	    
    $('.unslider-arrow').click(function() {
        var fn = this.className.split(' ')[1];
        unslider.data('unslider')[fn]();
    });
	
	function slideContent() {
		var slideImg = $('.slideshow ul li img');
		var contentParent = $('.slideshow .caption');
		var content = $('.slideshow .caption div');
		contentParent.css({
			'float' : 'left', 
			'position' : 'relative', 
			'top' : (slideImg.height() - content.height()) / 2 
		});
	};
	
	$('header .social a').sharer({			
		screen_name: 'Bloomingdales',			
		window: {								
			width: 400,
		  	height: 500
		},										
		onshare: null,	
	});
		
	$(window).resize(function() {
		
		slideContent();
	
	}).trigger('resize');
	
	document.addEventListener('DOMContentLoaded', slideContent);
	window.onload = slideContent;
	window.onresize = slideContent;
		   
});