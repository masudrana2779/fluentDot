

$(document).ready(function () {

	//js for scroll to section content
	$('a[href^="#"]').on('click', function (event) {
		var target = $(this.getAttribute('href'));
		if (target.length) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top - 90
			}, 2000);
		}
	});

	function weAerFluentSlider() {
		//js for weAerFluentSlider
		$('.weAerFluentSlider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: false,
			dots: false,
			//infinite: false,
			responsive: [
				{
					breakpoint: 991,
					settings: {

					}
				},
				{
					breakpoint: 640,
					settings: {
						arrows: false
					}
				}
			]
		});
	}
	weAerFluentSlider();

	function workItemSlider() {
		//js for workItemSlider
		$('.workItemSlider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 3000,
			arrows: false,
			dots: false,
			infinite: false,
			onmousewheel: true,
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 640,
					settings: {
						arrows: false,
						slidesToShow: 1
					}
				}
			]
		});
	}
	workItemSlider();

	function teamItemSlider() {
		//js for teamItemSlider
		$('.teamItemSlider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: false,
			dots: true,
			responsive: [
				{
					breakpoint: 991,
					settings: {

					}
				},
				{
					breakpoint: 640,
					settings: {
						arrows: false
					}
				}
			]
		});
	}
	teamItemSlider();


	/*    // hide #go-top first
		$("#go-top").hide();
		// fade in #go-topp
		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					$('body').fadeIn();
				}
				else {
					$('body').fadeOut();
				}
			});
			// scroll body to 0px on click
		});*/



	$("[data-fancybox]").fancybox({
		buttons: [
			'slideShow',
			'fullScreen',
			//'thumbs',
			//'share',
			//'download',
			// 'zoom',
			'close'
		],
		idleTime: 1,
		protect: false,
		dblclickContent: false,
		scrolling: 'yes',
		centerOnScroll: true,

	});

	function bodyScrollFixedAll() {
		let wScroll = $(window).scrollTop();
		if (wScroll > 50) {
			$('body').addClass('fluentFixed');
		}
		else {
			$('body').removeClass('fluentFixed');
		}
	}

	bodyScrollFixedAll();

	$(window).on('scroll', function () {
		bodyScrollFixedAll();
	});



	$(".mainMenu li").on('click', function () {
		$("#st-container").removeClass('st-menu-open');
	});


});

