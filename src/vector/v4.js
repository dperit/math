define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {

    var V4 = function() {
      var elements = null;
      var argc = arguments.length;
      if( 1 === argc) {
        elements = arguments[0];
      } else if( 0 === argc ) {
        elements = [0, 0, 0, 0];
      } else {
        elements = arguments;
      }

      var vector = new FLOAT_ARRAY_TYPE( 4 );
      for( var i = 0; i < 4; ++ i ) {
        vector[i] = elements[i];
      }

      return vector;
    };

    return V4;

  };

});