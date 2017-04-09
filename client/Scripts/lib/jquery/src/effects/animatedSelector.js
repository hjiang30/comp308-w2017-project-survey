<<<<<<< HEAD
define( [
	"../core",
	"../selector",
	"../effects"
], function( jQuery ) {

jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};

} );
=======
define( [
	"../core",
	"../selector",
	"../effects"
], function( jQuery ) {

jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};

} );
>>>>>>> e398eb947cbc510166d83e92d001865b2bfc6266
