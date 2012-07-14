define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {

    var M = require( "matrix/m" );

    var M4 = function() {
      var elements = null;
      var argc = arguments.length;
      if( 1 === argc) {
        elements = arguments[0];
      } else if( 0 === argc ) {
        elements = [0, 0, 0, 0,
                    0, 0, 0, 0,
                    0, 0, 0, 0,
                    0, 0, 0, 0];
      } else {
        elements = arguments;
      }

      var matrix = new FLOAT_ARRAY_TYPE( 16 );
      for( var i = 0; i < 16; ++ i ) {
        matrix[i] = elements[i];
      }

      return matrix;
    };
    M4.prototype = new M();
    M4.prototype.constructor = M4;

    return M4;

  };

});