define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {
    
    var _ = require( "../../lib/lodash" );
    var notImplemented = require( "common/not-implemented" );
    var M3 = require( "matrix/m3" )( FLOAT_ARRAY_TYPE );
    var matrix3 = require( "matrix/matrix3-api" )( FLOAT_ARRAY_TYPE );
    var Matrix = require( "matrix/matrix" );

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
    Matrix3.prototype = new Matrix();
    Matrix3.prototype.constructor = Matrix3;

    function add( arg, result ) {
      var other;
      if( arg instanceof Matrix3 ) {        
        other = arg.buffer;
      } else {
        other = arg;
      }

      result = result || this;
      matrix3.add( this.buffer, other, result.buffer );
      result.modified = true;

      return this;
    }

    function clear() {
      matrix3.clear( this.buffer );
      this.modified = true;

      return this;
    }

    function clone() {
      return new Matrix3( this );
    }

    function determinant() {
      return matrix3.determinant( this.buffer );
    }

    function equal( arg ) {
      var other;
      if( arg instanceof Matrix3 ) {        
        other = arg.buffer;
      } else {
        other = arg;
      }

      return matrix3.equal( this.buffer, other );
    }

    function inverse( result ) {
      result = result || this;
      if( !matrix3.determinant( this.buffer ) ) {
        throw new Error( "matrix is singular" );
      }
      matrix3.inverse( this.buffer, result.buffer );
      result.modified = true;

      return this;
    }

    function multiply( arg, result ) {
      var other;
      if( arg instanceof Matrix3 ) {        
        other = arg.buffer;
      } else {
        other = arg;
      }

      result = result || this;
      matrix3.multiply( this.buffer, other, result.buffer );
      result.modified = true;

      return this;
    }

    function rotate( v, result ) {
      result = result || this;
      matrix3.rotate( this.buffer, v, result.buffer );
      result.modified = true;

      return this;
    }

    function scale( v, result ) {
      result = result || this;
      matrix3.scale( this.buffer, v, result.buffer );
      result.modified = true;

      return this;
    }

    function set( arg1, arg2, arg3, arg4,
                  arg5, arg6, arg7, arg8,
                  arg9, arg10, arg11, arg12,
                  arg13, arg14, arg15, arg16 ) {
      var argc = arguments.length;
      var buffer = this.buffer;
      var other;
      if( 1 === argc ) {
        if( arg1 instanceof Matrix3 ) {
          other = arg1.buffer;
        } else {
          other = arg1;
        }
        buffer[0] = other[0];
        buffer[1] = other[1];
        buffer[2] = other[2];
        buffer[3] = other[3];
        buffer[4] = other[4];
        buffer[5] = other[5];
        buffer[6] = other[6];
        buffer[7] = other[7];
        buffer[8] = other[8];
        buffer[9] = other[9];
        buffer[10] = other[10];
        buffer[11] = other[11];
        buffer[12] = other[12];
        buffer[13] = other[13];
        buffer[14] = other[14];
        buffer[15] = other[15];
        this.modified = true;
      } else if( 16 === argc ) {
        buffer[0] = arg1;
        buffer[1] = arg2;
        buffer[2] = arg3;
        buffer[3] = arg4;
        buffer[4] = arg5;
        buffer[5] = arg6;
        buffer[6] = arg7;
        buffer[7] = arg8;
        buffer[8] = arg9;
        buffer[9] = arg10;
        buffer[10] = arg11;
        buffer[11] = arg12;
        buffer[12] = arg13;
        buffer[13] = arg14;
        buffer[14] = arg15;
        buffer[15] = arg16;
        this.modified = true;
      }

      return this;
    }

    function subtract( arg, result ) {
      var other;
      if( arg instanceof Matrix3 ) {        
        other = arg.buffer;
      } else {
        other = arg;
      }

      result = result || this;
      matrix3.subtract( this.buffer, other, result.buffer );
      result.modified = true;

      return this;
    }

    function transpose( result ) {
      result = result || this;
      matrix3.transpose( this.buffer, result.buffer );
      result.modified = true;

      return this;
    }
    
    _.extend( Matrix3.prototype, {
      add: add,
      clear: clear,
      clone: clone,
      determinant: determinant,
      equal: equal,
      inverse: inverse,
      multiply: multiply,
      rotate: rotate,
      scale: scale,
      set: set,
      subtract: subtract,
      transpose: transpose
    });

    return Matrix3;

  };

});