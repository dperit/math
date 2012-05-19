define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {

    var notImplemented = require( "common/not-implemented" );
    var M3 = require( "matrix/m3" )( FLOAT_ARRAY_TYPE );

    var matrix3 = {  
      add: notImplemented,
      clear: notImplemented,
      determinant: notImplemented,
      equal: notImplemented,
      inverse: notImplemented,
      multiply: notImplemented,
      multiplyV3: notImplemented,
      set: notImplemented,
      subtract: notImplemented,
      transpose: notImplemented,

      zero: new M3( 0, 0, 0,
                    0, 0, 0,
                    0, 0, 0 ),
      one: new M3( 1, 1, 1,
                   1, 1, 1,
                   1, 1, 1 ),
      identity: new M3( 1, 0, 0,
                        0, 1, 0,
                        0, 0, 1 )
    };
    
    return matrix3;

  };

});