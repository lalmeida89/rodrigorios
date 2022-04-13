$(document).ready(function(){
	$(window).on('beforeunload', function(){
		window.scrollTo(0, 0);
	})

    $(window).scroll(function() {
        let scrollPos = $(window).scrollTop();
        let windowH   = $(window).height() * .85;
        headerPos(scrollPos, windowH);
     });

	if (location.hash){
		console.log(location.hash);
		scrollTo($(`${location.hash}`).offset().top, 750);
	}

    $('.image_gallery img').on('click', function(){
		let imageSrc = $(this).attr('src');
		$('#image_modal img').attr('src', imageSrc)
		$('#shade, #image_modal').fadeIn(700);
		$('body').css('overflow', 'hidden');
	});

	$('#shade, .modal_close').on('click', function(){
		$('#shade, #image_modal').hide();
		$('#image_modal img').attr('src', '');
		$('body').css('overflow', '');
	});

	// let imgArray = $('.image_wrapper img');
	$('.image_wrapper img').each(function(index){
		setTimeout(() => {
			let ele = $(this);
			ele.addClass('active');
		}, index * 200);
	})
});

const headerPos = (scrollPos, windowHeight) => {
    if (scrollPos >= 50) $('header').addClass('scroll');
    else $('header').removeClass('scroll');

    $(".fade_in").each(function() {
		let offset = $(this).data('offset');
		if(scrollPos > ($(this).offset().top - ($(window).height() * offset))) $(this).addClass("animate");
		else $(this).removeClass("animate");
	});
}

const scrollTo = (n,a) => {
 	if (!a) a=1000;
 	if (isNaN(n)) $("body,html").scrollTop(0);
	else $("body,html").animate({
		scrollTop:n-$("header").outerHeight(true)
	},a);
}