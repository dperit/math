define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {
    
    var V2 = require( "vector/v2" );
    var vector2 = require( "vector/vector2-api" );

    var Vector2 = function( vector ) {
      if( vector ) {
        if( vector instanceof Vector2 ) {
          this.buffer = vector.buffer;
        } else {
          this.buffer = vector;
        }
      } else {
        this.buffer = new V2();
      }
    };
    
    Vector2.prototype = {
        
    };

    return Vector2;

  };

});