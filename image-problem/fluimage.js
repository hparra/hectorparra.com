/* Fluimage.js */
/* Hacky Image Library Thing */
/* Hector G. Parra Alvarez, 2012 */


var resizeFluimage = function(e) {
   
    var image = $(e);
    var contained = false || image.hasClass("contained");
   
    /* naturalWidth & Height */
    var image_width = image.width();
    var image_height = image.height();
    var image_ratio = image_width / image_height;
    console.log("Image: " + image_width + " / " + image_height + " = " + image_ratio);
    
    /* parent should be parent node, not window */
    var parent_width = image.parent().width();
    var parent_height = image.parent().height();
    var parent_ratio = parent_width / parent_height;
    console.log("Document: " + parent_width + " / " + parent_height + " = " + parent_ratio);
    
    var width, height, w_loss = 0, h_loss = 0;
    
    /* Image Contained: image_ratio > parent_ratio */
    /* Image Overflows: image_ratio < parent_ratio */
    /* != is equivalent to XOR */
    if ((image_ratio < parent_ratio) != contained) {
	width = parent_width;
	height = parent_width / image_ratio;
	h_loss = height - parent_height;
	console.log("Height Loss: " + h_loss);
    }
    else {
	width = parent_height * image_ratio;
	height = parent_height;
	w_loss = width - parent_width;
	console.log("Width Loss: " + w_loss);
    }            
    console.log("Image Resized: " + width + " / " + height);
    
    image.width(width);
    image.height(height);
    image.css("margin-left", - w_loss / 2);
    image.css("margin-top", - h_loss / 2);
};

var resizeFluimages = function() {
    $("img.fluimage").each(function() {
	resizeFluimage(this);
    });
};

$(document).ready(function() {
    $("img.fluimage").load(function() {
	resizeFluimages();
	$(window).on("resize", resizeFluimages);
    });
});
