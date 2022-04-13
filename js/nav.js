$(document).ready(function() {
    $("#nav-toggle").click(function() {
		if ($('#nav-fullscreen').hasClass('open')) {
			$('.nav_items li').removeClass('fade');
		} else {
			console.log('need this to trigger, the fuck');
			$('.nav_items li').each(function(index) {
				let link = $(this);
				let timeout = index * 300;
				setTimeout(() => {
					link.addClass('fade')
				}, timeout);
			})
		}
		
        $("#nav-toggle, #nav-overlay, #nav-fullscreen").toggleClass("open");
    });

	$('.nav_items a').on('click', function(){
		$('#nav-toggle').trigger('click');
	})

    $(window).resize(resizeNav);
    resizeNav();
});

function resizeNav() {
    // Set the nav height to fill the window
    $("#nav-fullscreen").css({"height": window.innerHeight});

    // Set the circle radius to the length of the window diagonal,
    // this way we're only making the circle as big as it needs to be.
    var radius = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2));
    var diameter = radius * 2;
    $("#nav-overlay").width(diameter);
    $("#nav-overlay").height(diameter);
    $("#nav-overlay").css({"margin-top": -radius, "margin-left": -radius});
}