define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {
    
    var notImplemented = require( "common/not-implemented" );
    var V4 = require( "vector/v4" )( FLOAT_ARRAY_TYPE );
    var vector4 = require( "vector/vector4-api" )( FLOAT_ARRAY_TYPE );

    function getValue( index ) {
      return this.buffer[index];
    }

    function setValue( index, value ) {
      this.buffer[index] = value;
      this.modified = true;
    }

    var Vector4 = function( arg1, arg2, arg3, arg4 ) {
      var argc = arguments.length;
      if( 1 === argc ) {
        if( arg1 instanceof Vector4 ) {
          this.buffer = new V4( arg1.buffer );
        } else {
          this.buffer = new V4( arg1 );
        }
      } else if( 4 === argc ) {
        this.buffer = new V4( arg1, arg2, arg3, arg4 );
      } else {
        this.buffer = new V4();
      }

      Object.defineProperties( this, {
        x: {
          get: getValue.bind( this, 0 ),
          set: setValue.bind( this, 0 )
        },
        y: {
          get: getValue.bind( this, 1 ),
          set: setValue.bind( this, 1 )
        },
        z: {
          get: getValue.bind( this, 2 ),
          set: setValue.bind( this, 2 )
        },
        w: {
          get: getValue.bind( this, 3 ),
          set: setValue.bind( this, 3 )
        }
      });

      this.modified = true;
    };

    function add( arg, result ) {
      var other;
      if( arg instanceof Vector4 ) {        
        other = arg.buffer;
      } else {
        other = arg;
      }

      result = result || this;
      vector4.add( this.buffer, other, result.buffer );
      result.modified = true;

      return this;
    }

    function angle( arg ) {
      var other;
      if( arg instanceof Vector4 ) {        
        other = arg.buffer;
      } else {
        other = arg;
      }

      return vector4.angle( this.buffer, other );      
    }

    function clear() {
      vector4.clear( this.buffer );
      this.modified = true;

      return this;
    }

    function clone() {
      return new Vector4( this );
    }

    function dot( arg ) {
      var other;
      if( arg instanceof Vector4 ) {        
        other = arg.buffer;
      } else {
        other = arg;
      }

      return vector4.dot( this.buffer, other );
    }

    function equal( arg ) {
      var other;
      if( arg instanceof Vector4 ) {        
        other = arg.buffer;
      } else {
        other = arg;
      }

      return vector4.equal( this.buffer, other );
    }

    function length() {
      return vector4.length( this.buffer );
    }

    function multiply( arg, result ) {
      result = result || this;
      vector4.multiply( this.buffer, arg, result.buffer );
      result.modified = true;

      return this;
    }

    function negate( result ) {
      result = result || this;
      vector4.negate( this.buffer, result.buffer );
      result.modified = true;

      return this;
    }

    function normalize( result ) {
      result = result || this;
      vector4.normalize( this.buffer, result.buffer );
      result.modified = true;

      return this;
    }

    function set( arg1, arg2, arg3, arg4 ) {
      var argc = arguments.length;
      var buffer = this.buffer;
      if( 1 === argc ) {
        if( arg1 instanceof Vector4 ) {
          var other = arg1.buffer;
          buffer[0] = other[0];
          buffer[1] = other[1];
          buffer[2] = other[2];
          buffer[3] = other[3];
          this.modified = true;
        } else {
          buffer[0] = arg1[0];
          buffer[1] = arg1[1];
          buffer[2] = arg1[2];
          buffer[3] = arg1[3];
          this.modified = true;
        }
      } else if( 4 === argc ) {
        buffer[0] = arg1;
        buffer[1] = arg2;
        buffer[2] = arg3;
        buffer[3] = arg4;
        this.modified = true;
      }

      return this;
    }

    function subtract( arg, result ) {
      var other;
      if( arg instanceof Vector4 ) {        
        other = arg.buffer;
      } else {
        other = arg;
      }

      result = result || this;
      vector4.subtract( this.buffer, other, result.buffer );
      result.modified = true;

      return this;
    }
  
    Vector4.prototype = {
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
      set: set,
      subtract: subtract
    };

    return Vector4;

  };

});