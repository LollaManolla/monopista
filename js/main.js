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
// 		var hamburger = $('.hamburgerSticky');
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
//     // #####################################
//     // Video Anchor
//     // #####################################
//
//     WB.videoAnchor = function() {
//         $(".video-anchor").on('touch click' ,function() {
//             $('html, body').animate({
//                 scrollTop: $("#video1").offset().top - 104
//             }, 1000);
//         });
//     }
//
//     // #####################################
//     // Stickyfill | Article sidebar
//     // #####################################
//     WB.stickySidebar = function () {
//         $("#stickySidebar").stick_in_parent();
//     };
//
//     WB.utils.initSocialShare = function () {
//         $j('.sharebox__btn').on('click', function (e) {
//             e.preventDefault();
//             var $this = $j(this),
//                 sharebox_data = $this.closest('.sharebox').data(),
//                 social_data = $this.data(),
//                 counter = $this.find('.number'),
//                 params = $j.extend({window_height: 250}, sharebox_data, social_data),
//                 url = '';
//
//             switch (params.type) {
//                 case 'twitter':
//                     url = 'https://twitter.com/intent/tweet?original_referer=' + encodeURIComponent(params.url) + '&text=' + params.title + '&tw_p=tweetbutton&url=' + encodeURIComponent(params.url) + '&via=' + params.via;
//                     break;
//                 case 'google':
//                     url = 'https://plus.google.com/share?url=' + encodeURIComponent(params.url);
//                     params.window_height = 475;
//                     break;
//                 case 'pinterest':
//                     url = 'http://pinterest.com/pin/create/button/?url=' + encodeURIComponent(params.url) + '&media=' + encodeURIComponent(params.image) + '&description=' + params.title;
//                     params.window_height = 700;
//                     break;
//                 case 'facebook':
//                     url = 'http://www.facebook.com/sharer.php?u=' + encodeURIComponent(params.url);
//                     break;
//             }
//
//             window.open(url, 'sharer', 'toolbar=0,status=0,width=626,height=' + params.window_height + ',top=' + ((window.screen.height - params.window_height) / 2 ) + ',left=' + (window.screen.width / 2 - (313)));
//
//             $j.post("/wbapi/social/incCounter", {content_type: params.contentType, type: params.type, url: params.url, id: params.id});
//             counter.html(parseInt(counter.html()) + 1);
//         });
//     };
//
//     // #####################################
//     // WB SEO LINK
//     // #####################################
//     WB.utils.hrl();
//     $('span.hrl').hrl();
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
// 		        // centerMode: true,
// 		        // centerPadding: '40px',
// 		        slidesToShow: 3,
// 		        slidesToScroll: 1
// 		      }
// 		    },
// 		    {
// 		      breakpoint: 768,
// 		      settings: {
// 		        slidesToShow: 3,
// 		        slidesToScroll: 1
// 		      }
// 		    }
// 		    ]
// 		});
//
// 		var slideNumber = $('.slideBloc').length;
// 		if(slideNumber == 3 && $(window).width() < 1025) {
// 			$(".sliderContainer").draggable({
// 			    axis: "x",
// 			    containment: ".b-productShow"
// 			});
// 		}
// 		if($(window).width()<768 && slideNumber == 3) {
// 			$(".sliderContainer").draggable({
// 			    axis: "x",
// 			    containment: [-200, 0, 250, 0]
// 			});
// 		}
//
//
// 	}
//
// 	WB.tabletNavigation = function(){
// 		$(window).scroll(function() {
// 				 var header = $('.site-header');
// 				 var logo = $('.b-logo');
// 	       hH = header.outerHeight(),
// 	       wH = $(window).height(),
// 	       wS = $(this).scrollTop();
// 			   if (wS > hH){
// 					 		logo.addClass('stickyTablet');
// 							header.addClass('borderBottom');
// 							header.css('background-color','white');
// 			       console.log('H1 on the view!');
// 			   }else{
// 					 header.removeAttr("style");
// 					 logo.removeClass('stickyTablet');
// 					 header.removeClass('borderBottom');
// 				 }
// 		});
// 	}
// 	WB.mobileNavigation = function(){
// 		$(window).scroll(function() {
// 			var header = $('.site-header');
// 			var logo = $('.b-logo');
// 			var hamburger = $('.hamburgerSticky');
// 			hH = header.outerHeight(),
// 			wH = $(window).height(),
// 			wS = $(this).scrollTop();
// 			if (wS > hH){
// 				logo.addClass('stickyMobile');
// 				header.addClass('backgroundNone');
// 				hamburger.addClass('hamburgerStickyNow');
// 			}else{
// 				logo.removeClass('stickyMobile');
// 				header.removeClass('backgroundNone');
// 				hamburger.removeClass('hamburgerStickyNow');
// 			}
// 		});
// 	}
// 	WB.articleDiaporamaPortrait = function(){
// 		$('.slider-for').slick({
// 	  slidesToShow: 1,
// 	  slidesToScroll: 1,
// 	  arrows: true,
// 	  fade: true,
// 	  asNavFor: '.slider-nav'
// 	});
// 	$('.slider-nav').slick({
// 	  slidesToShow: 5,
// 	  slidesToScroll: 1,
// 	  asNavFor: '.slider-for',
// 	  dots: true,
// 	  centerMode: true,
// 	  focusOnSelect: true
// 	});
//
// 	var diaporama = $('.fullscreen');
// 	var button = $('.diaporama--portrait .single-image');
// 	var close = $('.closeDiaporama');
// 	var body = $('html');
// 	button.on('click touch', function(){
// 		diaporama.addClass('openFull');
// 		body.css('overflow-y','hidden');
// 	});
// 	close.on('click touch', function(){
// 		body.css('overflow-y','scroll');
// 		diaporama.removeClass('openFull');
// 	})
// 	}
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
// 		WB.articleDiaporamaPortrait();
//
// 		enquire.register("screen and (min-width:1025px)", function() {
// 			WB.submenuOpen();
// 		});
// 		enquire.register("screen and (max-width:1024px)", function() {
// 			WB.mobileMenu();
// 		});
// 		enquire.register("screen and (min-width:768px) and (max-width:1024px)", function() {
// 			WB.tabletNavigation();
// 		});
// 		enquire.register("screen and (max-width:767px)", function() {
// 			WB.mobileNavigation();
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
