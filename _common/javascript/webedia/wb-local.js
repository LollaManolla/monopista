(function($){
	WB = WB || {};


	var open = function(button, addClass){
	popup = $('.popup');
	button = $(button);
	button.on('click touch', function(){
		popup.addClass(addClass);
	});
	}

	var close = function(buttonClose, removeClass){
		buttonClose = $(buttonClose);
		buttonClose.on('click touch', function(){
			popup.removeClass(removeClass);
		});
	}

	WB.searchPopup = function() {
		enquire.register("screen and (min-width:1025px)", function() {
			open('.icon-search', 'open');
			close('.closePopup', 'open');
		});
	}
	WB.submenuOpen = function(){
			var link = $('.c-menu__item');
			link.mouseover(function(){
				if ( $(this).children('.c-menu--submenu').length > 0 ){
					$(".hoverMask").css("opacity", "1");
				}
			});
			$('.b-push').mouseover(function(){
				$(".hoverMask").css("opacity", "0");
			});
	}
	WB.mobileMenu = function (){
		var hamburger = $('.hamburger');
		var hamburgerClose = $('.hamburger-close');
		var menu = $('.tabletMenu');
		var link = $('.c-menu__item > a');
		var submenu = $('.c-menu--submenu');
		hamburger.on('click touch', function(){
			menu.addClass('menuOpen');
		});
		hamburgerClose.on('click touch', function(){
			menu.removeClass('menuOpen');
			submenu.removeClass('openSubmenu');
		});
		link.on('click touch', function(e){
			e.preventDefault();
			submenu.removeClass('openSubmenu');
			$(this).parent().find(submenu).addClass('openSubmenu');
		});
	}


	//sliderMostRead
	//mostRead slider
WB.mostreadSlider = function() {
		// function slickify(){
			$('.mostread-slider').slick({
				draggable: true,
				touchMove: true,
				responsive: [
					{
						breakpoint:9999,
						settings: "unslick"
					},
					{
						breakpoint: 1025,
						settings: {
							swipe        : true,
							draggable    : true,
							swipeToSlide : true,
							dots : false,
							arrows: false,
							variableWidth: true,
							slidesToShow: 2,
						}
					}

				]
			});
		$(window).resize(function () {
			$('.mostread-slider').slick('resize');
		});

		$(window).on('orientationchange', function () {
			$('.mostread-slider').slick('resize');
		});

	}






	// Fire functions when page is ready
	$(document).ready(function() {
		WB.searchPopup();
		WB.mostreadSlider();

		enquire.register("screen and (min-width:1025px)", function() {
			WB.submenuOpen();
		});
		enquire.register("screen and (max-width:1024px)", function() {
			WB.mobileMenu();
		});
	});

	// Fire functions after load page
	WB.utils.addLoadEvent(function () {

	});




})(jQuery);
