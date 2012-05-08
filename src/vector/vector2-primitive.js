define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {

    var Vector2Primitive = function() {
      var elements = null;
      if( 1 === arguments.length ) {
        elements = arguments[0];
      } else {
        elements = arguments;
      }

      var vector = new FLOAT_ARRAY_TYPE( 2 );
      for( var i = 0; i < 2; ++ i ) {
        vector[i] = elements[i];
      }

      return vector;
    };

    return Vector2Primitive;

  };

});