$(document).ready(function(){

	// header color change
	$(window).on("scroll",function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDistance > 80){
			$header.addClass("scrolleff");
		}
		else{
			$header.removeClass("scrolleff");
		}
	})

	// wow plugin initialize
	if(screen.width > 768){
		new WOW().init();
	}
	

	// fancybox plugin options
	$('[data-fancybox]').fancybox({
		loop : true
	});

	// stellar plugin initialize
	if(screen.width > 768){
		$(window).stellar();
	}
})
