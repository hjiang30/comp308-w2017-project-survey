<<<<<<< HEAD
define( [
	"../../core",
	"../../selector"

	// css is assumed
], function( jQuery ) {

	return function( elem, el ) {

		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" ||
			!jQuery.contains( elem.ownerDocument, elem );
	};
} );
=======
define( [
	"../../core",
	"../../selector"

	// css is assumed
], function( jQuery ) {

	return function( elem, el ) {

		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" ||
			!jQuery.contains( elem.ownerDocument, elem );
	};
} );
>>>>>>> e398eb947cbc510166d83e92d001865b2bfc6266
