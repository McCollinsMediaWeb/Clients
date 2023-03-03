/*
Copyright (c) 2018
------------------------------------------------------------------*/
(function ($) {
	"use strict";
	var Fitness_First = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {
			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}
			/*-------------- Fitness First Functions Calling ------------*/
			this.searchBox();
			this.navMenu();
			this.aboutSlider();
			this.offerSlider();
			this.trainerSlider();
			this.classVideo();
			this.blogSlider();
			this.niceSelect();
			this.testimonialSlider();
			this.singleblogSlider();
			this.classSlider();
			this.yogaclassSlider();
			this.maletrainer();
			this.femaletrainer();
			this.recentNews();
			this.recentBlog();
			this.topButton();
			
		},
		/*-------------- Fitness First Functions definition ------------ */
		
		/*-----------------------------------------------------
				header Search Bar 
		-----------------------------------------------------*/
		searchBox: function () {
			$('.searchbtn').on("click", function () {
				$('.searchbox').addClass('search_open');
			});
			$('.closebtn').on("click", function () {
				$('.searchbox').removeClass('search_open');
			});
			$('.searchbox').on("click", function () {
				$('.searchbox').removeClass('search_open');
			});
			$(".searchbox_inner").on('click', function () {
				event.stopPropagation();
			});
		},
		/*-----------------------------------------------------
				Mobile Menu 
		-----------------------------------------------------*/
		navMenu: function () {

			$(".toggle_btn").on('click', function (e) {
				event.stopPropagation();
				$("body").toggleClass("menu_open");
			});
			
			$(".main_menu_wrapper>ul li").on('click', function () {
				var w = window.innerWidth;
                if (w <= 991) {
					$(this).find('ul.sub_menu').slideToggle();
					$(this).toggleClass("open");
				}
			});
		},

		/*-----------------------------------------------------
				about slider 
		-----------------------------------------------------*/
		aboutSlider: function () {
			if ($('.fit_about_wrapper').length > 0) {
			var aboutswiper = new Swiper('.fit_about_wrapper .swiper-container', {
				loop: true,
				speed: 800,
				autoplay: {
					delay: 5000,
				  },
				navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
				},
			});
			}
		},
		/*-----------------------------------------------------
				we offer slider 
		-----------------------------------------------------*/
		offerSlider: function () {
			if ($('.fit_about_wrapper').length > 0) {
			var aboutswiper = new Swiper('.weoffer_wrapper .swiper-container', {
				loop: true,
				speed: 800,
				autoplay: {
					delay: 5000,
				  },
				navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
				},
			});
			}
		},
		/*-----------------------------------------------------
				Trainer slider 
		-----------------------------------------------------*/
		trainerSlider: function () {
			if ($('.fit_trainer_wrapper').length > 0) {
				var trainerswiper = new Swiper('.fit_trainer_wrapper .swiper-container', {
					slidesPerView: 3,
					spaceBetween: 30,
					loop: true,
					speed: 800,
					autoplay: {
						delay: 5000,
					},
					navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					breakpoints: {
						0: {
							slidesPerView: 1,
							spaceBetween: 0,
						},
						575: {
							slidesPerView: 2,
							spaceBetween: 10,
						},
						767: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						992: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1200: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					},
				});
			}
		},
		/*-----------------------------------------------------
			Online Classes Video Popup
		-----------------------------------------------------*/
		classVideo: function () {
			if ($('.video_popup').length > 0) {
				$('.video_popup').magnificPopup({
					type: 'iframe',
					iframe: {
						markup: '<div class="mfp-iframe-scaler">' +
							'<div class="mfp-close"></div>' +
							'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
							'<div class="mfp-title">Some caption</div>' +
							'</div>',
						patterns: {
							youtube: {
								index: 'youtube.com/',
								id: 'v=',
								src: 'https://www.youtube.com/embed/tIERGqe91CA'
							}
						}
					}
				});
			}
		},
		/*-----------------------------------------------------
				Blog slider 
		-----------------------------------------------------*/
		blogSlider: function () {
			if ($('.fit_blog_wrapper').length > 0) {
				var blogswiper = new Swiper('.fit_blog_wrapper .swiper-container', {
					slidesPerView: 3,
					spaceBetween: 30,
					loop: true,
					speed: 800,
					autoplay: {
						delay: 5000,
					},
					navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					breakpoints: {
						0: {
							slidesPerView: 1,
							spaceBetween: 0,
						},
						575: {
							slidesPerView: 2,
							spaceBetween: 10,
						},
						992: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1200: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					},
				});
			}
		},
		/*-----------------------------------------------------
			Nice Select 
		-----------------------------------------------------*/
		niceSelect:function(){
			if($('select').length > 0){
				$('select').niceSelect();	
			}
		},
		/*-----------------------------------------------------
				Testimonial slider 
		-----------------------------------------------------*/
		testimonialSlider: function () {
			if ($('.fit_testimonial_wrapper').length > 0) {
				var aboutswiper = new Swiper('.fit_testimonial_wrapper .swiper-container', {
					loop: true,
					speed: 800,
					autoplay: {
						delay: 5000,
					},
					navigation: {
					nextEl: '.testimonialNext',
					prevEl: '.testimonialPrev',
					},
				});
			}
		},
		/*-----------------------------------------------------
				single blog slider 
		-----------------------------------------------------*/
		singleblogSlider: function () {
			if ($('.single_blogslider').length > 0) {
				var siglblogswiper = new Swiper('.single_blogslider .swiper-container', {
					slidesPerView: 2,
					spaceBetween: 30,
					loop: true,
					speed: 800,
					autoplay: {
						delay: 5000,
					},
					navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					breakpoints: {
						0: {
							slidesPerView: 1,
							spaceBetween: 0,
						},
						1200: {
							slidesPerView: 2,
							spaceBetween: 30,
						}
					},
				});
			}
		},
		/*-----------------------------------------------------
				Classes slider 
		-----------------------------------------------------*/
		classSlider: function () {
			if ($('.classes').length > 0) {
				var classswiper = new Swiper('.classes .swiper-container', {
					slidesPerView: 3,
					spaceBetween: 30,
					loop: true,
					speed: 800,
					autoplay: {
						delay: 5000,
					},
					navigation: {
					nextEl: '.classes_next',
					prevEl: '.classes_prev',
					},
					breakpoints: {
						0: {
							slidesPerView: 1,
							spaceBetween: 0,
						},
						575: {
							slidesPerView: 2,
							spaceBetween: 10,
						},
						992: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1200: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					},
				});
			}
		},
		/*-----------------------------------------------------
				Yoga Classes slider 
		-----------------------------------------------------*/
		yogaclassSlider: function () {
			if ($('.yoga_class').length > 0) {
				var yogaclassswiper = new Swiper('.yoga_class .swiper-container', {
					slidesPerView: 3,
					spaceBetween: 30,
					loop: true,
					speed: 800,
					autoplay: {
						delay: 5000,
					},
					navigation: {
					nextEl: '.yoga_next',
					prevEl: '.yoga_prev',
					},
					breakpoints: {
						0: {
							slidesPerView: 1,
							spaceBetween: 0,
						},
						575: {
							slidesPerView: 2,
							spaceBetween: 10,
						},
						992: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1200: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					},
				});
			}
		},
		/*-----------------------------------------------------
				Male Trainer slider 
		-----------------------------------------------------*/
		maletrainer: function () {
			if ($('.male_trainer').length > 0) {
				var mtrainerswiper = new Swiper('.male_trainer .swiper-container', {
					slidesPerView: 4,
					spaceBetween: 30,
					loop: true,
					speed: 800,
					autoplay: {
						delay: 5000,
					},
					navigation: {
					nextEl: '.male_next',
					prevEl: '.male_prev',
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					breakpoints: {
						0: {
							slidesPerView: 1,
							spaceBetween: 0,
						},
						575: {
							slidesPerView: 2,
							spaceBetween: 10,
						},
						767: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						992: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1200: {
							slidesPerView: 4,
							spaceBetween: 30,
						},
					},
				});
			}
		},
		/*-----------------------------------------------------
				Female Trainer slider 
		-----------------------------------------------------*/
		femaletrainer: function () {
			if ($('.female_trainer').length > 0) {
				var ftrainerswiper = new Swiper('.female_trainer .swiper-container', {
					slidesPerView: 4,
					spaceBetween: 30,
					loop: true,
					speed: 800,
					autoplay: {
						delay: 5000,
					},
					navigation: {
					nextEl: '.female_next',
					prevEl: '.female_prev',
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					breakpoints: {
						0: {
							slidesPerView: 1,
							spaceBetween: 0,
						},
						575: {
							slidesPerView: 2,
							spaceBetween: 10,
						},
						767: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						992: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1200: {
							slidesPerView: 4,
							spaceBetween: 30,
						},
					},
				});
			}
		},
		/*-----------------------------------------------------
				Recent News slider 
		-----------------------------------------------------*/
		recentNews: function () {
			if ($('.recent_news').length > 0) {
				var rnewsswiper = new Swiper('.recent_news .swiper-container', {
					slidesPerView: 3,
					spaceBetween: 30,
					loop: true,
					speed: 800,
					autoplay: {
						delay: 5000,
					},
					navigation: {
					nextEl: '.rnews_next',
					prevEl: '.rnews_prev',
					},
					breakpoints: {
						0: {
							slidesPerView: 1,
							spaceBetween: 0,
						},
						575: {
							slidesPerView: 2,
							spaceBetween: 10,
						},
						992: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1200: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					},
				});
			}
		},
		/*-----------------------------------------------------
				Recent Blog slider 
		-----------------------------------------------------*/
		recentBlog: function () {
			if ($('.recent_blog').length > 0) {
				var rblogswiper = new Swiper('.recent_blog .swiper-container', {
					slidesPerView: 3,
					spaceBetween: 30,
					loop: true,
					speed: 800,
					autoplay: {
						delay: 5000,
					},
					navigation: {
					nextEl: '.rblog_next',
					prevEl: '.rblog_prev',
					},
					breakpoints: {
						0: {
							slidesPerView: 1,
							spaceBetween: 0,
						},
						575: {
							slidesPerView: 2,
							spaceBetween: 10,
						},
						992: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1200: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					},
				});
			}
		},
		/*-----------------------------------------------------
			go to top
		-----------------------------------------------------*/
		topButton: function () {
			var scrollTop = $("#scroll");
			$(window).on('scroll', function () {
				if ($(this).scrollTop() < 300) {
					scrollTop.removeClass("active");
				} else {
					scrollTop.addClass("active");
				}
			});
			$('#scroll').click(function () {
				$("html, body").animate({
					scrollTop: 0
				}, 1000);
				return false;
			});
		},



		
	};
	
    Fitness_First.init();

    jQuery(window).on('load', function() {
        jQuery("#status").fadeOut();
        jQuery("#preloader").delay(350).fadeOut("slow");
    });

}(jQuery));

