$(document).ready(function() {

	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});

	$(".section_header").animated("fadeInUp", "fadeOutDown");
	$(".animation_1").animated("flipInY", "fadeOutDown");
	$(".animation_2").animated("fadeInLeft", "fadeOutDown");
	$(".animation_3").animated("fadeInRight", "fadeOutDown");

	$(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
	$(".right .resume_item").animated("fadeInRight", "fadeOutDown");

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	function DetectMenu()
	{
		var width = $('body').innerWidth();
		if (width < 768 || $(window).scrollTop() > 10) {
    $('.top_mnu_big').hide();
  	$(".toggle_mnu").show();}
    else
    {
    	$('.top_mnu_big').show();
    	$(".toggle_mnu").hide();}
	};
function ResizeMainLogo()
{
	var width = $('body').innerWidth();
	var height = $(window).height()
	var w, h;
		if(width > height)
			{
					h = (height-120)/2;
					$('.top_wrapper .top_logo img').height('value',(height-120)/2);
					$('.top_wrapper .top_logo img').css({ width: h });
			}
		else 
			{
				h = height/3;
				$('.top_wrapper .top_logo img').height('value',height/3);
				$('.top_wrapper .top_logo img').css({ width: h });
			}

};

function ActivateFixedMenu() {
	var width = $('body').innerWidth();
  if ($(window).scrollTop() == 0 || width < 768) {
    $('.fixed_top_menu').removeClass("scrol_menu");
  } else {
    $('.fixed_top_menu').addClass("scrol_menu");
  }
}
	//ActivateFixedMenu();
  DetectMenu();
	heightDetect();
	ResizeMainLogo();

	$(window).resize(function() {
		DetectMenu();
		heightDetect();
		ResizeMainLogo();
	});

	$(window).scroll(function() {
  //ActivateFixedMenu();
  DetectMenu();
});

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});

	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});

	$("input, select, textarea").jqBootstrapValidation();

	$(".top_mnu ul a").mPageScroll2id();


	//show_snow({ minSize: 5, maxSize: 50, newOn: 1000, flakeColor: '#FFFFFF' });

});

//$(function(){
//  $('.block').draggable();
//})

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
	$(".top_text h1").animated("fadeInRight", "fadeOutLeft");
	$(".top_text p").animated("fadeInLeft", "fadeOutLeft");
	$(".top_logo img").animated("bounceIn", "bounceOut");

}); 

function show_snow(options){
	
			var $flake 			= $('<div class="flake" />').css({'position': 'absolute', 'top': '-50px'}),
				documentHeight 	= $(document).height(),
				documentWidth	= $(document).width(),
				defaults		= {
									flakeChar	: "&#10052;", 
									minSize		: 10,
									maxSize		: 20,
									newOn		: 500,
									flakeColor	: ["#ffffff"],
									durationMillis: null
								},
				options			= $.extend({}, defaults, options);
							
			$flake.html(options.flakeChar);

			var interval		= setInterval( function(){
				var startPositionLeft 	= Math.random() * documentWidth - 100,
				 	startOpacity		= 0.5 + Math.random(),
					sizeFlake			= options.minSize + Math.random() * options.maxSize,
					endPositionTop		= documentHeight - defaults.maxSize - 40,
					endPositionLeft		= startPositionLeft - 100 + Math.random() * 200,
					durationFall		= documentHeight * 10 + Math.random() * 5000;
				$flake
					.clone()
					.appendTo('body')
					.css(
						{
							left: startPositionLeft,
							opacity: startOpacity,
							'font-size': sizeFlake,
							color: options.flakeColor//options.flakeColor[Math.floor((Math.random() * options.flakeColor.length))]
						}
					)
					.animate(
						{
							top: endPositionTop,
							left: endPositionLeft,
							opacity: 0.2
						},
						durationFall,
						'linear',
						function() {
							$(this).remove()
						}
					);
			}, options.newOn);

			if (options.durationMillis) {
				setTimeout(function() {
					removeInterval(interval);
				}, options.durationMillis);
			}	
	};