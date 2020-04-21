$(function(){
	$('.nav-button').click(function(){
		$('html').toggleClass('open');
	});
	
	$(window).scroll(function(){
		if(100 < jQuery(this).scrollTop()){
			jQuery( '.header-monbran' ).addClass( 'm_fixed' );
		} else{
			jQuery( '.header-monbran' ).removeClass( 'm_fixed' );
		}
	});
});