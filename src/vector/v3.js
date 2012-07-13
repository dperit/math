define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {

    var V3 = function() {
      var argc = arguments.length;
      var i, j, vi = 0;

      var vector = new FLOAT_ARRAY_TYPE( 3 );

      for( i = 0; i < argc && vi < 3; ++ i ) {
        var arg = arguments[i];
        if( arg instanceof Array ||
            arg instanceof FLOAT_ARRAY_TYPE ) {
          for( j = 0; j < arg.length && vi < 3; ++ j ) {
            vector[vi ++] = arg[j];
          }
        } else {
          vector[vi ++] = arg;
        }
      }
      // Fill in missing elements with zero
      for( ; vi < 3; ++ vi ) {
        vector[vi] = 0;
      }

      return vector;
    };

    return V3;

  };

});