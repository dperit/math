define( function ( require ) {

  return function( FLOAT_ARRAY_TYPE ) {

    var notImplemented = require( "common/not-implemented" );
    var V4 = require( "vector/v4" )( FLOAT_ARRAY_TYPE );

    function add( v1, v2, result ) {
      if( result === v1 ) {
        v1[0] += v2[0];
        v1[1] += v2[1];
        v1[2] += v2[2];
        v1[3] += v2[3];
        return;
      }

      if( undefined === result ) {
        result = new V4( v1[0] + v2[0], v1[1] + v2[1], v1[2] + v2[2], v1[3] + v2[3] );
        return result;
      } else {
        result[0] = v1[0] + v2[0];
        result[1] = v1[1] + v2[1];
        result[2] = v1[2] + v2[2];
        result[3] = v1[3] + v2[3];
        return;
      }
    }

    function angle( v1, v2 ) {
      return Math.acos(
        (v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2]) /
        (Math.sqrt(v1[0] * v1[0] + v1[1] * v1[1] + v1[2] * v1[2] + v1[3] * v1[3]) *
          Math.sqrt(v2[0] * v2[0] + v2[1] * v2[1] + v2[2] * v2[2] + v2[3] * v2[3]) ) );
    }

    function clear( v ) {
      v[0] = 0;
      v[1] = 0;
      v[2] = 0;
      v[3] = 0;

      return v;
    }

    function distance( v1, v2 ) {
      return Math.sqrt((v1[0] - v2[0]) * (v1[0] - v2[0]) +
                       (v1[1] - v2[1]) * (v1[1] - v2[1]) +
                       (v1[2] - v2[2]) * (v1[2] - v2[2]) +
                       (v1[3] - v2[3]) * (v1[3] - v2[3]));
    }

    function dot( v1, v2 ) {
      return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2] + v1[3] * v2[3];
    }

    function equal( v1, v2, e ) {
      e = e || 0.000001;

      if( v1.length !== v2.length ) {
        return false;
      }

      var d0 = Math.abs( v1[0] - v2[0] );
      var d1 = Math.abs( v1[1] - v2[1] );
      var d2 = Math.abs( v1[2] - v2[2] );
      var d3 = Math.abs( v1[3] - v2[3] );

      if( isNaN( d0 ) || d0 > e ||
          isNaN( d1 ) || d1 > e ||
          isNaN( d2 ) || d2 > e ||
          isNaN( d3 ) || d3 > e ) {
        return false;
      }

      return true;
    }

    function length( v ) {
      var r = 0;

      r += v[0] * v[0];
      r += v[1] * v[1];
      r += v[2] * v[2];
      r += v[3] * v[3];

      return Math.sqrt( r );
    }

    function limit(v, firstLimit, result){
      result = result || v;
      var length;
      length = Math.sqrt( v[0] * v[0] +
                          v[1] * v[1] +
                          v[2] * v[2] +
                          v[3] * v[3]);
      if (length > firstLimit){
        var ratio = firstLimit/length;
        result[0] = v[0] * ratio;
        result[1] = v[1] * ratio;
        result[2] = v[2] * ratio;
        result[3] = v[3] * ratio;
      }
      return result;
    }

    function multiply( v, s, result ) {
      result = result || new V4();
      
      result[0] = s * v[0];
      result[1] = s * v[1];
      result[2] = s * v[2];
      result[3] = s * v[3];
      
      return result;      
    }

    function negate( v, result ) {
      result = result || new V4();
      
      result[0] = -1 * v[0];
      result[1] = -1 * v[1];
      result[2] = -1 * v[2];
      result[3] = -1 * v[3];
      
      return result;      
    }

    function normalize( v, result ) {
      result = result || new V4();
      var l = length( v );
      
      result[0] = v[0]/l;
      result[1] = v[1]/l;
      result[2] = v[2]/l;
      result[3] = v[3]/l;
      
      return result;      
    }

    function set( v ) {
      if( 2 === arguments.length ) {
        v[0] = arguments[1][0];
        v[1] = arguments[1][1];
        v[2] = arguments[1][2];
        v[3] = arguments[1][3];
      } else {          
        v[0] = arguments[1];
        v[1] = arguments[2];
        v[2] = arguments[3];
        v[3] = arguments[4];
      }
     
      return v;      
    }

    function subtract( v1, v2, result ) {
      result = result || new V4();
      
      result[0] = v1[0] - v2[0];
      result[1] = v1[1] - v2[1];
      result[2] = v1[2] - v2[2];
      result[3] = v1[3] - v2[3];
      
      return result;
    }

    //This does a matrix4 by vector4 transform, which is a matrix multiplication
    //The matrix4 is on the left side of the multiplication and is multiplied by
    // the vector in column form
    function transform( v, m, result ) {
      result = result || new V4();

      var x = v[0], y = v[1], z = v[2], w = v[3];

      result[0] = m[0] * x + m[1] * y + m[2] * z + m[3] * w;
      result[1] = m[4] * x + m[5] * y + m[6] * z + m[7] * w;
      result[2] = m[8] * x + m[9] * y + m[10] * z + m[11] * w;
      result[3] = m[12] * x + m[13] * y + m[14] * z + m[15] * w;

      return result;
    }

    var vector4 = {
      add: add,
      angle: angle,
      clear: clear,
      distance: distance,
      dot: dot,
      equal: equal,
      length: length,
      limit: limit,
      multiply: multiply,
      negate: negate,
      normalize: normalize,
      set: set,
      subtract: subtract,
      transform: transform,

      x: new V4( 1, 0, 0, 0 ),
      y: new V4( 0, 1, 0, 0 ),
      z: new V4( 0, 0, 1, 0 ),
      w: new V4( 0, 0, 0, 1 ),
      zero: new V4( 0, 0, 0, 0 ),
      one: new V4( 1, 1, 1, 1 )
    };
    
    return vector4;

  };

});