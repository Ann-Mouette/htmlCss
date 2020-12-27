$(document).ready(function(){

	//mobile nav
	var touch = $(".lp-header__touch-menu");
	var menu = $(".nav__menu");
	$(touch).on("click",function(e){
		e.preventDefault();
		menu.slideToggle();
		menu.addClass('is-open');
		$(this).toggleClass('is-active');
		//$(this).addClass('is-active');
	});
	$(window).resize(function(){
		var width = $(window).width();
		if(width>1100 && menu.is(":hidden")){
			menu.removeAttr("style");
		}
	});

	// select replacement
	var defSelect = $(".selected").html();
	$(".select1__label").html(defSelect);
	$(".select1__label").click(function(e){
		e.preventDefault();
		var dropBlock = $(this).parent().find(".select1__drop");
		if(dropBlock.is(':hidden')){
			dropBlock.slideDown();
			$(".select1__drop").find("li").click(function(){
				var selected = $(this).html();
				$(this).parent().parent().find("input").val(selected);
				$(this).parent().parent().find(".select1__label").html(selected);
				dropBlock.slideUp();
			});		//end of click-on-.select1__drop function
		}else{
			dropBlock.slideUp();
		}
	});		//end of click-on-.select1__label function

	// preventDefault for instead-of-select links
	$(".select2__label").click(function(e){
		e.preventDefault();
	});
	$(".select3__label").click(function(e){
		e.preventDefault();
	});



	//niceScroll
		$(".select1__drop").niceScroll({
			cursorcolor:"#ce4483",
			cursorwidth:"10px"
		});


	// блок ресайза
	// $('html').prepend('<div id="resizer"></div>');
	// $("#resizer").css({
	// 			'width': '200px',
	// 			'height': '50px',
	// 			'position': 'fixed',
	// 			'right': '0',
	// 			'z-index': '9999',
	// 			'background': 'rgba(227, 25, 25, .5)',
	// 			'color': '#fff',
	// 			'fontSize': '24px',
	// 			'fontStyle': 'italic',
	// 			'fontWeight': 'bold',
	// 			'textAlign': 'center',
	// 			'lineHeight': '50px'
	// });						

	// // ф-ия отображения изменения параметров окна браузера при ресайзе
	// $(window).resize(function(){
	// 	var winW = $(window).width();
	// 	var winH = $(window).height();
	// 	$("#resizer").text(winW + " X " + winH);
	// });
	
});		// the end