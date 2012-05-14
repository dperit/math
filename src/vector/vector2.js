define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {
    
    var notImplemented = require( "common/not-implemented" );
    var V2 = require( "vector/v2" )( FLOAT_ARRAY_TYPE );
    var vector2 = require( "vector/vector2-api" )( FLOAT_ARRAY_TYPE );

    function getValue( index ) {
      return this.buffer[index];
    }

    function setValue( index, value ) {
      this.buffer[index] = value;
      this.modified = true;
    }

    var Vector2 = function( arg1, arg2 ) {
      var argc = arguments.length;
      if( 1 === argc ) {
        if( arg1 instanceof Vector2 ) {
          this.buffer = new V2( arg1.buffer );
        } else {
          this.buffer = new V2( arg1 );
        }
      } else if( 2 === argc ) {
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

      this.modified = true;
    };

    function add( arg, result ) {
      var other;
      if( arg instanceof Vector2 ) {        
        other = arg.buffer;
      } else {
        other = arg;
      }

      result = result || this;
      vector2.add( this.buffer, other, result.buffer );

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

    function clone() {
      return new Vector2( this );
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

    function equal( arg ) {
      var other;
      if( arg instanceof Vector2 ) {        
        other = arg.buffer;
      } else {
        other = arg;
      }

      return vector2.equal( this.buffer, other );
    }

    function length() {
      return vector2.length( this.buffer );
    }

    function multiply( arg, result ) {
      result = result || this;
      vector2.multiply( this.buffer, arg, result.buffer );

      return this;
    }

    function negate( result ) {
      result = result || this;
      vector2.negate( this.buffer, result.buffer );

      return this;
    }

    function normalize( result ) {
      result = result || this;
      vector2.normalize( this.buffer, result.buffer );

      return this;
    }

    function project( arg, result ) {
      var other;
      if( arg instanceof Vector2 ) {        
        other = arg.buffer;
      } else {
        other = arg;
      }

      result = result || this;
      vector2.project( this.buffer, other, result.buffer );

      return this;
    }

    function set( arg1, arg2 ) {
      var argc = arguments.length;
      var buffer = this.buffer;
      if( 1 === argc ) {
        if( arg1 instanceof Vector2 ) {
          var other = arg1.buffer;
          buffer[0] = other[0];
          buffer[1] = other[1];
        } else {
          buffer[0] = arg1[0];
          buffer[1] = arg1[1];
        }
      } else if( 2 === argc ) {
        buffer[0] = arg1;
        buffer[1] = arg2;
      }

      return this;
    }

    function subtract( arg, result ) {
      var other;
      if( arg instanceof Vector2 ) {        
        other = arg.buffer;
      } else {
        other = arg;
      }

      result = result || this;
      vector2.subtract( this.buffer, other, result.buffer );

      return this;
    }    
    
    Vector2.prototype = {
      add: add,
      angle: angle,
      clear: clear,
      clone: clone,
      distance: notImplemented,
      dot: dot,
      equal: equal,
      length: length,
      multiply: multiply,
      negate: negate,
      normalize: normalize,
      project: project,
      set: set,
      subtract: subtract
    };

    return Vector2;

  };

});