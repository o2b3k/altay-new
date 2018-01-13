$(document).ready(function () {
	'use strict'
	$('.estate ').slick({
		dots: false,
		infinite: true,
		arrow: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		speed: 500,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		autoplay: true,
	});
	$('.service ').slick({
		dots: false,
		infinite: true,
		arrow: true,
		speed: 500,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		autoplay: true,
	});

	$('.custom_item-esate').slice(0, 5).show();
	$('#loadMore').on('click', function(e){
		e.preventDefault();
		$('.custom_item-esate:hidden').slice(0, 3).slideToggle();
			if($(".custom_item-esate:hidden").length == 0){
				$('#loadMore').fadeOut('slow');
			};
			$('html,body').animate({
				scrollTop: $(this).offset().top
			}, 1500);
	});

	$('.phone_btn').on('click', function(){
		$('.navbar-nav').slideToggle(500);
	});
	$(window).resize(function(){
		if($(window).width() > 992){
			$('.menu').css('display', 'flex!important')
		}
	})
});