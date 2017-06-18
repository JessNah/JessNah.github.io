    // Preloader

    $(window).load(function() {
      preloadImage("assets/img/AnimationMe.gif");
      $("#loader .icon").fadeOut();
      $("#loader").fadeOut("slow");
    });

    //----------------------------------------------------------------

    // gif animation

    $(function() {
            $("#meGif").hover(
                function() {
                    $(this).attr("src", "assets/img/AnimationMe.gif");
                },
                function() {
                    $(this).attr("src", "assets/img/AnimationMeStatic.png" );
                }
            );
        });



    function GifOnScroll(){
      $("#meGif").attr("src", "assets/img/AnimationMe.gif");
    }

    function isScrolledIntoView(elem)
    {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    function Utils() {

    }

    Utils.prototype = {
        constructor: Utils,
        isElementInView: function (element, fullyInView) {
            var pageTop = $(window).scrollTop();
            var pageBottom = pageTop + $(window).height();
            var elementTop = $(element).offset().top;
            var elementBottom = elementTop + $(element).height();

            if (fullyInView === true) {
                return ((pageTop < elementTop) && (pageBottom > elementBottom));
            } else {
                return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
            }
        }
    };

    var Utils = new Utils();


    function preloadImage(url)
      {
          var img=new Image();
          img.src=url;
          console.log("PRELOADED IMAGE");
      }


      var animatedGif = false;

      $(window).on('scroll',function() {

        if(!animatedGif){
          var isElementInView = Utils.isElementInView($("#meGif"), true);

          if (isElementInView) {
              GifOnScroll();
              animatedGif = true;
              console.log('in view');
          } else {
              console.log('out of view');
          }
      }
    });

    // ------------------------------------------------------------------

jQuery(document).ready(function() {


    // Image resize on viewport

	$(".header-img").height($(window).height());

	$(window).resize(function(){
			$(".header-img").height($(window).height());
	});

  //----------------------------------------------------------------

    // Skills progress bar

    $(".progress .progress-bar").appear(function () {
        $('.progress .progress-bar').progressbar();
    });

    // Smooth Page Scrolling requires - Jquery Easing

    jQuery('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    //----------------------------------------------------------------

    // Portfolio sorting

    jQuery('#portfolio-items').mixItUp();

    //----------------------------------------------------------------

    // Milestone counter

    jQuery('.counter').counterUp({
        delay: 10,
        time: 3000
    });

    //----------------------------------------------------------------

    // Reviews slider

    jQuery("#reviews-slider").owlCarousel({
        items : 2,
        itemsDesktop : [1199,2],
        itemsDesktopSmall : [979,2],
        itemsTablet: [600,1],
        itemsMobile : [479,1],
        slideSpeed : 800,
        mouseDrag: false,
        pagination : false,
        navigation: true,
            navigationText: [
            "<span class='ti-angle-left'></span>",
            "<span class='ti-angle-right'></span>"
            ],
        autoPlay : false
    });

    //----------------------------------------------------------------

    // Reviews slider

    jQuery("#brands-slider").owlCarousel({
       items : 3,
       itemsDesktop : [1199,3],
       itemsDesktopSmall : [979,3],
       itemsTablet: [600,2],
       itemsMobile : [479,1],
       slideSpeed : 400,
       mouseDrag: false,
       pagination : false,
       autoPlay : true
   });

    //----------------------------------------------------------------

    // Animation reveal on scroll

    new WOW().init();

    //----------------------------------------------------------------

    // Smooth Page Scrolling requires - Jquery Easing

    jQuery('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    //----------------------------------------------------------------

    // Highlight top nav as scrolling occurs

        jQuery('body').scrollspy({
           target: '.navbar-static-top'
    })

    //----------------------------------------------------------------

    // Closes Responsive Menu on Menu Item Click

        jQuery('.navbar-collapse ul li a').click(function() {
          $('.navbar-toggle:visible').click();
    });

    //----------------------------------------------------------------

    // Sticky Navigation

    jQuery(function() {
        $('#navigation').height($("#nav").height());
          $('#nav').affix({
            offset: { top: $('#nav').offset().top -15 }
        });
    });

    //----------------------------------------------------------------

    // Scroll to top

    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }

    });

    //----------------------------------------------------------------

    // Contact Form

    jQuery('.form-horizontal').on('submit',function(){

        var form = $(this);
        $.ajax({
            url: form.attr('action'),
            method: form.attr('method'),
            data: form.serialize(),
            success: function(result){
                if (result == 'success'){
                    $('.send-success').fadeIn().delay(4000).fadeOut();;
                } else {
                    $('.send-error').fadeIn().delay(4000).fadeOut();;
                }
                $('.form-horizontal').trigger("reset");
            }
          });

         // Prevents default submission of the form after clicking on the submit button.
          return false;
    });

    //----------------------------------------------------------------

});
