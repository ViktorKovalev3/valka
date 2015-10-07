var pswpElement = document.querySelectorAll('.pswp')[0],
	items = examples.map(function(x) {return {src: x.image}});

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
};

// Initializes and opens PhotoSwipe
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init();