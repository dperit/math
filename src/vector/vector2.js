define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {
    
    var V2 = require( "vector/v2" )( FLOAT_ARRAY_TYPE );
    var vector2 = require( "vector/vector2-api" )( FLOAT_ARRAY_TYPE );

    function getValue( index ) {
      return this.buffer[index];
    }

    function setValue( index, value ) {
      this.buffer[index] = value;
    }

    var Vector2 = function( arg1, arg2 ) {
      if( 1 === arguments.length ) {
        if( arg1 instanceof Vector2 ) {
          this.buffer = arg1.buffer;
        } else if ( arg1 instanceof FLOAT_ARRAY_TYPE ) {
          this.buffer = arg1;
        } else {
          this.buffer = new V2( arg1 );
        }
      } else if( 2 === arguments.length ) {
        this.buffer = new V2( arg1, arg2 );
      } else {
        this.buffer = new V2();
      }

      Object.defineProperties( this, {
        x: {
          get: getValue.bind( this, 0 ),
          set: setValue.bind( this, 0 )
        },
        y: {
          get: getValue.bind( this, 1 ),
          set: setValue.bind( this, 1 )
        }
      });
    };

    function add( arg ) {
      var other;
      if( arg instanceof Vector2 ) {        
        other = arg.buffer;
      } else {
        other = arg;
      }

      vector2.add( this.buffer, other, this.buffer );

      return this;
    }

    function angle( arg ) {
      var other;
      if( arg instanceof Vector2 ) {        
        other = arg.buffer;
      } else {
        other = arg;
      }

      return vector2.angle( this.buffer, other );
    }

    function clear() {
      vector2.clear( this.buffer );

      return this;
    }

    function dot( arg ) {
      var other;
      if( arg instanceof Vector2 ) {        
        other = arg.buffer;
      } else {
        other = arg;
      }

      return vector2.dot( this.buffer, other );
    }
    
    Vector2.prototype = {
      add: add,
      angle: angle,
      clear: clear,
      dot: dot,
      equal: undefined,
      length: undefined,
      multiply: undefined,
      negate: undefined,
      normalize: undefined,
      project: undefined,
      set: undefined,
      subtract: undefined
    };

    return Vector2;

  };

});