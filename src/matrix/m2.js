define( function ( require ) {

  var M = require( "matrix/m" );

  return function( FLOAT_ARRAY_TYPE ) {

    var M2 = function() {
      var elements = null;
      var argc = arguments.length;
      if( 1 === argc) {
        elements = arguments[0];
      } else if( 0 === argc ) {
        elements = [0, 0,
                    0, 0];
      } else {
        elements = arguments;
      }

      var matrix = new FLOAT_ARRAY_TYPE( 4 );
      for( var i = 0; i < 4; ++ i ) {
        matrix[i] = elements[i];
      }

      return matrix;
    };
    M2.prototype = new M();
    M2.prototype.constructor = M2;

    return M2;

  };

});