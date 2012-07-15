define( function ( require ) {

  var M = require( "matrix/m" );

  return function( FLOAT_ARRAY_TYPE ) {

    var M3 = function() {
      var elements = null;
      var argc = arguments.length;
      if( 1 === argc) {
        elements = arguments[0];
      } else if( 0 === argc ) {
        elements = [0, 0, 0,
                    0, 0, 0,
                    0, 0, 0];
      } else {
        elements = arguments;
      }

      var matrix = new FLOAT_ARRAY_TYPE( 9 );
      for( var i = 0; i < 9; ++ i ) {
        matrix[i] = elements[i];
      }

      return matrix;
    };
    M3.prototype = new M();
    M3.prototype.constructor = M3;

    return M3;

  };

});