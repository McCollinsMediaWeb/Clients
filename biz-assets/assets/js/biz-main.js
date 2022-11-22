jQuery(document).ready(function ($) {

  windowHeight = jQuery(window).innerHeight();
  
  jQuery('.HeroImage img').css('height', (windowHeight-1)+'px');

  jQuery(window).scroll(function () {
    var scroll = jQuery(window).scrollTop();

    if (scroll >= 100) {
      jQuery("body").addClass("StickHeader");
    } else {
      jQuery("body").removeClass("StickHeader");
    }
  });

  jQuery(".CloseClick, .MenuClick , .menudrop ,.MenuActive1").click(function () {
    jQuery("body").toggleClass("ActivePanel");
  });

  jQuery(".JuriSlider").slick({
    draggable: true,
    accessibility: false,
    centerMode: false,
    variableWidth: true,
    slidesToShow: 1,
    arrows: true,
    dots: true,
    swipeToSlide: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          variableWidth: false,
          slidesToShow: 1,
          infinite: true,
          arrows: false,
        }
      }
    ]
  });
  
  
  jQuery(".FilterTp1").on('click', function(){
      jQuery(".FilterTp1").removeClass("active");
      jQuery(this).addClass("active");
      var filter = $(this).data('filter');
      jQuery(".JuriSlider").slick('slickUnfilter');
      
      if(filter == 'Mainland'){
        jQuery(".JuriSlider").slick('slickFilter','.Mainland');
      }
      else if(filter == 'Freezone'){
        jQuery(".JuriSlider").slick('slickFilter','.Freezone');
      }
      else if(filter == 'Offshore'){
        jQuery(".JuriSlider").slick('slickFilter','.Offshore');
      }
      else if(filter == 'all'){
      
        jQuery(".JuriSlider").slick('slickUnfilter');
      }
      
  })

  jQuery(".JuriSlider").on("init", function (event, slick) {
    jQuery(".JuriSliderItem:first-child").addClass("active");
  });


  jQuery(".JuriSliderItem:first-child").addClass("active");

  jQuery(".JuriSliderItem ").mouseover(function () {
    jQuery(".JuriSliderItem:first-child ").removeClass("active");
    jQuery(this).addClass("active");
  });

  jQuery(".JuriSliderItem ").mouseout(function () {
    jQuery(this).removeClass("active");
    jQuery(".JuriSliderItem:first-child ").addClass("active");
  });

  jQuery(".JuriSliderItem ").mouseleave(function () {
    jQuery(".BackContent").removeClass("flip");
  });

  jQuery(".ContenTTp1 ").click(function () {
    jQuery(".BackContent").removeClass("flip");
    jQuery(this).next(".BackContent").toggleClass("flip");
  });
  jQuery(".BackContent").click(function () {
    jQuery(".BackContent").removeClass("flip");
  });
  jQuery(".OverLay , .openpopup , .Contactusnow").click(function () {
    jQuery("body").toggleClass("activeform");
    jQuery("body").removeClass("pop3active");
  });
  jQuery(".popup2-trigger").click(function () {
    jQuery("body").toggleClass("Popup2active");
    jQuery(".p2HeadText").text($(this).data("title"));
    jQuery(".p2mainContent").text($(this).data("descriptions"));
  });
  jQuery(".OverLay2").click(function () {
    jQuery("body").toggleClass("Popup2active");
    jQuery(".p2HeadText").text("Read More Content Looking Empty");
    jQuery(".p2mainContent").text($(this).data("Please click on any Read More Button"));
  });
  

  jQuery(".StpTp1").slick({
    draggable: true,
    accessibility: false,
    centerMode: false,
    slidesToShow: 5,
    arrows: true,
    dots: true,
    swipeToSlide: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          variableWidth: false,
          slidesToShow: 1,
          infinite: true,
          arrows: false,
        }
      }
    ]
  });
  jQuery(".StpTp2").slick({
    draggable: true,
    accessibility: false,
    centerMode: false,
    slidesToShow: 4,
    arrows: true,
    dots: true,
    swipeToSlide: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          variableWidth: false,
          slidesToShow: 1,
          infinite: true,
          arrows: false,
        }
      }
    ]
  });
  jQuery(".BankSlider").slick({
    draggable: true,
    accessibility: false,
    centerMode: false,
    slidesToShow: 4,
    arrows: true,
    dots: true,
    swipeToSlide: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          variableWidth: false,
          slidesToShow: 1,
          infinite: true,
          arrows: false,
        }
      }
    ]
  });
  jQuery(".MobSlider").slick({
    draggable: true,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    dots: true,
    fade: true,
    speed: 500,
    infinite: true,
    cssEase: 'ease-in-out',
    touchThreshold: 100
  });
  


  
    if (jQuery(window).width() < 1000) {
        jQuery(".ImageSwitcher")
        .fadeOut(400, function() {
          jQuery(this).attr('src',jQuery(this).attr('data-mobile'));
        })
        .fadeIn(400);
    }
    else {
      jQuery(".ImageSwitcher")
        .fadeOut(400, function() {
          jQuery(this).attr('src',jQuery(this).attr('data-desktop'));
        })
        .fadeIn(400);
    }

  jQuery('.select1').select2();

  
  jQuery(".FaqitemRow").click(function () {
    jQuery(".FaqitemRow").removeClass("activefaq")
    jQuery(this).addClass("activefaq");
    jQuery(".FaqAnswer").hide();
    jQuery(this).next(".FaqAnswer").slideToggle();
    
  });

  if (jQuery(window).width() < 1000) {
    jQuery(".Cst-select").click(
      function(){
        jQuery("body").toggleClass("pop3active");
      }
    );
  }

 

});
