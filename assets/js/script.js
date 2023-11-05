/* 
--------------------------------------------------------------------
Template Name: 	    Hop | Hop Business Landing Page
Version:            1.00
Author:             Zahid Hasan Munna | Developer Zahid
Author Occupation: 	Frontend Web Design & Developer
Author Whatsapp:    https://wa.me/8801992409030
Author Linkedin:    https://www.linkedin.com/in/zahid-hasan-munna/
Author Facebook:    https://www.facebook.com/coderexpertzahid/
Author Website:     https://developer-zahid-portfolio.netlify.app/
Author Email: 	    dgtaltechzahidhasan@gmail.com
---------------------------------------------------------------------
*/

(function ($) {
    "use strict"

	/* Preloader init */
	function preLoader(){
		if($(".preloader").length > 0){
			$(".preloader").delay(300).fadeOut("slow")
		}
	}

	function headerHeightFixer(){
		$('.header-height-fix').css('height', $('header').innerHeight() +'px')
		$('html').css('--header-size', $('header').innerHeight() +'px')
	}

	function getScrollbarWidth(){
		return (window.innerWidth - $(document).width())
	}

	/* Window on load Event */
	$(window).on('load', function () {
        preLoader()
    })
	
	/* Document on ready Event */
	$(document).ready(function () {
		getScrollbarWidth()

		$('header').before('<div class="header-height-fix"></div>')
		headerHeightFixer()

		$('.navbar__nav__dropdown-menu').each(function(index, item){
			$(this).css('--_height', item.getBoundingClientRect().top + item.getBoundingClientRect().height + 'px')
		})

		$('[data-toggle="menu"').on('click', function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active')
				$('.header').removeClass('active')
				$('.header').css('padding-right', '')
				$('body').css('padding-right', '')
				$('body').removeClass('overflow-hidden')
			}else{
				$(this).addClass('active')
				$('.header').addClass('active')
				$('.header').css('padding-right', getScrollbarWidth() + 'px')
				$('body').css('padding-right', getScrollbarWidth() + 'px')
				$('body').addClass('overflow-hidden')
			}
		})

		if(window.matchMedia("(max-width: 991.98px)").matches){
			$('.navbar__nav__link').on('click', function(){
				if($(this).hasClass('show')){
					$(this).removeClass('show')
					$(this).siblings('.navbar__nav__dropdown-menu').slideUp()
				}else{
					$(this).addClass('show')
					$(this).siblings('.navbar__nav__dropdown-menu').slideDown()
				}
			})
		}
	})

	/* Window on scroll Event */
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();
		if (scrolling > 200) {
			$(".header").addClass('sticky');
		} else {
			$(".header").removeClass('sticky');
		}
	});

})(jQuery)