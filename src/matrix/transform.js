define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {
    
    var notImplemented = require( "common/not-implemented" );
    var M4 = require( "matrix/m4" )( FLOAT_ARRAY_TYPE );
    var transform = require( "matrix/transform-api" )( FLOAT_ARRAY_TYPE );
    var matrix4 = require( "matrix/matrix4-api" )( FLOAT_ARRAY_TYPE );
    var Matrix4 = require( "matrix/matrix4" )( FLOAT_ARRAY_TYPE );
    var V3 = require( "vector/v3" )( FLOAT_ARRAY_TYPE );

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
        this._views[i] = new TransformView( this, this.buffer, 
          i*4, (i+1)*4 );
      }
    }

    var TransformView = function( matrix, buffer, start, end ) {
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

    var Transform = function( arg1, arg2, arg3 ) {
      var argc = arguments.length;
      if( 1 === argc ) {
        if( arg1 instanceof Transform ||
            arg1 instanceof Matrix4 ) {
          this.buffer = new M4( arg1.buffer );
        } else if( arg1 instanceof M4 ) {
          this.buffer = new M4( arg1 );
        } else {
          this.buffer = transform.fixed( arg1, arg2, arg3 );
        }
      } else {
        this.buffer = transform.fixed( arg1, arg2, arg3 );
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
        }
      });

      this._views = [];

      updateViews.call( this );

      this.modified = true;
    };

    function clone() {
      return new Transform( this );
    }

    //Recover the translation, rotation, and scale from the 4x4 matrix
    // in the given transform
    function decomposeMatrix(arg, result){
      var matrix;
      if (arg){
        if (arg instanceof Matrix4 ||
          arg instanceof Transform){
          matrix = arg.buffer;
        } else {
          matrix = arg;
        }
      }else{
        matrix = this.buffer;
      }

      var translation = new V3(matrix[3], matrix[7], matrix[11]);

      var scaling_x = Math.sqrt(matrix[0] * matrix[0] + matrix[1] * matrix[1] + matrix[2] * matrix[2]);
      var scaling_y = Math.sqrt(matrix[4] * matrix[4] + matrix[5] * matrix[5] + matrix[6] * matrix[6]);
      var scaling_z = Math.sqrt(matrix[8] * matrix[8] + matrix[9] * matrix[9] + matrix[10] * matrix[10]);
      var scaling = new V3(scaling_x, scaling_y, scaling_z);

      var rotation = new M4(matrix[0]/scaling_x, matrix[1]/scaling_x, matrix[2]/scaling_x,0,
        matrix[4]/scaling_y,matrix[5]/scaling_y,matrix[6]/scaling_y,0,
        matrix[8]/scaling_z,matrix[9]/scaling_z,matrix[10]/scaling_z,0,
        0,0,0,1);

      result = result || this;
      result.translation = translation;
      result.scaling = scaling;
      result.rotation = rotation;

      return [translation, scaling, rotation];
    }

    function equal( arg ) {
      var other;
      if( arg instanceof Matrix4 ||
          arg instanceof Transform ) {        
        other = arg.buffer;
      } else {
        other = arg;
      }

      return matrix4.equal( this.buffer, other );
    }

    function multiply( arg, result ) {
      var other;
      if( arg instanceof Matrix4 ||
          arg instanceof Transform ) {        
        other = arg.buffer;
      } else {
        other = arg;
      }

      result = result || this;
      matrix4.multiply( this.buffer, other, result.buffer );
      result.modified = true;

      return this;
    }

    function rotate( v, result ) {
      var rotation = transform.rotate( v );

      result = result || this;
      matrix4.multiply( this.buffer, rotation, result.buffer );
      result.modified = true;

      return this;
    }

    function scale( v, result ) {
      var scaled = transform.scale( v );

      result = result || this;
      matrix4.multiply( this.buffer, scaled, result.buffer );
      result.modified = true;

      return this;
    }

    function set( t, r, s ) {
      matrix4.set( this.buffer, matrix4.identity );
      transform.fixed( t, r, s, this.buffer );
      this.modified = true;
    }

    function transformDirection( v, result ) {

    }

    function transformPoint( v, result ) {

    }

    function translate( v, result ) {
      var translation = transform.translate( v );

      result = result || this;
      matrix4.multiply( this.buffer, translation, result.buffer );
      result.modified = true;

      return this;
    }

    Transform.prototype = {
      clone: clone,
      decomposeMatrix: decomposeMatrix,
      equal: equal,
      inverseTransformDirection: notImplemented,
      inverseTransformPoint: notImplemented,
      multiply: multiply,
      rotate: rotate,
      scale: scale,
      set: set,
      transformDirection: notImplemented,
      transformPoint: notImplemented,
      translate: translate
    };

    return Transform;

  };

});