define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {
    
    var notImplemented = require( "common/not-implemented" );
    var M3 = require( "matrix/m3" )( FLOAT_ARRAY_TYPE );
    var matrix3 = require( "matrix/matrix3-api" )( FLOAT_ARRAY_TYPE );

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
      for( i = 0; i < 3; ++ i ) {
        this._views[i] = new Matrix3View( this, this.buffer, 
          i*3, (i+1)*3 );
      }
    }

    var Matrix3View = function( matrix, buffer, start, end ) {
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
        }
      });
    };

    var Matrix3 = function( arg1, arg2, arg3, 
                            arg4, arg5, arg6, 
                            arg7, arg8, arg9 ) {
      var argc = arguments.length;
      if( 1 === argc ) {
        if( arg1 instanceof Matrix3 ) {
          this.buffer = new M3( arg1.buffer );
        } else {
          this.buffer = new M3( arg1 );
        }
      } else if( 9 === argc ) {
        this.buffer = new M3( arg1, arg2, arg3, 
                              arg4, arg5, arg6, 
                              arg7, arg8, arg9 );
      } else {
        this.buffer = new M3();
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
        }
      });

      this._views = [];

      updateViews.call( this );

      this.modified = true;
    };

    function add( arg ) {
      var other;
      if( arg instanceof Matrix3 ) {        
        other = arg.buffer;
      } else {
        other = arg;
      }

      matrix3.add( this.buffer, other, this.buffer );

      return this;
    }
    
    Matrix3.prototype = {
      add: add
    };

    return Matrix3;

  };

});