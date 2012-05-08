define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {
    
    var Vector2Primitive = require( "vector/vector2-primitive" );
    var vector2 = require( "vector/vector2-operations" );

    var Vector2 = function( vector ) {
      if( vector ) {
        if( vector instanceof Vector2 ) {
          this.buffer = vector.buffer;
        } else {
          this.buffer = vector;
        }
      } else {
        this.buffer = new Vector2Primitive();
      }
    };
    
    Vector2.prototype = {
        
    };

    return Vector2;

  };

});