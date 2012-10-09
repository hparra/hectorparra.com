
// Learning Facebook SDK & API
// HectorParra.com

// I'm using most of Crockford's coding coventions, except for documentation
// http://javascript.crockford.com/code.html

/**
   Just checking if console exists
   See: https://developer.mozilla.org/en-US/docs/DOM/console
*/
(function() {
    if (typeof console === "undefined") {
	console = {
            log: function(msg) { 
		/* Yup. We're using alert as a last resort! */
		alert(msg);
	    }
	};
    }
})();

var onEdgeCreated = function(href) {
    alert("Thank you for liking me!");
};

var onEdgeRemoved = function(href) {
    alert("Why don't you love me anymore?!");
};

/**
   Called when as soon as the SDK is loaded.
*/
window.fbAsyncInit = function() {
    
    /* See: https://developers.facebook.com/docs/reference/javascript/FB.init/ */
    FB.init({
	appId      : '199393890192481', /* your app id */
	status     : true, /* check login status */
	cookie     : true, /* enable cookies to allow the server to access the session */
	logging    : true, /* enable logging */
	status     : true, /* fetch fresh status */
	xfbml      : true, /* parse XFBML */
	channelUrl : null, /* specifies the URL of a custom URL channel file */
	authResponse : true, /* manually set the object retrievable from getAuthResponse */
	frictionlessRequests: false,
	hideFlashCallback: null
    });
    
    /* Code to run after the SDK is loaded should be placed here, after call to FB.init */


    /* asynchronous method to get the current login status */
    /* this will ONLY execute on domains registered with your app */
    FB.getLoginStatus(function(response) {
	
	if (response.status === 'connected') {
	    var uid = response.authResponse.userID;
	    var accessToken = response.authResponse.accessToken;
	    console.log("Connected to FB as '" + uid + "'");
	    console.log("Token: " + accessToken);
	} else if (response.status === 'not_authorized') {
	    /* user is logged in to Facebook, but not your app */
	    console.log("Logged in but not authorized to use this app.");
	} else {
	    // the user isn't logged in to Facebook.
	    console.log("Not logged into Facebook.");
	}
    });

    /* edge.create */
    FB.Event.subscribe("edge.create", function(href) {
	console.log("You liked the URL: " + href);
    });
    
    /* edge.remove */
    FB.Event.subscribe("edge.remove", function(href, widget) {
	console.log("You unliked the URL: " + href);
    });


    FB.Event.subscribe("edge.create", onEdgeCreated);
    FB.Event.subscribe("edge.remove", onEdgeRemoved);

};


/**
   Standard procedure for asynchronous javascript.
   Loads Facebook Javascript SDK by adding <script> element to document.
   Checks to see if said element already exists beforehand.
   See: https://developers.facebook.com/docs/reference/javascript/
*/
(function(d) {
    var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement('script'); js.id = id; js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    ref.parentNode.insertBefore(js, ref);
}(document));
