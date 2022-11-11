jQuery(document).ready(function ($) {
  console.log("ready!");
  jQuery(window).scroll(function () {
    var scroll = jQuery(window).scrollTop();

    if (scroll >= 100) {
      jQuery("body").addClass("StickHeader");
    } else {
      jQuery("body").removeClass("StickHeader");
    }
  });
  jQuery(".Cst-select").addClass("activated");
  jQuery(".T1").addClass("activated");

  jQuery(window).scroll(function () {
    inViewport();
  });

  jQuery(window).resize(function () {
    inViewport();
  });

  function inViewport() {
    jQuery(".rombus").each(function () {
      var divPos = jQuery(this).offset().top,
        topOfWindow = jQuery(window).scrollTop();

      if (divPos < topOfWindow + 900) {
        jQuery(this).addClass("activated");
      }
    });
  }

  jQuery(".CloseClick svg, .MenuClick").click(function () {
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
  jQuery(".OverLay , .openpopup").click(function () {
    jQuery("body").toggleClass("activeform");
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
  });
  
 
});
