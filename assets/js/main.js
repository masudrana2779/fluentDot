$(document).ready(function () {
  //js for scroll to section content
  function scrollTop() {
    $('a[href^="#"]').on("click", function (event) {
      var target = $(this.getAttribute("href"));
      if (target.length) {
        event.preventDefault();
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: target.offset().top - 150,
            },
            2000
          );
      }
    });
  }
  scrollTop();

  function weAerFluentSlider() {
    //js for weAerFluentSlider
    $(".weAerFluentSlider").slick({
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
          settings: {},
        },
        {
          breakpoint: 640,
          settings: {
            arrows: false,
          },
        },
      ],
    });
  }
  weAerFluentSlider();

  function workItemSlider() {
    //js for workItemSlider
    $(".workItemSlider").slick({
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
          },
        },
        {
          breakpoint: 640,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
      ],
    });
  }
  workItemSlider();

  function teamItemSlider() {
    //js for teamItemSlider
    $(".teamItemSlider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {},
        },
        {
          breakpoint: 640,
          settings: {
            arrows: false,
          },
        },
      ],
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
  function Imgfancybox() {
    $("[data-fancybox]").fancybox({
      buttons: [
        "slideShow",
        "fullScreen",
        //'thumbs',
        //'share',
        //'download',
        // 'zoom',
        "close",
      ],
      idleTime: 1,
      protect: false,
      dblclickContent: false,
      scrolling: "yes",
      centerOnScroll: true,
    });
  }
  Imgfancybox();

  function bodyScrollFixedAll() {
    let wScroll = $(window).scrollTop();
    if (wScroll > 50) {
      $("body").addClass("fluentFixed");
    } else {
      $("body").removeClass("fluentFixed");
    }
  }

  bodyScrollFixedAll();

  $(window).on("scroll", function () {
    bodyScrollFixedAll();
  });

  function mainMenuOnClick() {
    $(".mainMenu li").on("click", function () {
      $("#st-container").removeClass("st-menu-open");
    });
  }
  mainMenuOnClick();

  function pageHorigentalScroll() {
    TweenLite.defaultEase = Linear.easeNone;
    var titles = document.querySelectorAll(".sectionTitle");
    var controller = new ScrollMagic.Controller();
    var tl = new TimelineMax();

    // create timeline
    // this could also be created in a loop
    tl.to("#js-slideContainer", 1, { xPercent: -20 }, "label1");
    tl.from(titles[1], 0.5, { opacity: 0 }, "label1+=0.5");
    tl.to("#js-slideContainer", 1, { xPercent: -40 }, "label2");
    tl.from(titles[2], 0.5, { opacity: 0 }, "label2+=0.5");
    tl.to("#js-slideContainer", 1, { xPercent: -60 }, "label3");
    tl.from(titles[3], 0.5, { opacity: 0 }, "label3+=0.5");
    tl.to("#js-slideContainer", 1, { xPercent: -80 }, "label4");
    tl.from(titles[4], 0.5, { opacity: 0 }, "label4+=0.5");

    new ScrollMagic.Scene({
      triggerElement: "#js-wrapper",
      triggerHook: "onLeave",
      duration: "400%",
    })
      .setPin("#js-wrapper")
      .setTween(tl)
      .addIndicators({
        colorTrigger: "white",
        colorStart: "white",
        colorEnd: "white",
      })
      .addTo(controller);
  }

  pageHorigentalScroll();



  function textTopopopopo(e) {
	  console.log(e);
  }

  textTopopopopo('lklklklk');



});
