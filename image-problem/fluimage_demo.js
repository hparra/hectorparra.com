

$(document).ready(function() {

    var img = $("#demo_img");

    // "Contain Image" Button
    $("#contain_image").on("click", function() {
	img.removeClass("nofocal"); // no necessary
	img.addClass("contained");
	resizeFluimages();
    });

    // "Overflow Image" Button
    $("#overflow_image").on("click", function() {
	img.removeClass("contained nofocal");
	resizeFluimages();
    });

    // "Overflow Image. No focal." Button
    $("#overflow_image_nofocal").on("click", function() {
	img.removeClass("contained");
	img.addClass("nofocal");
	resizeFluimages();
    });
    
    var calculateFigureHeight = function() {
	var nav = $("#nav");
	var figure = $("#pool");
	figure.height(figure.parent().height() - nav.height());
    }

    // changes height of figure, because CSS can't handle it
    calculateFigureHeight();
    $(window).on("resize", calculateFigureHeight);
});
