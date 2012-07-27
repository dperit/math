define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {
    
    var _ = require( "../../lib/lodash" );
    var notImplemented = require( "common/not-implemented" );
    var V2 = require( "vector/v2" )( FLOAT_ARRAY_TYPE );
    var vector2 = require( "vector/vector2-api" )( FLOAT_ARRAY_TYPE );
    var Vector = require( "vector/vector" );

    function getValue( index ) {
      return this.buffer[index];
    }

    function setValue( index, value ) {
      this.buffer[index] = value;
      this.modified = true;
    }

    var Vector2 = function( arg1, arg2 ) {
      var argc = arguments.length;

      this.buffer = new V2(
        (arg1 instanceof Vector) ? arg1.buffer : arg1,
        (arg2 instanceof Vector) ? arg2.buffer : arg2
      );

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
      this.size = 2;
    };
    Vector2.prototype = new Vector();
    Vector2.prototype.constructor = Vector2;

    function add( arg, result ) {
      var other;
      if( arg instanceof Vector2 ) {        
        other = arg.buffer;
      } else {
        other = arg;
      }

      result = result || this;
      vector2.add( this.buffer, other, result.buffer );
      result.modified = true;

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
      this.modified = true;

      return this;
    }

    function clone() {
      return new Vector2( this );
    }

    function distance(arg) {
      var other;
      if( arg instanceof Vector2 ) {
        other = arg.buffer;
      } else {
        other = arg;
      }
      return vector2.distance(this.buffer, other);
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

    function limit(max, result) {
      result = result || this;
      var other;
      if( result instanceof Vector2 ) {
        other = result.buffer;
        result.modified = true;
      } else {
        other = result;
      }
      vector2.limit(this.buffer, max, other);
      return result;
    }

    function multiply( arg, result ) {
      result = result || this;
      vector2.multiply( this.buffer, arg, result.buffer );
      result.modified = true;

      return this;
    }

    function negate( result ) {
      result = result || this;
      vector2.negate( this.buffer, result.buffer );
      result.modified = true;

      return this;
    }

    function normalize( result ) {
      result = result || this;
      vector2.normalize( this.buffer, result.buffer );
      result.modified = true;

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
      result.modified = true;

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
          this.modified = true;
        } else {
          buffer[0] = arg1[0];
          buffer[1] = arg1[1];
          this.modified = true;
        }
      } else if( 2 === argc ) {
        buffer[0] = arg1;
        buffer[1] = arg2;
        this.modified = true;
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
      result.modified = true;

      return this;
    }    
    
    _.extend( Vector2.prototype, {
      add: add,
      angle: angle,
      clear: clear,
      clone: clone,
      distance: distance,
      dot: dot,
      equal: equal,
      length: length,
      limit: limit,
      multiply: multiply,
      negate: negate,
      normalize: normalize,
      project: project,
      set: set,
      subtract: subtract
    });

    return Vector2;

  };

});