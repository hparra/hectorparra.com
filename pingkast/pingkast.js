$(document).ready(function() {
    $("div#kanvas").on("click", function(e) {
	$("div#kanvas > img").toggleClass("contained");

	/* this is wrong. hacky. who should be in charge of this? */
	resizeFluimages();
    });
    
});





