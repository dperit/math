define( function ( require ) {

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

    return M3;

  };

});