$(document).ready(function(){
	$(window).on('beforeunload', function(){
		window.scrollTo(0, 0);
	});

	hero_animations();

	$(window).scroll(function() {
        let scrollPos = $(window).scrollTop();
        heroAnim($('.hero .image_wrapper, .hero_text'), scrollPos, 50)
     });
});

const hero_animations = () => {
	heroAnim($('.hero .image_wrapper > div, .hero_text'), 0, 50);
	split_chars($(".hero_text h1"))

	setTimeout(() => {
		setTimeout(() => {
			$('#home_hero, .intro_images').addClass('visible')
			theater_animation($('.hero .cl_image'))
		}, 2000);
		$("#home .hero_text").addClass('animate')
	}, 1000);
}

const theater_animation = ele => {
	ele.addClass("animated");
	ele.removeClass("hidden");
	setTimeout(function() {
		$('.hero_text').addClass('whiten');
		setTimeout(function() {
			ele.siblings().addClass('hidden');
		}, 1000)
	}, 1000);
}

const heroAnim = (object, scrollPos, plx) => {
    let objParent = object.parent();

	if (scrollPos <= (objParent.offset().top + objParent.outerHeight(true))
        && scrollPos + $(window).height() > objParent.offset().top) {
            let a = $(window).height() - objParent.offset().top;
            let b = $(window).height() + objParent.outerHeight(true);
            let n = (a*10)/b * plx;
            let q = (a*22)/b * plx;
            let scrollPercent = scrollPos / objParent.outerHeight(true);
            let scale = (1 - scrollPercent/2.5) * 75
            let opacity = (1 - scrollPercent/2);

            $('.hero .image_wrapper').css({
                transform: `translate3d(0, ${n}px, 0)`,
                filter: `brightness(${opacity})`
            });

			$('.hero .image_wrapper > div').css({
                backgroundSize: `auto ${scale}%`
			})

            $('.hero .hero_text').css({
                transform: `translate3d(0, ${q}px, 0)`,
				opacity: opacity
            })
	} 
}

const split_chars = ele => {
	let counter = 0;
	let sCounter = 1.2;
	let split = ele.text().split('');
	let res = split.map(function(element,index){
        if (index < 14 || index >= 18) {
			counter += .05;
			let delay = parseFloat(counter).toFixed(2);
			let style = `transition-delay: ${delay}s`
			return `<span style="${style}">${element}</span>`
		} else {
			sCounter += .1;
			let delay = parseFloat(sCounter).toFixed(2);
			let style = `transition-delay: ${delay}s`
			return `<strong style="${style}">${element}</strong>`
		}
	})
	ele.html(res);
}