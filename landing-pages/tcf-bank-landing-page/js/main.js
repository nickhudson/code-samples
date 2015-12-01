// Main JS File -- TCF Bank

// Unslider Slider

	$(function() {
		$('.hero-wrapper').unslider({
			speed: 500,               //  The speed to animate each slide (in milliseconds)
			delay: 3000,              //  The delay between slide animations (in milliseconds)
			complete: function() {},  //  A function that gets called after every slide animation
			keys: true,               //  Enable keyboard (left, right) arrow shortcuts
			dots: true,               //  Display dot navigation
			fluid: false              //  Support responsive design. May break non-responsive designs
		});
	});
	
	var unslider = $('.hero-wrapper').unslider();
    
    $('.unslider-arrow').click(function() {
        var fn = this.className.split(' ')[1];
        
        //  Either do unslider.data('unslider').next() or .prev() depending on the className
        unslider.data('unslider')[fn]();
    });

// End Unslider Slider

// Parallax Scripts

	// Init Controller
	var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
	
	// Build Scenes
	new ScrollMagic.Scene({triggerElement: "#parallax1"})
					.setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
					// .addIndicators()
					.addTo(controller);
	
	new ScrollMagic.Scene({triggerElement: "#parallax2"})
					.setTween("#parallax2 > div", {y: "80%", ease: Linear.easeNone})
					// .addIndicators()
					.addTo(controller);
	
	new ScrollMagic.Scene({triggerElement: "#parallax3"})
					.setTween("#parallax3 > div", {y: "80%", ease: Linear.easeNone})
					// .addIndicators()
					.addTo(controller);
					
// End Parallax Scripts

jQuery(document).ready(function(){
	
	function centerContent() {
		var container = $( '.hero-wrapper ul li' );
		var content = $( '.hero-wrapper ul li div' );
		content.css({ 'position' : 'relative', 'top' : (container.height() - content.height()) / 2, 'left' : (container.width() - content.width()) / 2 });
		
		$( '.unslider-arrow-wrapper' ).css({top : ($( '.unslider-arrow-wrapper' ).height() - container.height()) / 1.50});
	}
		
	$(window).resize(function() {

		$( '.hero-wrapper' ).css({
			height : ($(window).width() * 0.5),
			width: $(window).width()
		});
		
		$( '.hero-wrapper ul li' ).css({height : $( '.hero-wrapper' ).height()});
				
		jQuery.fn.center = function () {
			this.css( 'margin-left', Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
				$(window).scrollLeft()) + 'px' );
			return this;
		}
		
		centerContent();
	
	}).trigger( 'resize' );
});