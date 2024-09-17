(function($) {
    'use strict';

    // Mean Menu
	$('.mean-menu').meanmenu({
		meanScreenWidth: "991"
	});

    // Header Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 120){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		}
	});

	// Popup Video 
    $('.play-btn').magnificPopup({
        disableOn: 0,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

	// Top Branded Slider
    $('.top-branded-slider').owlCarousel({
        loop: true,
        margin: 30,
        autoHeight: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right' ></i>"
        ],
        responsive:{
            0:{
                items: 1,
            },
            768:{
                items: 2,
            },
            1000:{
                items: 3,
            },
        }
    })

    // Top Branded Slider Two
    $('.top-branded-slider-two').owlCarousel({
        loop: true,
        margin: 10,
        autoHeight: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right' ></i>"
        ],
        responsive:{
            0:{
                items: 1,
            },
            768:{
                items: 2,
            },
            1000:{
                items: 3,
            },
        }
    })

    // Best Seller Slider
    $('.best-seller-slider').owlCarousel({
        loop: true,
        margin: 30,
        autoHeight: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right' ></i>"
        ],
        responsive:{
            0:{
                items: 1,
            },
            768:{
                items: 2,
            },
            1000:{
                items: 3,
            },
        }
    })

    // Team Slider
    $('.team-slider').owlCarousel({
        loop: true,
        margin: 30,
        autoHeight: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right' ></i>"
        ],
        responsive:{
            0:{
                items: 1,
            },
            768:{
                items: 2,
            },
            1000:{
                items: 3,
            },
        }
    })

    // New Collection Slider
    $('.new-collection-slider').owlCarousel({
        loop: true,
        margin: 10,
        autoHeight: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 2,
            },
            768:{
                items: 5,
            },
        }
    })

    // Best Sellers Slider
    $('.best-sellers-slider').owlCarousel({
        loop: true,
        margin: 30,
        autoHeight: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right' ></i>"
        ],
        responsive:{
            0:{
                items: 1,
            },
            768:{
                items: 2,
            },
            1000:{
                items: 3,
            },
        }
    })

    // Featured Products Slider
    $('.featured-products-slider').owlCarousel({
        loop: true,
        margin: 10,
        autoHeight: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right' ></i>"
        ],
        responsive:{
            0:{
                items: 1,
            },
            768:{
                items: 2,
            },
            1000:{
                items: 3,
            },
            1200:{
                items: 4,
            },
        }
    })

    // Testimonials Slider
    $('.testimonials-slider').owlCarousel({
        loop: true,
        margin: 10,
        autoHeight: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        items: 1,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right' ></i>"
        ]
    })

    // Tabs Single Page
    $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
    $('.tab ul.tabs li').on('click', function (g) {
        var tab = $(this).closest('.tab'), 
        index = $(this).closest('li').index();
        tab.find('ul.tabs > li').removeClass('current');
        $(this).closest('li').addClass('current');
        tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
        tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
        g.preventDefault();
    });

    // FAQ Accordion JS
	$('.accordion').find('.accordion-title').on('click', function(){
		// Adds Active Class
		$(this).toggleClass('active');
		// Expand or Collapse This Panel
		$(this).next().slideToggle('fast');
		// Hide The Other Panels
		$('.accordion-content').not($(this).next()).slideUp('fast');
		// Removes Active Class From Other Titles
		$('.accordion-title').not($(this)).removeClass('active');		
    });

    // New Collection Photo View
    $('.new-collection-photo-view').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] 
        }
    });

    // Product Details Slider
    $('.product-details-image-slides').slick({
        dots:true,
        speed:500,
        fade:false,
        slide:'li',
        slidesToShow:1,
        autoplay:true,
        autoplaySpeed:4000,
        prevArrow:false,
        nextArrow:false,
        responsive:[{breakpoint:800,
            settings:{
                arrows:false,
                centerMode:false,
                centerPadding:'40px',
                variableWidth:false,
                slidesToShow:1,
                dots:true
            },
            breakpoint:1200,settings:
            {
                arrows:false,
                centerMode:false,
                centerPadding:'40px',
                variableWidth:false,
                slidesToShow:1,
                dots:true
            }
        }],
        customPaging:function(slider,i){return '<button class="tab">'+$('.slick-thumbs li:nth-child('+(i+1)+')').html()+'</button>';}
    });

    // Newsletter modal
    $(window).on('load',function(){
        setTimeout(function(){ 
            $(".newsletter-popup-wrapepr").addClass("active")
        }, 3000); 
    });
    $(".newsletter-modal-close").on("click", function() {
        $(".newsletter-popup-wrapepr").removeClass("active")
    })

     // Input Plus & Minus Number JS
     $('.input-counter').each(function() {
        var spinner = jQuery(this),
        input = spinner.find('input[type="text"]'),
        btnUp = spinner.find('.plus-btn'),
        btnDown = spinner.find('.minus-btn'),
        min = input.attr('min'),
        max = input.attr('max');
        
        btnUp.on('click', function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.on('click', function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    }); 

    // Count Time JS
	function makeTimer() {
		var endTime = new Date("October 30, 2022 17:00:00 PDT");			
		var endTime = (Date.parse(endTime)) / 1000;
		var now = new Date();
		var now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");
	}
    setInterval(function() { makeTimer(); }, 300);

    // Subscribe form
    $(".newsletter-form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // Handle The Invalid Form...
            formErrorSub();
            submitMSGSub(false, "Please enter your email correctly");
        } else {
            // Everything Looks Good!
            event.preventDefault();
        }
    });
    function callbackFunction (resp) {
        if (resp.result === "success") {
            formSuccessSub();
        }
        else {
            formErrorSub();
        }
    }
    function formSuccessSub(){
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function() {
            $("#validator-newsletter").addClass('hide');
        }, 4000)
    }
    function formErrorSub(){
        $(".newsletter-form").addClass("animated shake");
        setTimeout(function() {
            $(".newsletter-form").removeClass("animated shake");
        }, 1000)
    }
    function submitMSGSub(valid, msg){
        if(valid){
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }
        
    // AJAX MailChimp
    $(".newsletter-form").ajaxChimp({
        url: "https://envyTheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
        callback: callbackFunction
    });

    // Back To Top
    $('body').append("<div class='go-top'><i class='bx bx-chevrons-up'></i></div>");
    $(window).on('scroll', function() {
        var scrolled = $(window).scrollTop();
        if (scrolled > 600) $('.go-top').addClass('active');
        if (scrolled < 600) $('.go-top').removeClass('active');
    });
    $('.go-top').on('click', function() {
        $('html, body').animate({
            scrollTop: '0',
        }, 500 );
    });

    // Preloader
    $(window).on("load", function() {
        var preLoder = $(".loader-wrapper");
        preLoder.delay(700).fadeOut(500);
        $("body").addClass("loaded");
    });

        // TweenMax JS
        $('.banner-area').mousemove(function(e){
            var wx = $(window).width();
            var wy = $(window).height();
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            var newx = x - wx/2;
            var newy = y - wy/2;
            $('.banner-img').each(function(){
                var speed = $(this).attr('data-speed');
                if($(this).attr('data-revert')) speed *= -1;
                TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
            });
        });

        // TweenMax JS
        $('.banner-area-two').mousemove(function(e){
            var wx = $(window).width();
            var wy = $(window).height();
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            var newx = x - wx/2;
            var newy = y - wy/2;
            $('.banner-img-two').each(function(){
                var speed = $(this).attr('data-speed');
                if($(this).attr('data-revert')) speed *= -1;
                TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
            });
        });
})($);