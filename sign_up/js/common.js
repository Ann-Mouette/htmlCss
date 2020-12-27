$(document).ready(function(){

	// // блок ресайза
	// $('html').prepend('<div id="resizer"></div>');
	// $("#resizer").css({
	//  			'width': '200px',
	//  			'height': '50px',
	//  			'position': 'fixed',
	//  			'right': '0',
	//  			'z-index': '9999',
	//  			'background': 'rgba(227, 25, 25, .5)',
	//  			'color': '#fff',
	//  			'fontSize': '24px',
	//  			'fontStyle': 'italic',
	//  			'fontWeight': 'bold',
	//  			'textAlign': 'center',
	//  			'lineHeight': '50px'
	//  });						

	//  // ф-ия отображения изменения параметров окна браузера при ресайзе
	//  $(window).resize(function(){
	//  	var winW = $(window).width();
	//  	var winH = $(window).height();
	//  	$("#resizer").text(winW + " X " + winH);
	//  });
	
	//ф-ия перехода по fieldset
	 $(".su__action--next").on("click", function(){
	 	$(this).parent().parent().hide;
	 	$(this).parent().parent().next().css("display","block");
	 });

	 $(".su__action--prev").on("click", function(){
	 	$(this).parent().parent().hide();
	 	$(this).parent().parent().prev().css("display","block");
	 });

	 $(".su__action--finish").on("click", function(){
	 	return false;
	 });

});		// the end