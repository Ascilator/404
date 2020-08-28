jQuery(function () {


	$('.burger').click(function(){
		$('.wrapper_1').slideToggle(300);
		$('.burger').toggleClass('active');	
	});
	$('.menu_link_lvl_1').mouseenter(function(){
		$(`.menu_cont_lvl_2`).css({
			'display':'none'
		});
		$(this).next().css({
			'display':'flex'
		});
		
	});
	$(`.menu_cont_lvl_2`).mouseleave(function(){
		$(this).css({
			'display':'none'
		});
	});


	
	$('#slider_3').bxSlider({
		slideMargin: 0,
		
		infiniteLoop: false,
		adaptiveHeight: true,
		controls: true,
		minSlides: 1,
		maxSlides: 1,
		nextSelector: $('#slider_3_next_arrow'),
		prevText: '',
		nextText: '',
		prevSelector: $('#slider_3_prev_arrow'),
		swipeThreshold: 50,
		responsive: true,
	});

	$('.model_item').click(function(){
		$('.model_item').removeClass('_active');
		$(this).addClass('_active');
	});

});


