define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {
    
    var notImplemented = require( "common/not-implemented" );
    var M4 = require( "matrix/m4" )( FLOAT_ARRAY_TYPE );
    var matrix4 = require( "matrix/matrix4-api" )( FLOAT_ARRAY_TYPE );

    function getView( index ) {
      return this._views[index];
    }

    function getValue( index ) {
      return this.buffer[index];
    }

    function setValue( index, value ) {
      this.buffer[index] = value;
      this.matrix.modified = true;
    }

    function updateViews() {
      var i;
      for( i = 0; i < 4; ++ i ) {
        this._views[i] = new Matrix4View( this, this.buffer, 
          i*4, (i+1)*4 );
      }
    }

    var Matrix4View = function( matrix, buffer, start, end ) {
      this.matrix = matrix;
      this.buffer = buffer.subarray( start, end );

      Object.defineProperties( this, {
        "0": {
          get: getValue.bind( this, 0 ),
          set: setValue.bind( this, 0 )
        },
        "1": {
          get: getValue.bind( this, 1 ),
          set: setValue.bind( this, 1 )
        },
        "2": {
          get: getValue.bind( this, 2 ),
          set: setValue.bind( this, 2 )
        },
        "3": {
          get: getValue.bind( this, 3 ),
          set: setValue.bind( this, 3 )
        }        
      });
    };

    var Matrix4 = function( arg1, arg2, arg3, arg4,
                            arg5, arg6, arg7, arg8,
                            arg9, arg10, arg11, arg12,
                            arg13, arg14, arg15, arg16 ) {
      var argc = arguments.length;
      if( 1 === argc ) {
        if( arg1 instanceof Matrix4 ) {
          this.buffer = new M4( arg1.buffer );
        } else {
          this.buffer = new M4( arg1 );
        }
      } else if( 16 === argc ) {
        this.buffer = new M4( arg1, arg2, arg3, arg4,
                              arg5, arg6, arg7, arg8,
                              arg9, arg10, arg11, arg12,
                              arg13, arg14, arg15, arg16 );
      } else {
        this.buffer = new M4();
      }

      Object.defineProperties( this, {
        "0": {
          get: getView.bind( this, 0 )
        },
        "1": {
          get: getView.bind( this, 1 )
        },
        "2": {
          get: getView.bind( this, 2 )
        },
        "3": {
          get: getView.bind( this, 3 )
        },
      });

      this._views = [];

      updateViews.call( this );

      this.modified = true;
    };

    function add( arg ) {
      var other;
      if( arg instanceof Vector3 ) {        
        other = arg.buffer;
      } else {
        other = arg;
      }

      matrix4.add( this.buffer, other, this.buffer );

      return this;
    }
    
    Matrix4.prototype = {
      add: add
    };

    return Matrix4;

  };

});