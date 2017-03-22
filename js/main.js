//move header down
$(document).ready(function(){
		var mainContainer = $('section.main-content');
		var header = $('.site-header');
		var marginTop = header.outerHeight();
		mainContainer.css('margin-top', marginTop + 'px');
});

//mostRead slider
$(document).ready(function(){
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
});

//product slider
$(document).ready(function(){
	$('.sliderContainer').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		 responsive: [
		{
				breakpoint: 1024,
				settings: {
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			}
			]
	});
});

//
// (function($){
// 	WB = WB || {};
//
//
// 	var open = function(button, addClass){
// 	popup = $('.popup');
// 	button = $(button);
// 	button.on('click touch', function(){
// 		popup.addClass(addClass);
// 	});
// 	}
//
// 	var close = function(buttonClose, removeClass){
// 		buttonClose = $(buttonClose);
// 		buttonClose.on('click touch', function(){
// 			popup.removeClass(removeClass);
// 		});
// 	}
//
// 	WB.searchPopup = function() {
// 		enquire.register("screen and (min-width:1025px)", function() {
// 			open('.icon-search', 'open');
// 			close('.closePopup', 'open');
// 		});
// 	}
// 	WB.submenuOpen = function(){
// 			var link = $('.c-menu__item');
// 			var hover = $('.hoverMask');
// 			var submenu = $('.c-menu--submenu');
// 			$('.c-menu__item').mouseover(function(){
// 				$('.c-menu--submenu').removeClass('openSubmenu');
// 			});
// 			link.mouseover(function(){
// 				if ( $(this).children('.c-menu--submenu').length > 0 ){
// 					hover.css("opacity", "1");
// 					$('.c-menu--submenu').addClass('openSubmenu');
// 				}else{
// 					$(".hoverMask").css("opacity", "0");
// 					$('.c-menu--submenu').removeClass('openSubmenu');
// 				}
// 			});
// 			$('section.main-content, .b-logo').mouseover(function(){
// 				$(".hoverMask").css("opacity", "0");
// 				$('.c-menu--submenu').removeClass('openSubmenu');
// 			});
// 	}
// 	WB.paginationFix = function(){
// 		var prevNumber = $('li.pagePrev');
// 		var nextNumber = $('li.pageNext')
// 		prevNumber.next().css('padding-left','5.5rem');
// 		nextNumber.prev().css('padding-right','3.5rem');
// 	}
// 	WB.mobileMenu = function (){
// 		var hamburger = $('.hamburger');
// 		var hamburgerClose = $('.hamburger-close');
// 		var menu = $('.tabletMenu');
// 		var link = $('.c-menu__item > a');
// 		var submenu = $('.c-menu--submenu');
// 		hamburger.on('click touch', function(){
// 			menu.addClass('menuOpen');
// 		});
// 		hamburgerClose.on('click touch', function(){
// 			menu.removeClass('menuOpen');
// 			submenu.removeClass('openSubmenu');
// 		});
// 		link.on('click touch', function(e){
// 			e.preventDefault();
// 			submenu.removeClass('openSubmenu');
// 			$(this).parent().find(submenu).addClass('openSubmenu');
// 		});
// 	}
// 	WB.moveMainContainer = function (){
// 		var mainContainer = $('section.main-content');
// 		var header = $('.site-header');
// 		var marginTop = header.outerHeight();
// 		mainContainer.css('margin-top', marginTop + 'px');
// 	}
//
// 	//sliderMostRead
// 	//mostRead slider
// WB.mostreadSlider = function() {
// 		// function slickify(){
// 			$('.mostread-slider').slick({
// 				draggable: true,
// 				touchMove: true,
// 				responsive: [
// 					{
// 						breakpoint:9999,
// 						settings: "unslick"
// 					},
// 					{
// 						breakpoint: 1025,
// 						settings: {
// 							swipe        : true,
// 							draggable    : true,
// 							swipeToSlide : true,
// 							dots : false,
// 							arrows: false,
// 							variableWidth: true,
// 							slidesToShow: 2,
// 						}
// 					}
//
// 				]
// 			});
// 		$(window).resize(function () {
// 			$('.mostread-slider').slick('resize');
// 		});
//
// 		$(window).on('orientationchange', function () {
// 			$('.mostread-slider').slick('resize');
// 		});
//
// 	}
//
// 	//Product SLIDER
//
// 	WB.productSlider = function(){
// 		$('.sliderContainer').slick({
// 		  slidesToShow: 4,
// 		  slidesToScroll: 4,
// 		  prevArrow: $('.prev'),
// 		  nextArrow: $('.next'),
// 		   responsive: [
// 		  {
// 		      breakpoint: 1024,
// 		      settings: {
// 		        centerMode: true,
// 		        centerPadding: '40px',
// 		        slidesToShow: 3
// 		      }
// 		    },
// 		    {
// 		      breakpoint: 768,
// 		      settings: {
// 		        slidesToShow: 3
// 		      }
// 		    }
// 		    ]
// 		});
// 	}
//
//
//
//
//
//
// 	// Fire functions when page is ready
// 	$(document).ready(function() {
// 		WB.searchPopup();
// 		WB.mostreadSlider();
// 		WB.productSlider();
// 		WB.moveMainContainer();
// 		WB.paginationFix();
//
// 		enquire.register("screen and (min-width:1025px)", function() {
// 			WB.submenuOpen();
// 		});
// 		enquire.register("screen and (max-width:1024px)", function() {
// 			WB.mobileMenu();
// 		});
// 	});
//
// 	// Fire functions after load page
// 	WB.utils.addLoadEvent(function () {
//
// 	});
//
//
//
//
// })(jQuery);
