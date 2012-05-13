define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {
    
    var V3 = require( "vector/v3" )( FLOAT_ARRAY_TYPE );
    var vector3 = require( "vector/vector3-api" )( FLOAT_ARRAY_TYPE );

    function getValue( index ) {
      return this.buffer[index];
    }

    function setValue( index, value ) {
      this.buffer[index] = value;
    }

    var Vector3 = function( arg1, arg2, arg3 ) {
      var argc = arguments.length;
      if( 1 === argc ) {
        if( arg1 instanceof Vector3 ) {
          this.buffer = new V3( arg1.buffer );
        } else {
          this.buffer = new V3( arg1 );
        }
      } else if( 3 === argc ) {
        this.buffer = new V3( arg1, arg2, arg3 );
      } else {
        this.buffer = new V3();
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
        }
      });
    };

    function add( arg ) {
      var other;
      if( arg instanceof Vector3 ) {        
        other = arg.buffer;
      } else {
        other = arg;
      }

      vector3.add( this.buffer, other, this.buffer );

      return this;
    }
    
    Vector3.prototype = {
      add: add
    };

    return Vector3;

  };

});