/*-----------------------------------------------------
	Contact Form Submission
-----------------------------------------------------*/
// Contact Form Submission
function checkRequire(formId , targetResp){
    targetResp.html('');
    var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
    var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
    var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
    var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
    var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
    var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
    var check = 0;
    $('#er_msg').remove();
    var target = (typeof formId == 'object')? $(formId):$('#'+formId);
    target.find('input , textarea , select').each(function(){
        if($(this).hasClass('require')){
            if($(this).val().trim() == ''){
                check = 1;
                $(this).focus();
                $(this).parent('div').addClass('form_error');
                targetResp.html('You missed out some fields.');
                $(this).addClass('error');
                return false;
            }else{
                $(this).removeClass('error');
                $(this).parent('div').removeClass('form_error');
            }
        }
        if($(this).val().trim() != ''){
            var valid = $(this).attr('data-valid');
            if(typeof valid != 'undefined'){
                if(!eval(valid).test($(this).val().trim())){
                    $(this).addClass('error');
                    $(this).focus();
                    check = 1;
                    targetResp.html($(this).attr('data-error'));
                    return false;
                }else{
                    $(this).removeClass('error');
                }
            }
        }
    });
    return check;
}
$('.tabActive1').on("click", function () {
	$(".tabActive2").removeClass("active");
	$(this).addClass("active");
	$(".tab-pane-2").removeClass("active");
	$(".tab-pane-2").removeClass("show");
	$(".tab-pane-1").addClass("active");
	$(".tab-pane-1").addClass("show");
});
$('.tabActive2').on("click", function () {
	$(".tabActive1").removeClass("active");
	$(this).addClass("active");
	$(".tab-pane-1").removeClass("active");
	$(".tab-pane-1").removeClass("show");
	$(".tab-pane-2").addClass("active");
	$(".tab-pane-2").addClass("show");
});
$(".submitForm").on('click', function() {
    var _this = $(this);
    var targetForm = _this.closest('form');
    var errroTarget = targetForm.find('.response');
    var check = checkRequire(targetForm , errroTarget);
    
    if(check == 0){
       var formDetail = new FormData(targetForm[0]);
        formDetail.append('form_type' , _this.attr('form-type'));
        $.ajax({
            method : 'post',
            url : 'ajaxmail.php',
            data:formDetail,
            cache:false,
            contentType: false,
            processData: false
        }).done(function(resp){
            console.log(resp);
            if(resp == 1){
                targetForm.find('input').val('');
                targetForm.find('textarea').val('');
                errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
            }else{
                errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
            }
        });
    }
});





