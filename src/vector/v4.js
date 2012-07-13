define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {

    var V4 = function() {
      var argc = arguments.length;
      var i, j, vi = 0;

      var vector = new FLOAT_ARRAY_TYPE( 4 );

      for( i = 0; i < argc && vi < 4; ++ i ) {
        var arg = arguments[i];
        if( arg instanceof Array ||
            arg instanceof FLOAT_ARRAY_TYPE ) {
          for( j = 0; j < arg.length && vi < 4; ++ j ) {
            vector[vi ++] = arg[j];
          }
        } else {
          vector[vi ++] = arg;
        }
      }
      // Fill in missing elements with zero
      for( ; vi < 4; ++ vi ) {
        vector[vi] = 0;
      }

      return vector;
    };

    return V4;

  };

});