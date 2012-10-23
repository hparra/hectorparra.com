 // adds .naturalWidth() and .naturalHeight() methods to jQuery
// for retreaving a normalized naturalWidth and naturalHeight.
// Jack Moore
// http://www.jacklmoore.com/notes/naturalwidth-and-naturalheight-in-ie
(function($){
  var
  props = ['Width', 'Height'],
  prop;

  while (prop = props.pop()) {
    (function (natural, prop) {
      $.fn[natural] = (natural in new Image()) ? 
      function () {
        return this[0][natural];
      } : 
      function () {
        var 
        node = this[0],
        img,
        value;

        if (node.tagName.toLowerCase() === 'img') {
          img = new Image();
          img.src = node.src,
          value = img[prop];
        }
        return value;
      };
    }('natural' + prop, prop.toLowerCase()));
  }
}(jQuery));

// Fluimage.js 
// Hacky Image Library Thing 
// Hector G. Parra Alvarez, 2012 

// Haven't decided on best closure pattern yet
var resizeFluimage = function(e) {
   
    var image = $(e);

    var contained = image.hasClass("contained");
    var nofocal = image.hasClass("nofocal");
   
    // natural image width, height, ratio
    var nw = image.naturalWidth();
    var nh = image.naturalHeight();
    var nr = nw / nh; // store this? it never changes

    // parent of image node width, height, ratio
    var pw = image.parent().width();
    var ph = image.parent().height();
    var pr = pw / ph;

    // http://en.wikipedia.org/wiki/Focal_point_(disambiguation)
    // focal area (x, y, w, h)
    // focal dimensions (w, h) optional
    // focal point defaults to center of image
    var fx = parseInt(image.attr("data-focal-x")) || nw / 2;
    var fy = parseInt(image.attr("data-focal-y")) || nh / 2;
    var fw = parseInt(image.attr("data-focal-width")) || 0;
    var fh = parseInt(image.attr("data-focal-height")) || 0;

    // scaled image (w, h)
    var width, height;
    
    // "contained": natural ratio > parent ratio 
    // "overflows": natual ratio < parent ratio
    // != is equivalent to XOR 
    if ((nr < pr) != contained) {
	width = pw;
	height = pw / nr;
    } else {
	width = ph * nr;
	height = ph;
    }            

    // ratio of natural image to scaled
    var scale = width / nw;

    // midpoint of dilated focal area
    var sx = (fx + fw / 2) * scale;
    var sy = (fy + fh / 2) * scale;

    var margin_left, margin_top;

    // using "contained" or "nofocal" ignores focal area and centers image using midpoint
    // else if the midpoint of focal area > midpoint of parent, then translate image without creating whitespace
    if (contained || nofocal) { 
	margin_left = (pw - width) / 2;
	margin_top = (ph - height) / 2;
    } else {
	margin_left = (sx > pw / 2) ? Math.max(pw / 2 - sx, pw - width) : 0;
	margin_top = (sy > ph / 2) ? Math.max(ph / 2 - sy, ph - height) : 0;
    }

    // set image
    image.width(width);
    image.height(height);
    image.css("margin-left", margin_left);
    image.css("margin-top", margin_top);
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
