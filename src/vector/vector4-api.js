define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {

    var notImplemented = require( "common/not-implemented" );
    var V4 = require( "vector/v4" )( FLOAT_ARRAY_TYPE );

    var vector4 = {
      add: notImplemented,
      angle: notImplemented,
      clear: notImplemented,
      distance: notImplemented,
      dot: notImplemented,
      equal: notImplemented,
      length: notImplemented,
      limit: notImplemented,
      multiply: notImplemented,
      negate: notImplemented,
      normalize: notImplemented,
      set: notImplemented,
      subtract: notImplemented,

      x: new V4( 1, 0, 0, 0 ),
      y: new V4( 0, 1, 0, 0 ),
      z: new V4( 0, 0, 1, 0 ),
      w: new V4( 0, 0, 0, 1 ),
      zero: new V4( 0, 0, 0, 0 ),
      one: new V4( 1, 1, 1, 1 )
    };
    
    return vector4;

  };

});