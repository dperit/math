define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {
    
    var _ = require( "../../lib/lodash" );
    var notImplemented = require( "common/not-implemented" );
    var V3 = require( "vector/v3" )( FLOAT_ARRAY_TYPE );
    var vector3 = require( "vector/vector3-api" )( FLOAT_ARRAY_TYPE );
    var Matrix = require( "matrix/matrix" );
    var Vector = require( "vector/vector" );

    function getValue( index ) {
      return this.buffer[index];
    }

    function setValue( index, value ) {
      this.buffer[index] = value;
      this.modified = true;
    }

    var Vector3 = function( arg1, arg2, arg3 ) {
      var argc = arguments.length;

      this.buffer = new V3(
        (arg1 instanceof Vector) ? arg1.buffer : arg1,
        (arg2 instanceof Vector) ? arg2.buffer : arg2,
        (arg3 instanceof Vector) ? arg3.buffer : arg3
      );

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
        }
      });

      this.modified = true;
      this.size = 3;
    };
    Vector3.prototype = new Vector();
    Vector3.prototype.constructor = Vector3;

    function add( arg, result ) {
      var other;
      if( arg instanceof Vector3 ) {        
        other = arg.buffer;
      } else {
        other = arg;
      }

      result = result || this;
      vector3.add( this.buffer, other, result.buffer );
      result.modified = true;

      return this;
    }

    function angle( arg ) {
      var other;
      if( arg instanceof Vector3 ) {        
        other = arg.buffer;
      } else {
        other = arg;
      }

      return vector3.angle( this.buffer, other );      
    }

    function clear() {
      vector3.clear( this.buffer );
      this.modified = true;

      return this;
    }

    function clone() {
      return new Vector3( this );
    }

    function cross( arg, result ) {
      var other;
      if( arg instanceof Vector3 ) {        
        other = arg.buffer;
      } else {
        other = arg;
      }

      result = result || this;
      vector3.cross( this.buffer, other, result.buffer );    
      result.modified = true; 

      return this;
    }

    function dot( arg ) {
      var other;
      if( arg instanceof Vector3 ) {        
        other = arg.buffer;
      } else {
        other = arg;
      }

      return vector3.dot( this.buffer, other );
    }

    function equal( arg ) {
      var other;
      if( arg instanceof Vector3 ) {        
        other = arg.buffer;
      } else {
        other = arg;
      }

      return vector3.equal( this.buffer, other );
    }

    function length() {
      return vector3.length( this.buffer );
    }

    function limit(firstLimit, secondLimit, result) {
      result = result || this;
      vector3.limit(this.buffer, firstLimit, secondLimit);
      result.modified = true;
      return result;
    }

    function multiply( arg, result ) {
      result = result || this;
      vector3.multiply( this.buffer, arg, result.buffer );
      result.modified = true;

      return this;
    }

    function negate( result ) {
      result = result || this;
      vector3.negate( this.buffer, result.buffer );
      result.modified = true;

      return this;
    }

    function normalize( result ) {
      result = result || this;
      vector3.normalize( this.buffer, result.buffer );
      result.modified = true;

      return this;
    }

    function set( arg1, arg2, arg3 ) {
      var argc = arguments.length;
      var buffer = this.buffer;
      if( 1 === argc ) {
        if( arg1 instanceof Vector3 ) {
          var other = arg1.buffer;
          buffer[0] = other[0];
          buffer[1] = other[1];
          buffer[2] = other[2];
          this.modified = true;
        } else {
          buffer[0] = arg1[0];
          buffer[1] = arg1[1];
          buffer[2] = arg1[2];
          this.modified = true;
        }
      } else if( 3 === argc ) {
        buffer[0] = arg1;
        buffer[1] = arg2;
        buffer[2] = arg3;
        this.modified = true;
      }      

      return this;
    }

    function subtract( arg, result ) {
      var other;
      if( arg instanceof Vector3 ) {        
        other = arg.buffer;
      } else {
        other = arg;
      }

      result = result || this;
      vector3.subtract( this.buffer, other, result.buffer );
      result.modified = true;

      return this;
    }

    function transform( arg, result ) {
      var other;
      if( arg instanceof Matrix ) {
        other = arg.buffer;
      } else {
        other = arg;
      }

      result = result || this;
      vector3.transform( this.buffer, other, result.buffer );
      result.modified = true;

      return this;
    }
    
    _.extend( Vector3.prototype, {
      add: add,
      angle: angle,
      clear: clear,
      clone: clone,
      cross: cross,
      distance: notImplemented,
      dot: dot,
      equal: equal,
      length: length,
      limit: limit,
      multiply: multiply,
      negate: negate,
      normalize: normalize,
      set: set,
      subtract: subtract,
      transform: transform
    });

    return Vector3;

  };

});