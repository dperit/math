define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {

    var notImplemented = require( "common/not-implemented" );
    var M2 = require( "matrix/m2" )( FLOAT_ARRAY_TYPE );

    var matrix2 = {  
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

      zero: new M2( 0, 0,
                    0, 0 ),
      one: new M2( 1, 1,
                   1, 1 ),
      identity: new M2( 1, 0,
                        0, 1 )
    };
    
    return matrix2;

  };

});