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
  
    Vector4.prototype = {
      add: notImplemented,
      angle: notImplemented,
      clear: notImplemented,
      clone: notImplemented,
      distance: notImplemented,
      dot: notImplemented,
      equal: notImplemented,
      length: notImplemented,
      multiply: notImplemented,
      negate: notImplemented,
      normalize: notImplemented,
      set: notImplemented,
      subtract: notImplemented
    };

    return Vector4;

  };

});