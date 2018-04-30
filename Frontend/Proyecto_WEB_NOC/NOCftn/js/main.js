$(document).ready(function(){
	var nav = $('.navbar-fixed-top');

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();

			if(scroll >= 100){

				nav.removeClass('normal').addClass('efecto')

			} else{
					nav.removeClass('efecto').addClass('normal');

			}
	});

	$('section#enlaces .anima1').waypoint(function(){
		$('section#enlaces  .anima1').addClass('.animated fadeInLeft');
	},{
		offset:'100%'
	});

	$('section .anima2').waypoint(function(){
		$('section#enlaces .anima2').addClass('animated fadeInRight');
	});

})

