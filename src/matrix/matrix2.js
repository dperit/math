define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {
    
    var notImplemented = require( "common/not-implemented" );
    var M2 = require( "matrix/m2" )( FLOAT_ARRAY_TYPE );
    // var matrix2 = require( "matrix/matrix2-api" )( FLOAT_ARRAY_TYPE );

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
      for( i = 0; i < 2; ++ i ) {
        this._views[i] = new Matrix2View( this, this.buffer, 
          i*2, (i+1)*2 );
      }
    }

    var Matrix2View = function( matrix, buffer, start, end ) {
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
        }
      });
    };

    var Matrix2 = function( arg1, arg2, 
                            arg3, arg4 ) {
      var argc = arguments.length;
      if( 1 === argc ) {
        if( arg1 instanceof Matrix2 ) {
          this.buffer = new M2( arg1.buffer );
        } else {
          this.buffer = new M2( arg1 );
        }
      } else if( 4 === argc ) {
        this.buffer = new M2( arg1, arg2, 
                              arg3, arg4 );
      } else {
        this.buffer = new M2();
      }

      Object.defineProperties( this, {
        "0": {
          get: getView.bind( this, 0 )
        },
        "1": {
          get: getView.bind( this, 1 )
        }
      });

      this._views = [];

      updateViews.call( this );

      this.modified = true;
    };

    function add( arg ) {
      var other;
      if( arg instanceof Matrix2 ) {        
        other = arg.buffer;
      } else {
        other = arg;
      }

      matrix2.add( this.buffer, other, this.buffer );

      return this;
    }
    
    Matrix4.prototype = {
      add: add
    };

    return Matrix2;

  };

});