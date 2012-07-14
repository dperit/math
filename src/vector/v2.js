define( function ( require ) {

  var V = require( "vector/v" );

  return function( FLOAT_ARRAY_TYPE ) {

    var V2 = function() {
      var argc = arguments.length;
      var i, j, vi = 0;

      var vector = new FLOAT_ARRAY_TYPE( 2 );

      for( i = 0; i < argc && vi < 2; ++ i ) {
        var arg = arguments[i];
        if( arg === undefined ) {
          break;
        } else if( arg instanceof Array ||
            arg instanceof FLOAT_ARRAY_TYPE ) {
          for( j = 0; j < arg.length && vi < 2; ++ j ) {
            vector[vi ++] = arg[j];
          }
        } else {
          vector[vi ++] = arg;
        }
      }
      // Fill in missing elements with zero
      for( ; vi < 2; ++ vi ) {
        vector[vi] = 0;
      }

      return vector;
    };
    V2.prototype = new V();
    V2.prototype.constructor = V2;

    return V2;

  };

});